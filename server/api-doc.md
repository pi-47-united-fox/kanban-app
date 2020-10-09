# Kanban
Kanban app is an app created to help you manage and arrange your project.
This app has the following features:
* RESTful endpoint for todo's CRUD operation.
* JSON-formatted response.

&nbsp;

## RESTful Endpoints
- POST /login
- POST /register
- POST /googleLogin
- GET /tasks
- POST /tasks
- PUT /tasks/:id
- PATCH /tasks/:id
- DELETE /tasks/:id


### POST /register 

_Request Header_
```
Not Needed
```
_Request Body_
```json
    {
        "name": "Safrul",
        "email": "safrul@mail.com",
        "password": 123456, 
    }
```
_Response (200)_
```json
    {
        "id": 1,
        "name": "Safrul",
        "email": "safrul@mail.com",
        "organization": "Hacktiv8"
    }
```
_Response (400 - Bad Request)_
```json
    {
    "message": "Invalid request."
    }
```
_Response (500 - Internal Server Error)_
```json
    {
    "message": "Internal Server Error."
    }
```
### POST /login 

_Request Header_
```
Not Needed
```
_Request Body_
```json
  {
      "email": "safrul@mail.com",
      "password": 123456, 
  }
```
_Response (200)_
```json
  {
    "access_token"
  }
```
_Response (400 - Bad Request)_
```json
  {
  "message": "Invalid request."
  }
```
Response (500 - Internal Server Error)
```json
  {
  "message": "Internal Server Error."
  }
```

### POST /googleLogin

_Request Header_
```
Not Needed
```
_Request Body_
```
Not Needed
```
_Response (200)_
```json
{
  "access_token"
}
```
_Response (404 - Unauthorized)_
```json
{
  "message": "you are not authorized"
}
```
_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```
### GET /tasks
> Get all tasks

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
not needed
```

_Response (200)_
```json
[
    {
        "id": 1,
        "title": "Todo App",
        "description": "Deploy on heroku and firebase",
        "category": "todo",
        "assigned_to": "Safrul"
    },
    {
        "id": 2,
        "title": "Kanban App",
        "description": "Write API doc",
        "category": "backlog",
        "assigned_to": "Safrul"
    }
]
```
_Response (400 - Bad Request)_
```json
{
  "message": "Invalid request."
}
```
_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```

### POST /tasks
> Create a new task

_Request Header_
```json
{
  "access_token": "<your access token>"
}
```
_Request Body_
```json
{
    "title": "Kanban App",
    "description": "Config server database and models",
    "category": "backlog",
    "assigned_to": "Andi"
}
```

_Response (201 - Created)_
```json
{
    "id": 3,
    "title": "Kanban App",
    "description": "Config server database and models",
    "category": "backlog",
    "assigned_to": "Andi"
}

```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```
### PUT /tasks/:id
> Update the whole attributes of a particular task from a given id

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

_Request Body_
```json
{
    "title": "Create a todo app",
    "description": "Create a fancy todo app this week!",
    "assigned_to": "Safrul"
}
```

_Response (200)_
```json
{
    "id": 1,
    "title": "Create a todo app",
    "description": "Create a fancy todo app this week!",
    "category": "backlog",
    "assigned_to": "Safrul"
}
```

_Response (400)_
```json
{
  "message": "Validation error."
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```
### PATCH /tasks/:id
> Update only 'category' attributes of a particular todo from a given id

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

_Request Body_
```json
{
    "category": "done",
}
```

_Response (200)_
```json
{
    "id": 1,
    "title": "Create a todo app",
    "description": "Create a fancy todo app this week!",
    "category": "done",
    "assigned_to": "Safrul"
}
```

_Response (400)_
```json
{
  "message": "Validation error."
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```
### DELETE /tasks/:id
> Delete a particular task from a given id

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

_Response (200)_
```json
{
    "message": "A task has been deleted successfully."
}
```

_Response (404)_
```json
{
  "message": "Error. Not found."
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```