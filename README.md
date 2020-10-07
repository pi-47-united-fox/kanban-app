# Kanban App

Bagus Rizki Setiawan - United-Fox

---

## This Kanban App has EndPoints:

```md
# User Endpoints:
  1. POST /register
  2. POST /login

# Tasks Endpoints:
  1. GET /tasks
  2. GET /tasks/:id
  3. POST /tasks/
  4. PUT /tasks/:id
  5. PATCH /tasks/:id
  6. DELETE /tasks/:id
```
See the RestAPI-doc.md for complete documentation

---

### Latest Project Folder:

```cmd
.
├── client
│   ├── assets
│   │   └── img
│   │       └── asfalt-light.png
│   ├── css
│   │   ├── main.css
│   │   ├── main.css.map
│   │   └── sass
│   │       ├── main.scss
│   │       └── _reset.scss
│   └── index.html
├── README.md
├── RestAPI-doc.md
└── server
    ├── app.js
    ├── config
    │   └── config.json
    ├── controllers
    │   ├── taskController.js
    │   └── userController.js
    ├── helpers
    │   ├── bcrypt.js
    │   └── jwt.js
    ├── middlewares
    │   ├── authentication.js
    │   ├── authorization.js
    │   └── errHandler.js
    ├── migrations
    │   ├── 20201006080259-create-user.js
    │   └── 20201006081534-create-task.js
    ├── models
    │   ├── index.js
    │   ├── task.js
    │   └── user.js
    ├── package.json
    ├── package-lock.json
    ├── routers
    │   ├── index.js
    │   └── tasks.js
    └── seeders
```