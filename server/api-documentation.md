# RESTful endpoints
`-GET /tasks`
`-POST /tasks`
`-PATCH /tasks/:id`
`-DELETE /tasks/:id`
`-POST /register`
`-POST /login`

## GET /tasks 

> Mengambil semua data tasks
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```
### _Request Body_
```
{
    not needed
}
```
### _Response (200)_
```
[
    {
        "id":1,
        "title":"<title>",
        "category:"<category>",
        "userId":"<userId>"
        "createdAt":"2020-09-28T12:17:16.572Z",
        "updatedAt":"2020-09-28T12:17:16.572Z"
    }
]
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## POST /tasks 
> Membuat tasks
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```    
### _Request Body_
```       
{
   "title":"<title>"
}

```
### _Response (201 - Created)_
```
{
    "id":"<id>",
    "title":"<title>",
    "category:"<category>",
    "userId":"<userId>"
    "createdAt":"2020-09-28T12:17:16.572Z",
    "updatedAt":"2020-09-28T12:17:16.572Z"
}
```
### _Response (400)_
```
{
    "message":"Invalid Request"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```

## PATCH /tasks/:id
> Mengedit category tasks
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```

### _Request Params_
```       
{
   "id":"<id>"
}

```
### _Request Query_
```       
{
   "category":"<category>"
}

```
### _Response (200)_
```
{
   "message:"success update category"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```



## DELETE /tasks/:id
> Delete tasks
### _Request Header_
```
{
    "access_token":"<your access_token>"    
}
```   

### _Request Params_
```       
{
   "id":"<id>"
}

```
### _Request Query_
```       
{
   "category":"<category>"
}

```
### _Response (200)_
```
{
   "message":"delete task id = <id> successfully"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```


## POST /login
### _Request Header_
```
{

}
```  
### _Request Params_
```       
{
    
}
```
### _Request Body_
```       
{
    "email:"<email>",
    "password:"<password>"
}
```
### _Response (201)_
```
{
    "access_token":"<access_token>"
}
```
### _Response (401)_
```
{
    "message":"Wrong Email/Password"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```



## POST /register
### _Request Header_
```
{

}
```  
### _Request Params_
```       
{
    
}
```
### _Request Body_
```       
{
    "email:"<email>",
    "password:"<password>"
}
```
### _Response (201)_
```
{
    "message":"register success",
    "id":<id>
    "email":"<email>"
```
### _Response (409)_
```
{
    "message":"email already registered"
}
```
### _Response (500)_
```
{
    "message":"Internal Server Error"
}

```