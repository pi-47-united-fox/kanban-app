Kanban App
```json
    RESTful endpoint for kanban app
    JSON-formatted response.

 
RESTful Endpoints

## POST /register
## POST /login
## POST /googleLogin


## GET /tasks 
## POST /tasks
## GET /tasks/:id
## PUT /tasks/:id
## DELETE /tasks/:id

##POST /register 

        Request Header

            Not Needed

        Request Body

        {
            "email": "ridwan@mail.com",
            "password": 123456, 
        }

        Response (200)

        {
            "id": 1,
            "email": "ridwan@mail.com",
            "organization": "Hacktiv8"
        }

        Response (400 - Bad Request)

        {
        "message": "Invalid request."
        }

        Response (500 - Internal Server Error)

        {
        "message": "Internal Server Error."
        }

##POST /login 

        Request Header

            Not Needed

        Request Body

        {
            "email": "ridwan@mail.com",
            "password": 123456, 
        }

        Response (200)

        {
            "access_token"
        }

        Response (400 - Bad Request)

        {
        "message": "Invalid request."
        }

        Response (500 - Internal Server Error)

        {
        "message": "Internal Server Error."
        }


##POST /googleLogin

        Request Header

            Not Needed

        Request Body

            Not Needed

        Response (200)

        {
            "access_token"
        }
    
        Response (404 - Unauthorized)

        {
        "message": "you are not authorized"
        }

        Response (500 - Internal Server Error)

        {
        "message": "Internal Server Error."
        }



##GET /tasks


        Request Header

        {
        "access_token": "<access_token>"
        }

        Request Body

        not needed

        Response (200)
        {
            "backlog": [
                {
                    "id": 1,
                    "title": "kerjain kanban",
                    "category": "backlog",
                    "UserId": 1,
                    "createdAt": "2020-10-06T09:31:47.243Z",
                    "updatedAt": "2020-10-06T09:33:42.301Z"
                },
                {
                    "id": 5,
                    "title": "test server",
                    "category": "backlog",
                    "UserId": 1,
                    "createdAt": "2020-10-07T10:11:05.338Z",
                    "updatedAt": "2020-10-07T10:11:05.338Z"
                },
                {
                    "id": 6,
                    "title": "test server",
                    "category": "backlog",
                    "UserId": 1,
                    "createdAt": "2020-10-07T10:30:14.689Z",
                    "updatedAt": "2020-10-07T10:30:14.689Z"
                }
            ],
            "todo": [
                {
                    "id": 2,
                    "title": "lanjutin kanban",
                    "category": "todo",
                    "UserId": 1,
                    "createdAt": "2020-10-07T10:03:07.810Z",
                    "updatedAt": "2020-10-07T10:03:07.810Z"
                }
            ],
            "doing": [
                {
                    "id": 3,
                    "title": "nyoba client",
                    "category": "doing",
                    "UserId": 1,
                    "createdAt": "2020-10-07T10:03:36.990Z",
                    "updatedAt": "2020-10-07T10:03:36.990Z"
                }
            ],
            "done": [
                {
                    "id": 4,
                    "title": "test server",
                    "category": "done",
                    "UserId": 1,
                    "createdAt": "2020-10-07T10:03:56.357Z",
                    "updatedAt": "2020-10-07T10:03:56.357Z"
                }
            ]
        }

        Response (401)
        {
        "message": "Unauthorized"
        }
        Response (404 - not Found)
        {
        "message": "Not Found"
        }
        Response (500 - Internal Server Error)

        {
        "message": "Internal Server Error."
        }

##POST /tasks


        Request Header

        {
        "access_token": "<your access token>"
        }

        Request Body

        {
            "title": "kerjain kanban",
            "category": "backlog"
        }

        Response (201 - Created)

        {
            "id":1,
            "title": "kerjain kanban",
            "category": "backlog",
            "UserId": "given by access token.id"
        }

        Response (400)
        {
        "message": "Validation Error"
        }
        Response (401)
        {
        "message": "Unauthorized"
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

## GET /tasks/:id


        Request Header

        {
        "access_token": "<your access token>"
        }

        Request Params

        {
            "id": 1
        }

        Response (200)

        {
            "id":1,
            "title": "kerjain kanban",
            "category": "backlog",
            "UserId": "given by access token.id"
        }

        Response (401)
        {
        "message": "Unauthorized"
        }
        Response (404)
        {
        "message": "Error. Not found."
        }
        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##PUT /tasks/:id

        Request Header

        {
        "access_token": "<your access token>"
        }

        Request Params

        {
            "id": 1
        }

        Request Body

        {
            "title": "kerjain kanban",
            "category": "todo",
            "UserId": "given by access token.id"
        }

        Response (200)

        {
            "title": "kerjain kanban",
            "category": "todo",
            "UserId": "given by access token.id"
        }

        Response (400)
        {
        "message": "Validation Error"
        }

        Response (401)
        {
        "message": "Unauthorized"
        }

        Response (404)

        {
        "message": "Error. Not found."
        }

        Response (403)

        {
        "message": "You dont have access"
        }

        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

##PATCH /tasks/:id

        Request Header

        {
        "access_token": "<your access token>"
        }

        Request Params

        {
            "id": 1
        }

        Request Body

        {
            "category":"done",
        }

        Response (200)

        {
            "id": 1,
            "title": "kerjain kanban",
            "category": "done",
            "UserId": "given by access token.id"
        }

        Response (400)
        {
        "message": "Validation Error"
        }

        Response (401)
        {
        "message": "Unauthorized"
        }

        Response (404)

        {
        "message": "Error. Not found."
        }

        Response (403)

        {
        "message": "You dont have access"
        }

        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }



##DELETE /tasks/:id


        Request Header

        {
        "access_token": "<your access token>"
        }

        Request Params

        {
            "id": 1
        }

        Response (200)
        {
            "message": "Kanban has been deleted successfully."
        }

        Response (400)
        {
        "message": "Validation Error"
        }

        Response (401)
        {
        "message": "Unauthorized"
        }

        Response (404)

        {
        "message": "Error. Not found."
        }

        Response (403)

        {
        "message": "You dont have access"
        }

        Response (500 - Internal Server Error)
        {
        "message": "Internal Server Error."
        }

