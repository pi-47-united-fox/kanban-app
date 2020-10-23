###### Restful Endpoints ######
` - POST /login `
` - POST /register `
` - POST /google `

## Tasks related
` - GET /tasks `
` - POST /tasks `

` - DELETE /tasks/:id `

` - PUT /tasks/:id `

` - PATCH /tasks/up/:id `
` - PATCH /tasks/down/:id `


###### Details ######
## POST /login
- Request header:
{
    "Content-type": "application/json"
}

- Request body
    {
        "email": "user@mail.com",
        "password": "1234"
    }

- Response(200)
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwMjYyNTQzNX0.CqsFNEn60Xn8ivYRslhxdbjEBeRUyU2KLccTS9Mh8h0"
    }

- Response (400 - Bad Request)
{
  "message": "Wrong email/password"
}
{
  "message": "Please fill the form carefully"
}

## POST /register
- Request header:
{
    "Content-type": "application/json"
}

- Request body
{
    "email": "user@mail.com",
    "password": "1234"
}

- Response(201)
{
    "id": 1,
    "email": "user@mail.com",
    "organization": "hacktiv8"
}

- Response (400 - Bad Request)
{
  "message": "Validation error: Must be a valid email"
}
{
  "message": "Validation error: Email cannot be empty"
}
{
  "message": "Validation error: Password cannot be empty
}

## GET /tasks
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
not needed

- Response(200)
{
    "backlog": [
        {
            "id": 8,
            "title": "And this..",
            "category": "Backlog",
            "UserId": 2,
            "createdAt": "2020-10-23T01:38:39.302Z",
            "updatedAt": "2020-10-23T01:38:39.302Z",
            "User": {
                "id": 2,
                "email": "user1@mail.com",
                "password": "$2a$10$WGKPY8nOYUD/IQDfrktX8eHS8mNk.YrUoUN4DvNcDNfOuElOrA5.u",
                "organization": "Hacktiv8",
                "createdAt": "2020-10-23T01:13:24.017Z",
                "updatedAt": "2020-10-23T01:13:24.017Z"
            }
        }
    ],
    "todo": [
        {
            "id": 7,
            "title": "add this...",
            "category": "Todo",
            "UserId": 2,
            "createdAt": "2020-10-23T01:38:31.781Z",
            "updatedAt": "2020-10-23T01:38:31.781Z",
            "User": {
                "id": 2,
                "email": "user1@mail.com",
                "password": "$2a$10$WGKPY8nOYUD/IQDfrktX8eHS8mNk.YrUoUN4DvNcDNfOuElOrA5.u",
                "organization": "Hacktiv8",
                "createdAt": "2020-10-23T01:13:24.017Z",
                "updatedAt": "2020-10-23T01:13:24.017Z"
            }
        },
        {
            "id": 6,
            "title": "kkkkk",
            "category": "Todo",
            "UserId": 2,
            "createdAt": "2020-10-23T01:32:45.463Z",
            "updatedAt": "2020-10-23T01:40:02.150Z",
            "User": {
                "id": 2,
                "email": "user1@mail.com",
                "password": "$2a$10$WGKPY8nOYUD/IQDfrktX8eHS8mNk.YrUoUN4DvNcDNfOuElOrA5.u",
                "organization": "Hacktiv8",
                "createdAt": "2020-10-23T01:13:24.017Z",
                "updatedAt": "2020-10-23T01:13:24.017Z"
            }
        }
    ],
    "doing": [
        {
            "id": 4,
            "title": "Once upon a time...",
            "category": "Completed",
            "UserId": 2,
            "createdAt": "2020-10-23T01:29:11.172Z",
            "updatedAt": "2020-10-23T01:29:11.172Z",
            "User": {
                "id": 2,
                "email": "user1@mail.com",
                "password": "$2a$10$WGKPY8nOYUD/IQDfrktX8eHS8mNk.YrUoUN4DvNcDNfOuElOrA5.u",
                "organization": "Hacktiv8",
                "createdAt": "2020-10-23T01:13:24.017Z",
                "updatedAt": "2020-10-23T01:13:24.017Z"
            }
        }
    ],
    "completed": [
        {
            "id": 3,
            "title": "New Task again",
            "category": "Completed",
            "UserId": 2,
            "createdAt": "2020-10-23T01:28:30.094Z",
            "updatedAt": "2020-10-23T01:28:30.094Z",
            "User": {
                "id": 2,
                "email": "user1@mail.com",
                "password": "$2a$10$WGKPY8nOYUD/IQDfrktX8eHS8mNk.YrUoUN4DvNcDNfOuElOrA5.u",
                "organization": "Hacktiv8",
                "createdAt": "2020-10-23T01:13:24.017Z",
                "updatedAt": "2020-10-23T01:13:24.017Z"
            }
        }
    ]
}
- Response (401)
{
    "message" : "Token is expired. Please relogin."
}


## POST /tasks
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
    {
        "title": "Mengerjakan tugas revisi",
        "category": "Backlog"
    }

- Response(201)
    {
      "message": "A new task has been successfully added."
    }
- Response (400 - Bad Request)
{
  "message": ""Validation error: Title cannot be empty""
}
{
  "message": "Validation error: Image URL cannot be empty"
}
- Response (401)
{
    "message" : "Token is expired. Please relogin."
}
- Response (500 - Internal Server Error)
{
  "message": "Something wrong with the server"
}


## DELETE /tasks/:id
- Request header:
{
    "access_token": "<your access token>"
}

- Request body:
id = +req.params.id

- Response(200)
{ 
    "message": "Task has been successfully deleted."
}

- Response (403 - Not Authorized)
{
  "message": "You do not have an access"
}


## PUT /tasks/:id
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
    {
        "title": "Mengerjakan tugas revisi",
        "category": "Backlog"
    }

- Response(200)
    {
        "message": "Task has been successfully updated."
    }
- Response (400 - Bad Request)
{
  "message": ""Validation error: Title cannot be empty""
}

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

- Response (403 - Not Authorized)
{
  "message": "You do not have an access"
}


## PATCH /tasks/up/:id
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
 Not needed

- Response(200)
    {
        "message": "Excellent! Keep doing a great job."
    }

- Response (401)
{
    "message" : "Token is expired. Please relogin."
}

## PATCH /tasks/up/:id
- Request header:
{
    "access_token": "<your access token>"
}

- Request body
 Not needed

- Response(200)
    {
        "message": "Excellent! Keep doing a great job."
    }

- Response (401)
{
    "message" : "Uhh, keep doing your best no matter the result."
}
