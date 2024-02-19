import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository'
import { Content } from '../entities/content'
import { Notification } from '../entities/notification'
import { NotificationNotFound } from './errors/notification-not-found.error'
import { UnreadNotification } from './unread-notification'

describe('Unread notification', () => {
  it('should be able to Unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const unreadNotification = new UnreadNotification(notificationRepository)

    const notification = new Notification({
      recipientId: 'recipient-id',
      content: new Content('New notitication'),
      category: 'social',
      readAt: new Date(),
    })

    await notificationRepository.create(notification)

    await unreadNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationRepository.notifications[0].readAt).toBeNull()
  })

  it('should NOT be able to Unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const unreadNotification = new UnreadNotification(notificationRepository)

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-id',
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})
