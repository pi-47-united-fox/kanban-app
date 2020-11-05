# My Assets App Server

My Assets App is an application to manage your assets. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### POST /login

> Create new asset

_Request Header_

```
{
  _not needed_
}
```

_Request Body_

```json
{
  "email": "<email to get checked>",
  "password": "<password to get checked>"
}
```

_Response (201 - Created)_

```json
{
  "access_token": "<token json web token>"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

```json
{
  "message": "errors status code 500"
}
```

### POST /register

> Create new asset

_Request Header_

```
{
   _not needed_
}
```

_Request Body_

```json
{
  "email": "<email to get checked>",
  "password": "<password to get checked>",
  "organization": "<user organization>"
}
```

_Response (201 - Created)_

```json
{
  "email": "<email to get checked>",
  "password": "<password to get checked>",
  "organization": "<user organization>"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

```json
{
  "message": "errors status code 500"
}
```

### POST /googleSign

_Request Header_

```
{
   _not needed_
}
```

_Request Body_

```json
{
    _not needed_
}
```

_Response (201 - Created)_

```json
{
  "clientID": "<token from google oauth>"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_

````json
{
  "message": "errors status code 500"
}
```

````

### GET /tasks

> Get all assets

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
  "id": <given id by system>,
  "title": "<task name>",
  "category": "<task category>",
  "description": "<description task>",
  "author": "<user name>",
  "UserId": "<UserId for relation to model task>",
  }
]
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---

### GET /tasks/:id

> Get all assets

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
  "id": <given id by system>,
  "title": "<task name>",
  "category": "<task category>",
  "description": "<description task>",
  "author": "<user name>",
  "UserId": "<UserId for relation to model task>",
  }
]
```

_Response (404)_

```json
[
  {
    "message": "Data Not Found"
  }
]
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---

### POST /tasks

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
[
  {
  "id": <given id by system>,
  "title": "<task name>",
  "category": "<task category>",
  "description": "<description task>",
  "author": "<user name>",
  }
]
```

_Response (200)_

```json
[
{
  "id": <given id by system>,
  "title": "<task name>",
  "category": "<task category>",
  "description": "<description task>",
  "author": "<user name>",
  "UserId": "<UserId for relation to model task>",
}
]
```

---

### PUT /tasks/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "name": "<name to get insert into>",
  "image_url": "<description to get insert into>",
  "price": "<status to get insert into>",
  "stock": "<date given by system>",
  "category": "<date given by system>"
}
```

_Response (200)_

```json
[
{
  [1]
}
]
```

_Response (400 - Not Found)_

````json
{
  "message": "validation errors"
}

_Response (404 - Not Found)_
```json
{
  "message": "errors not found"
}
````

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---

### PATCH /tasks/:id

> Get all assets

_Request Header_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "category": "<category to get insert into>"
}
```

_Response (200)_

```json
[
  {
    [1]
  }
]
```

_Response (400 - Not Found)_

````json
{
  "message": "validation errors"
}

_Response (404 - Not Found)_
```json
{
  "message": "data not found"
}
````

### DELETE /tasks/:id

> Get all assets

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
    [1]
  }
]
```

_Response (404 - Not Found)_

```json
{
  "message": "errors not found"
}
```

_Response (500 - Internal Server Errors)_

```json
{
  "message": "errors status code 500"
}
```

---
