import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository'
import { NotificationNotFound } from './errors/notification-not-found.error'
import { UnreadNotification } from './unread-notification'
import { makeNotification } from '@test/factories/notification-factory'

describe('Unread notification', () => {
  it('should be able to Unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const unreadNotification = new UnreadNotification(notificationRepository)

    const notification = makeNotification({
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
