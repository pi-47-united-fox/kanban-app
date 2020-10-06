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
- GET /kanban
- POST /kanban


### POST /register 

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
        "id": 1,
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
### GET /kanban
> Get all kanbans

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
        "assigned to": "Safrul"
    },
    {
        "id": 2,
        "title": "Kanban App",
        "description": "Write API doc",
        "status": "backlog",
        "assigned to": "Safrul"
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

### POST /kanban
> Create a new kanban

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
    "status": "backlog",
}
```

_Response (201 - Created)_
```json
{
    "id": 3,
    "title": "Kanban App",
    "description": "Config server database and models",
    "status": "backlog"
}

```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error."
}
```