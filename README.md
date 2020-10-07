# kanban-app
A Kanban board is a visualization tool that enables you to optimize the flow of your work. This app has:

* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
`- GET /tasks`

`- GET /tasks/:id`

`- POST /tasks`
`- PATCH /tasks/:id`
`- DELETE /tasks/:id`

`- POST /register`
`- POST /login`

### GET /task

> Get all assets kanban-app

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Response (200)_
```json
[
  {
    "id": 1,
    "title": "Mendesain schema",
    "description": "Merancang tables dan hubungan asosiasi",
    "date": "2020-10-30",
    "category" : "backlog",
    "UserId": 1
  },
  {
    "id": 2,
    "title": "Membuat tampilan website",
    "description": "Menggambar sketsa penempatan UI/UX",
    "date": "2020-10-30",
    "category" : "development",
    "UserId": 1
  }
]
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### GET /tasks/:id

> Get asset kanban-app by Pk

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Params_
```json
{
  "id": "1"
}
```

_Response (200)_
```json
[
  {
    "id": 1,
    "title": "Mendesain schema",
    "description": "Merancang tables dan hubungan asosiasi",
    "date": "2020-10-30",
    "category" : "backlog",
    "UserId": 1
  }
]
```

_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```

### POST /tasks

> Create new asset kanban-app

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
    "title": "Merancang susunan jobdesk",
    "description": "Membagi kelompok dan tugas disetiap divisi",
    "date": "2020-10-20",
    "category" : "done",
    "UserId": 1
}
```

_Response (201 - Created)_
```json
{
    "id": 1,
    "title": "Merancang susunan jobdesk",
    "description": "Membagi kelompok dan tugas disetiap divisi",
    "date": "2020-10-20",
    "category" : "done",
    "UserId": 1,
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Input"
}
```

### PATCH /tasks/:id

> Patch asset kanban-app by Id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json
{
  "category": "backlog"
}
```

_Response (200 - OK)_
```json
{
  "category": "product",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Request"
}
```
_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```
_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### DELETE /tasks/:id

> Delete asset kanban-app by Id

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```

_Request Params_
```json
{
  "id": 1
}
```

_Response (200 - OK)_
```json
{
  "message": "Tasks Has Been Deleted"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data Not Found"
}
```
_Response (500 - Internal Server Error)_
```json
{
  "message": "Server error"
}
```

### POST /register

> Create new asset kanban-app

_Request Body_
```json
{
  "email": "admin@mail.com",
  "password": "admin123",
}
```

_Response (201 - Created)_
```json
{
  "id": 1,
  "email": "admin@mail.com"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Input"
}
```

### POST /login

> Create new asset kanban-app


_Request Body_
```json
{
  "email": "admin@mail.com",
  "password": "<your hash password from bcrypt>"
}
```

_Response (200 - AccessToken)_
```json
{
  "access_token": "<your token from jwt>"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Invalid Input"
}
```