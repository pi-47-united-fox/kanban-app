# Kanban
List of available endpoints :
- POST      /register
- POST      /login
- POST      /loginGoogle
- GET       /tasks
- POST      /tasks
- put       /tasks/:id
- DELETE    /tasks/:id

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