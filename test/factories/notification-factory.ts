import { Content } from '../../src/app/entities/content'
import {
  Notification,
  NotificationProps,
} from '../../src/app/entities/notification'

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'recipient-id',
    content: new Content('New notitication'),
    category: 'social',
    ...override,
  })
}
