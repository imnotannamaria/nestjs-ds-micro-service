import { Notification } from '@/app/entities/notification'
import { NotificationsRepository } from '@/app/repositories/notifications-repository'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper'

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const mapperNotification = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: mapperNotification,
    })
  }
}
