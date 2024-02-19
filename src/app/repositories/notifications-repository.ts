import { Notification } from '@/app/entities/notification'

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>
  abstract findByID(notificationId: string): Promise<Notification | null>
  abstract save(notification: Notification): Promise<void>
}
