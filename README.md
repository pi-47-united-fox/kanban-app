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
│   ├── firebase.json
│   ├── index.html
│   ├── _old_assets
│   │   └── img
│   │       └── asfalt-light.png
│   ├── _old_css
│   │   ├── main.css
│   │   ├── main.css.map
│   │   └── sass
│   │       ├── main.scss
│   │       └── _reset.scss
│   ├── _old_main.js
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       ├── App.vue
│       ├── assets
│       │   └── img
│       │       ├── asfalt-light.png
│       │       └── bg.jpg
│       ├── Components
│       │   ├── Navbar.vue
│       │   ├── TaskBoard.vue
│       │   └── TaskCard.vue
│       ├── config
│       ├── main.js
│       ├── styles
│       │   ├── _base.scss
│       │   └── _reset.scss
│       └── Views
│           ├── FrontPage.vue
│           └── HomePage.vue
├── db_client_test
│   └── db.json
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
    │   ├── 20201006081534-create-task.js
    │   └── 20201009064829-add-usernam-in-Users.js
    ├── models
    │   ├── index.js
    │   ├── task.js
    │   └── user.js
    ├── package.json
    ├── package-lock.json
    └── routers
        ├── index.js
        └── tasks.js
```