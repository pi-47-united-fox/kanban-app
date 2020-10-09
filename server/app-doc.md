# KANBAN APP
Kanban App is an application to manage your Working. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /task
### GET /task
### GET /task/:id
### PUT /task/:id
### PATCH /tas/:id
### DELETE /task/:id
### POST /register
### POST /login
### POST /goolelogin


#### POST /task
> Create New Asset

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json

{
    "title" : "Mengerjakan Kanban APP",
    "category" : "Backlog",
    "UserId" : 1   
}


```

_Response (201)_
```json

  {
    "id" : 1,
    "title" : "Mengerjakan Kanban APP",
    "category" : "Backlog",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
  

```

_Response (400 - Invalid Input)_
```
{
  "message": "Invalid validation errors"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Server Errors"
}
```



### GET /task
> Get all Asset

_Request Header_
```
{
  "access_token": "<your access token>"
}
```



_Response (201)_
```json
[
  {
    "id" : 1,
    "title" : "Mengerjakan Kanban APP",
    "category" : "Backlog",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
  {
    "id" : 2,
    "title" : "Mengerjakan Forntend Kanban APP",
    "category" : "todo",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
  {
    "id" : 3,
    "title" : "Mengerjakan Backend Kanban APP",
    "category" : "doing",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
  {
    "id" : 4,
    "title" : "Negrjain Temen",
    "category" : "done",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
]

```

_Response (500 - Bad Request)_
```json
{
  "message": "Server Errors"
}
```


#### GET /task/:id
> Get Asset By Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json

{
    "id" : 1,
}

```

_Response (200)_
```json

{
    "id" : 4,
    "title" : "Negrjain Temen",
    "category" : "done",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },

```

_Response (404 - not found)_
```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_
```json
{
  "message": "Server Errors"
}
```

#### PUT /task/:id
> Edit Asset by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json

{
    "title" : "Negrjain Temen Sekamar",
    "category" : "done",
},

```

_Response (200)_
```json

  {
    "id" : 4,
    "title" : "Negrjain Temen Sekamar",
    "category" : "done",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
  

```

_Response (400 - Invalid Input)_
```json
{
  "message": "Invalid validation errors"
}
```
_Response (404 - not found)_
```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_
```json
{
  "message": "Server Error"
}
```

#### PATCH /task/:id
> udpate category Asset by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```json

{ 
    "category" : "todo",  
},

```

_Response (200)_
```json

  {
    "id" : 1,
    "title" : "Mengerjakan Kanban APP",
    "category" : "todo",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
    "UserId" : 1
  },
  

```

_Response (400 - Invalid Input)_
```json
{
  "message": "Invalid validation errors"
}
```
_Response (404 - not found)_
```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_
```json
{
  "message": "Server Error"
}
```


#### DELETE /task/:id
> Delete Asset by Id
_Request Header_
```
{
  "access_token": "<your access token>"
}
```


_Response (200)_
```json

  {
    "message" : "task delete complete"
  },
  

```

_Response (400 - Invalid Input)_
```json
{
  "message": "Invalid validation errors"
}
```
_Response (404 - not found)_
```json
{
  "message": "error not found"
}
```

_Response (500 - Bad Request)_
```json
{
  "message": "Server Error"
}
```

--

#### POST /register

> Create New User

_Request Body_
```json

{
    "name" : "<your_name>",
    "email" : "<your_email>",
    "password":"<your_password>",
    "Organization": "<your_organization>" 
}

```

_Response (200)_
```json

{
    "id" : "<id>",
    "name" : "<name>",
    "email" : "<email>",
    "Organization" : "<organization>"
},


```

_Response (400 - Invalid Input)_
```json
{
  "message": "Invalid validation errors"
}
```

_Response (500 - Bad Request)_
```json
{
  "message": "Server Error"
}
```

---
#### POST /login

> Login to App

_Request Body_
```json

{
    "email" : "<your_email>",
    "password":"<your_password>"  
}

```

_Response (201)_
```json

{
    "accesToken" : "<your access token>"
},


```

_Response (400 )_
```json
{
  "message": "error"
}
```

### POST /googlelogin
> login via google account

_Response (201)_
```json

{
    "accesToken" : "<your access token>"
},


```

_Response (400 )_
```json
{
  "message": "error"
}
```



