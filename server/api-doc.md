# Kanban
List of available endpoints :
- POST      /register *
- POST      /login *
- POST      /loginGoogle
- GET       /tasks *
- POST      /tasks *
- PUT       /tasks/:id *
- DELETE    /tasks/:id *

## POST /register
> Register User

 ### Request :
 
 - _Request Body_
 ```json
 {
   "fullname":"string",
   "email":"string",
   "password":"string"
 }
 ``` 
 ### Success Response :
  - _Response (201 - Created)_
 ```json
 {
   "id":1,
   "fullname":"M Fauzan Adhim",
   "email":"muhfauzanadh@gmail.com"
 }
 ``` 
 ### Failed Response :
  - _Response (400 )_
 ```json
 {
    "message":"Validation error"
 }
 ```

  - _Response (500)_
 ```json
 {
    "message":"Internal Server Error" 
 }
 ``` 


### POST /login
> logging in as registered user 

_Request Body_
```
{ 
  "email":"<email to login>"
  "password":"<password to login>"
}
```
<b> Success Response :</b>

_Response (200 - Ok)_
```
{
  "access_token":"<access_token>" 
}
```

<b> Error Response :</b>

_Response (400 - Bad Request)_
```
{
  "message": "Wrong Email or Password"
}
```

### GET /tasks

> Get all tasks

_Request Header_
```
{
  "access_token": "<access_token>"
}
```

_Request Body_
```
not needed
```

<b> Success Response :</b>

_Response (200 - Ok)_
```
[
  {
    "id": 1,
    "title": "<task title>",
    "description": "<task description>",
    "CategoryId": "<id category>",  
    "UserId": "<id user>",  
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": 2,
    "title": "<task title>",
    "description": "<task description>",
    "CategoryId": "<id category>",  
    "UserId": "<id user>",  
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```

<b> Error Response :</b>

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal server error"
}
```
---

### POST /todos

> Create new todos

_Request Header_
```
{
  "access_token": "<access_token>"
}
```

_Request Body_
```
{
  "title": "<title to get insert into>",
  "description": "<description to get insert into>",
  "CategoryId": "<status to get insert into>", 
}
```
<b> Success Response :</b>

_Response (201 - Created)_
```
{
  "title": "<posted title>",
  "description": "<posted description>",
  "CategoryId": "<id Category>", 
  "UserId": "<id User>", 
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

<b> Error Response :</b>

_Response (400 - Bad Request)_
```
{
  "message": "Validation errors"
}
```

_Response (500 -  Internal Server Error)_
```
{
  "message": "Internal server error"
}
```
---
### PUT /todos/:id

> Create new todos

_Request Header_
```
{
  "access_token": "<access_token>"
}
```

_Request Body_
```
{
  "title": "<title to get insert into>",
  "description": "<description to get insert into>",
  "CategoryId": "<status to get insert into>", 
}
```
<b> Success Response :</b>

_Response (200 - Ok)_
```
  {
    "message":"Updated Successfully"
  }
```

<b> Error Response :</b>

_Response (400 - Bad Request)_
```
{
  "message": "Validation errors"
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "Not Authorized"
}
```

_Response (500 -  Internal Server Error)_
```
{
    "message": "Internal server error"
}
```
---

### DELETE /todos/:id

> Create new todos

_Request Header_
```
{
  "access_token": "<access_token>"
}
```

_Request Body_
```
  not needed
```
<b> Success Response :</b>

_Response (200 - Ok)_
```
  {
    "message":"Deleted Successfully"
  }
```

<b> Error Response :</b>
 
_Response (401 - Unauthorized)_
```
{
  "message": "Not Authorized"
}
```

_Response (500 -  Internal Server Error)_
```
{
    "message": "Internal server error"
}
```
---
