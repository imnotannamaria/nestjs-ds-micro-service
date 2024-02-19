import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository'
import { Content } from '../entities/content'
import { Notification } from '../entities/notification'
import { CountRecipientNotifications } from './count-recipient-notifications'

describe('Count recipient notifications', () => {
  it('should be able count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository()

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    )

    await notificationRepository.create(
      new Notification({
        recipientId: 'recipient-id',
        content: new Content('New notitication'),
        category: 'social',
      }),
    )

    await notificationRepository.create(
      new Notification({
        recipientId: 'recipient-id',
        content: new Content('New notitication'),
        category: 'social',
      }),
    )

    await notificationRepository.create(
      new Notification({
        recipientId: 'other-recipient-id',
        content: new Content('New notitication'),
        category: 'social',
      }),
    )

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id',
    })

    expect(count).toEqual(2)
  })
})
