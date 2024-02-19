import { Notification } from '../entities/notification'
import { SendNotification } from './send-notification'

// This is a mock of the NotificationRepository
const notifications: Notification[] = []

const NotificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification)
  },
}

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(NotificationRepository)

    await sendNotification.execute({
      recipientId: 'example-id',
      content: 'This is a notification',
      category: 'warning',
    })

    console.log(notifications)

    expect(notifications).toHaveLength(1)
  })
})
