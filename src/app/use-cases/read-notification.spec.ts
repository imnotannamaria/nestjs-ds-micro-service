import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository'
import { Content } from '../entities/content'
import { Notification } from '../entities/notification'
import { NotificationNotFound } from './errors/notification-not-found.error'
import { ReadNotification } from './read-notification'

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const readNotification = new ReadNotification(notificationRepository)

    const notification = new Notification({
      recipientId: 'recipient-id',
      content: new Content('New notitication'),
      category: 'social',
    })

    await notificationRepository.create(notification)

    await readNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    )
  })

  it('should NOT be able to read a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const readNotification = new ReadNotification(notificationRepository)

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id',
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})
