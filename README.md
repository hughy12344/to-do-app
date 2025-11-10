# To-Do App
A simple and responsive to-do list application for TSA Group skills assessment.
The project demonstrates RESTful API design, CRUD operations, and a connected frontend interface.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Project Structure
```
.
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── api
│   │   │   └── taskAPI.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── Banner.tsx
│   │   │   ├── Metrics.tsx
│   │   │   ├── ToDoForm.tsx
│   │   │   ├── ToDoList.tsx
│   │   │   └── ToDoListUtilities.tsx
│   │   ├── hooks
│   │   │   └── useTasks.tsx
│   │   └── main.tsx
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── LICENSE
├── README.md
└── server
    ├── models
    │   └── task.ts
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   └── tasks.ts
    ├── server.ts
    └── tsconfig.json
```

## Features

- Create, read, update, and delete (CRUD) to-do items
- RESTful API with JSON responses
- Persistent data storage (MongoDB)
- Simple and responsive front-end interface
- Clear project documentation

## Technologies Used

### Client:
- TypeScript
- React (with Vite)
- Fetch (for API calls)
  
**Libraries:**
- TailwindCSS (Inline CSS styling)
- Lucide-React (Icons)
- ESLint (Linter)

### Server:
- TypeScript
- MongoDB
  
**Libraries:**
- Express.js (Build RESTful APIs and handle HTTP responses/requests)
- Mongoose (MongoDB library for scehma-based data validation)
- Cors (Enable CORS policy between client/server)
- Dotenv (Environment variables management)

## Setup Instructions

### Clone the repository
- git clone https://github.com/hughy12344/to-do-app.git
- cd to-do-app

### Install client dependencies
- cd /client
- npm install

### Install server dependencies
- cd ../server
- npm install

## License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

