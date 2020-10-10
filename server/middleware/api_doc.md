# KANBAN

####
GET /tasks
Get all task

Request Header
not needed

Request Body

not needed

Response (200)

```json
[
  {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  }

]
```
Response (400 - Bad Request)

{
  "message": "Invalid request"
}

####
POST /tasks
create task

Request Header
not needed

Request Body
```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  }
```

Response (201)

```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  }
```
Response (500 - Bad Request)

{
  "message": "Invalid request"
}

####
GET /task/:id
find task by Id

Request Header
not needed

Request Body
not needed


Response (200)

```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  },
```
Response (500 - Bad Request)

{
  "message": "Invalid request"
}

####
PUT /task/:id
edit all attributes in task by id

Request Header
not needed

Request Body
```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  },
```


Response (201)

```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  },
```
Response (500 - Bad Request)

{
  "message": "Invalid request"
}

PATCH /task/:id
edit "category" by id

Request Header
not needed

Request Body
```json
{
    "category": "<todo>"
}
```


Response (201)

```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  },
```
Response (500 - Bad Request)

{
  "message": "Invalid request"
}

####
DELETE /tasks/:id
delete tsk by id
Request Header
not needed

Request Body
not needed


Response (201)

```json
 {
    "id": 1,
    "title": "Server and Client created",
    "category": "todo",
  },
```
Response (500 - Bad Request)

{
  "message": "Invalid request"
}

