# RESTAPI DOCs Kanban App
### Bagus Rizki Setiawan - United Fox
---
This Kanban App has:
1. Restful endpoint for Task's CRUD operation
2. Restful endpoint for User's CR operation
3. JSON formated responses
---

&nbsp;

## HTTP Status Code
---
```
    200 - OK	Everything worked as expected.
    201 - Created	Everything worked as expected.
    403 - Forbidden	The access_token key doesn't have permissions to perform the request.
    --- 
    401 - Unauthorized	No valid access_token key provided.
    400 - Bad Request	The request was unacceptable, often due to missing a required parameter.
    404 - Not Found	The requested resource doesn't exist.
    500 - Server Errors	Something went wrong on Stripe's end. (These are rare.)
```

&nbsp;

## EndPoints
---

#### User Endpoints:
  1. POST /register
  2. POST /login

#### Tasks Endpoints:
  1. GET /tasks
  2. GET /tasks/:id
  3. POST /tasks/
  4. PUT /tasks/:id
  5. PATCH /tasks/:id
  6. DELETE /tasks/:id

&nbsp;

## User Endpoints
---
### 1. POST /register
Request:
- data:
    ```json
    {
    "email": "string",
    "password": "string"
    }
    ```

Response:
- status: 201
- body:
    ```json
    {
    "id": "integer",
    "email": "string",
    "saldo": 5000000
    }
    ```

### 2. POST /login
Request:
- data:
    ```json
    {
    "email": "string",
    "password": "string"
    }
    ```

Response:
- status: 200
- body:
    ```json
    {
        "access_token": "jwt string",
    }
    ```

## Task Endpoints
---
### 1. GET /tasks
description: 
  show all organization tasks

Request:
- headers: access_token (string)

Response:
- status: 200
- body:
```json
[
    {
        "id": 1,
        "title": "Learn Socket From YT",
        "category": "Todo",
        "UserId": 2,
        "createdAt": "2020-10-06T12:47:21.254Z",
        "updatedAt": "2020-10-06T12:47:21.254Z"
    },
    {
        "id": 2,
        "title": "Learn JS From YT",
        "category": "Todo",
        "UserId": 3,
        "createdAt": "2020-10-06T12:58:39.795Z",
        "updatedAt": "2020-10-06T12:58:39.795Z"
    },
    {
        "id": 5,
        "title": "Learn Python From YT",
        "category": "Todo",
        "UserId": 3,
        "createdAt": "2020-10-06T12:58:45.482Z",
        "updatedAt": "2020-10-06T12:58:45.482Z"
    }
]
```

### 2. GET /tasks/:id
description:
  show tasks by (task) id

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required

Response:
- status: 200
- body:

```json
{
    "id": 3,
    "title": "Learn Vue From YT",
    "category": "Todo",
    "UserId": 3,
    "createdAt": "2020-10-06T12:58:27.210Z",
    "updatedAt": "2020-10-06T12:58:27.210Z"
}
```

### 3. POST /tasks
description: 
  add tasks from user logedin in organization 

Request:
- headers: access_token (string)
- body: 
```json
{
    "title": "Learn Python from YT",
    "category": "Todo"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 5,
    "title": "Learn Python From YT",
    "category": "Todo",
    "UserId": 3,
    "updatedAt": "2020-10-06T12:58:45.482Z",
    "createdAt": "2020-10-06T12:58:45.482Z"
}
```

## 4. PUT /tasks/:id
description: 
  edit/update tasks from user logedin in organization who have a permissions

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json 
{
    "title": "Learn Python from YT",
    "category": "Todo"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 5,
    "title": "Learn Python From YT",
    "category": "Todo",
    "UserId": 3,
    "updatedAt": "2020-10-06T12:58:45.482Z",
    "createdAt": "2020-10-06T12:58:45.482Z"
}
```
- status: 403
- body:
```json
{
  "message": "You dont have access"
}
```

## 5. PATCH /tasks/:id
description: 
  edit/update only tasks category from user logedin in organization who have a permissions

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required
- body: 
```json 
{
    "category": "Todo"
}
```

Response:

- status: 201
- body:

```json
{
    "id": 5,
    "title": "Learn Python From YT",
    "category": "Todo",
    "UserId": 3,
    "updatedAt": "2020-10-06T12:58:45.482Z",
    "createdAt": "2020-10-06T12:58:45.482Z"
}
```
- status: 403
- body:
```json
{
  "message": "You dont have access"
}
```

### 6. DELETE /todos/:id
description:
  delete tasks by (task) id

Request:
- headers: access_token (string)
- params: 
  - id: "integer" required

Response:
- status: 200
- body:

```json
{
    "message": "Task: success deleted"
}
```

- status: 403
- body:
```json
{
    "message": "You dont have access"
}
```