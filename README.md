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
For this project, the chosen stack was used to provide an optimal balance of development experience, scalability and performance. Using TypeScript on both the client and server ensures type safety, easier debugging, and consistency across the codebase. React (with Vite) offers a fast and highly maintainable front-end framework through the use of custom components and hooks. Tailwind is a widley used utility-first CSS framework that enables rapid styling and gives the user interface a clean, modern, and responsive look.
For the backend, Express.js and MongoDB (with Mongoose) were an ideal choice, as the project’s simple data structure is well-suited to a single-document database. This setup also allows for seamless integration with RESTful APIs, making data handling and communication between client and server efficient and straightforward.


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
### Prerequisities
- [Node.js](https://nodejs.org/)
- npm (comes with Node)
- Git (to clone the repository)

### Clone the repository
- Clone repository: git clone https://github.com/hughy12344/to-do-app.git
- Migrate to project folder: cd to-do-app

### Install client dependencies
- Migrate to client folder: cd /client
- Install dependencies: npm install

### Install server dependencies
- Migrate to server folder: cd /server
- Install dependencies: npm install

### Add .env file to server folder
- Email was attached with .env file to paste in the server folder
- Contains environment variables

## Steps to run locally

### Run front-end client
- Migrate to client folder: cd client
- Run command: npm run dev
- Open in browser: http://localhost:5173/

### Run back-end server
- Migrate to client folder: cd server
- Run command: npm run dev
- (Optional) Open in browser: http://localhost:8080/tasks/

## Known Limitations / Future Improvements
- Include user authentication (personal list)
- Add light / dark mode and user preferences
- Deploy front-end / back-end to cloud platforms (e.g., Vercel / Render)
- Add more styling for screen re-sizing / small device compatibility
- Hide task IDs from front-end after development

## License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.