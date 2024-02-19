import { Notification as PrismaNotification } from '@prisma/client'
import { Notification } from '@app/entities/notification'
import { Content } from '@app/entities/content'

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    }
  }

  static toDomain(prismaNotification: PrismaNotification): Notification {
    return new Notification(
      {
        recipientId: prismaNotification.recipientId,
        category: prismaNotification.category,
        content: new Content(prismaNotification.content),
        canceledAt: prismaNotification.canceledAt,
        createdAt: prismaNotification.createdAt,
        readAt: prismaNotification.readAt,
      },
      prismaNotification.id,
    )
  }
}
