import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { NotificationsRepository } from '@/app/repositories/notifications-repository'
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-respository'

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
