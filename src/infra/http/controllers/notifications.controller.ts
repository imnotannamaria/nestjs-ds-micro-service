import { Body, Controller, Post } from '@nestjs/common'
import { CreateNotificationBody } from '../dtos/create-notification-body'
import { NotificationViewModel } from '../view-models/notification-view-model'
import { SendNotification } from '@app/use-cases/send-notification'

@Controller('/notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    })

    return {
      notification: NotificationViewModel.toHTTP(notification),
    }
  }
}
