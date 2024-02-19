## 💻 Project features

- create a notification
- set a notification as read
- set notifiation as unread
- get all notification from recipient id
- get the count of notification from recipient id

## 🎫 ROUTES

### CREATE NOTIFICATION

POST `http://localhost:3000/notifications/`

Create a new notification in the database.

##### BODY

```
{
  "recipientId": "bd0d1551-f826-42f0-92d5-33c2c182ed56",
  "content": "Just a test",
  "category": "social"
}
```

### READ A NOTIFICATION

Set a notification as read in the database.

PATCH `http://localhost:3000/notifications/recipientIdHere/read`

### UNREAD A NOTIFICATION

Set a notification as unread in the database.

PATCH `http://localhost:3000/notifications/recipientIdHere/unread`

### CANCEL A NOTIFICATION

Remove the notification created at date.

PATCH `http://localhost:3000/notifications/recipientIdHere/cancel`

### COUNT OF NOTIFICATION

Returns the count of all notification in the database.

GET `http://localhost:3000/notifications/count/from/recipientIdHere`

### GET NOTIFICATION BY RECIPIENT ID

Return a notification by recipient id.

GET `http://localhost:3000/notifications/from/recipientIdHere`
