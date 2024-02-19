import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper'
import { NotificationsRepository } from '@app/repositories/notifications-repository'
import { Notification } from '@app/entities/notification'

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async findByID(notificationId: string): Promise<Notification | null> {
    console.log(notificationId)
    throw new Error('Method not implemented.')
  }

  countManyByRecipientId(recipientId: string): Promise<number> {
    console.log(recipientId)
    throw new Error('Method not implemented.')
  }

  async create(notification: Notification): Promise<void> {
    const mapperNotification = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: mapperNotification,
    })
  }

  async save(notification: Notification): Promise<void> {
    console.log(notification)
    throw new Error('Method not implemented.')
  }
}
