import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository'
import { Content } from '../entities/content'
import { Notification } from '../entities/notification'
import { CancelNotification } from './cancel-notification'
import { NotificationNotFound } from './errors/notification-not-found.error'

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const cancelNotification = new CancelNotification(notificationRepository)

    const notification = new Notification({
      recipientId: 'recipient-id',
      content: new Content('New notitication'),
      category: 'social',
    })

    await notificationRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    )
  })

  it('should be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const cancelNotification = new CancelNotification(notificationRepository)

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fale-id',
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})
