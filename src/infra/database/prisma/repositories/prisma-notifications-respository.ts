import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper'
import { NotificationsRepository } from '@app/repositories/notifications-repository'
import { Notification } from '@app/entities/notification'

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}
  async findByID(notificationId: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id: notificationId,
      },
    })

    if (!notification) {
      return null
    }

    return PrismaNotificationMapper.toDomain(notification)
  }

  findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    console.log(recipientId)

    throw new Error('Method not implemented.')
  }

  countManyByRecipientId(recipientId: string): Promise<number> {
    console.log(recipientId)
    throw new Error('Method not implemented.')
  }

  async create(notification: Notification): Promise<void> {
    const mapperNotification = PrismaNotificationMapper.toPrisma(notification)

    await this.prisma.notification.create({
      data: mapperNotification,
    })
  }

  async save(notification: Notification): Promise<void> {
    console.log(notification)
    throw new Error('Method not implemented.')
  }
}
