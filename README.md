# Resolute Solution Assignment

## Overview

The application includes functionality for user registration, authentication, and course management. It utilizes Sequelize ORM for database interactions and Redis for caching.

## Setup Instructions

### Prerequisites

- Node.js (v20.11.1 or later)
- PostgreSQL
- Redis
- Sequelize CLI

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/resolute_solution_assignment.git
   cd resolute_solution_assignment


### Install Dependencies

```
npm install

```
### Configure Environment Variables
```
Create a .env file in the root directory with the following content:
```

- DB_NAME=resoluteserver
- DB_USER=postgres
- DB_PASS=yourpassword
- DB_HOST=localhost
- JWT_SECRET=talib123456
- DB_PORT=5433
- PORT=3000

- Replace yourpassword with your actual PostgreSQL password.

### Run Migrations

- Initialize and migrate the database:

```
npx sequelize-cli db:migrate

```
### Start the Server

```
npm start
```


### API Documentation


### Search Functionality

- Search Content

- Endpoint: GET /api/search

- Query Parameters:
```
query: The search term to look for in the title and description fields of courses, and in the title and content fields of lessons.
```
```
URL: GET http://localhost:3000/api/search?query=Nest.js

```
- Response
```
{
    "courses": [
        {
            "id": 10,
            "title": "Introduction to Nest.js",
            "description": "A beginner's course on Nest.js",
            "createdAt": "2024-08-16T11:49:14.746Z",
            "updatedAt": "2024-08-16T11:49:14.746Z"
        }
    ],
    "lessons": [
        {
            "id": 3,
            "title": "Getting Started with Nest.js",
            "content": "This lesson covers the basics of Nest.js...",
            "courseId": 10,
            "createdAt": "2024-08-16T11:49:14.851Z",
            "updatedAt": "2024-08-16T11:49:14.851Z"
        },
        {
            "id": 4,
            "title": "Nest.js Modules",
            "content": "This lesson covers how to use modules in Nest.js...",
            "courseId": 10,
            "createdAt": "2024-08-16T11:49:14.851Z",
            "updatedAt": "2024-08-16T11:49:14.851Z"
        }
    ]
}
```

- User Routes
```
Register a User

Endpoint: POST /api/users/register

Request Body:


{
  "username": "string",
  "email": "string",
  "password": "string"
}
Response:


{
  "user": {
    "id": "user_id",
    "username": "string",
    "email": "string"
  }
}
```
- Login a User
```
Endpoint: POST /api/users/login

Request Body:


{
  "email": "string",
  "password": "string"
}
Response:


{
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "username": "string",
    "email": "string"
  }
}
```
- Course Routes
```
Get All Courses

Endpoint: GET /api/courses

Response:

[
    {
        "id": 9,
        "title": "Introduction to Node.js",
        "description": "A beginner's course on Node.js",
        "createdAt": "2024-08-16T11:40:58.945Z",
        "updatedAt": "2024-08-16T11:40:58.945Z",
        "Lessons": [
            {
                "id": 1,
                "title": "Getting Started with Node.js",
                "content": "This lesson covers the basics of Node.js...",
                "courseId": 9,
                "createdAt": "2024-08-16T11:40:59.029Z",
                "updatedAt": "2024-08-16T11:40:59.029Z"
            },
            {
                "id": 2,
                "title": "Node.js Modules",
                "content": "This lesson covers how to use modules in Node.js...",
                "courseId": 9,
                "createdAt": "2024-08-16T11:40:59.029Z",
                "updatedAt": "2024-08-16T11:40:59.029Z"
            }
        ]
    },
    {
        "id": 10,
        "title": "Introduction to Nest.js",
        "description": "A beginner's course on Nest.js",
        "createdAt": "2024-08-16T11:49:14.746Z",
        "updatedAt": "2024-08-16T11:49:14.746Z",
        "Lessons": [
            {
                "id": 3,
                "title": "Getting Started with Nest.js",
                "content": "This lesson covers the basics of Nest.js...",
                "courseId": 10,
                "createdAt": "2024-08-16T11:49:14.851Z",
                "updatedAt": "2024-08-16T11:49:14.851Z"
            },
            {
                "id": 4,
                "title": "Nest.js Modules",
                "content": "This lesson covers how to use modules in Nest.js...",
                "courseId": 10,
                "createdAt": "2024-08-16T11:49:14.851Z",
                "updatedAt": "2024-08-16T11:49:14.851Z"
            }
        ]
    },
    {
        "id": 11,
        "title": "Introduction to Nest.js",
        "description": "A beginner's course on Nest.js",
        "createdAt": "2024-08-16T12:44:02.249Z",
        "updatedAt": "2024-08-16T12:44:02.249Z",
        "Lessons": [
            {
                "id": 5,
                "title": "Getting Started with Nest.js",
                "content": "This lesson covers the basics of Nest.js...",
                "courseId": 11,
                "createdAt": "2024-08-16T12:44:02.329Z",
                "updatedAt": "2024-08-16T12:44:02.329Z"
            },
            {
                "id": 6,
                "title": "Nest.js Modules",
                "content": "This lesson covers how to use modules in Nest.js...",
                "courseId": 11,
                "createdAt": "2024-08-16T12:44:02.330Z",
                "updatedAt": "2024-08-16T12:44:02.330Z"
            }
        ]
    },
    {
        "id": 2,
        "title": "Course Name",
        "description": "Course Description",
        "createdAt": "2024-08-16T10:35:39.917Z",
        "updatedAt": "2024-08-16T10:35:39.917Z",
        "Lessons": []
    },
    {
        "id": 5,
        "title": "Course Name",
        "description": "Course Description",
        "createdAt": "2024-08-16T11:02:00.797Z",
        "updatedAt": "2024-08-16T11:02:00.797Z",
        "Lessons": []
    },
    {
        "id": 8,
        "title": "Introduction to Node.js",
        "description": "A beginner's course on Node.js",
        "createdAt": "2024-08-16T11:26:58.768Z",
        "updatedAt": "2024-08-16T11:26:58.768Z",
        "Lessons": []
    },
    {
        "id": 6,
        "title": "Introduction to Node.js",
        "description": "A beginner's course on Node.js",
        "createdAt": "2024-08-16T11:12:13.151Z",
        "updatedAt": "2024-08-16T11:12:13.151Z",
        "Lessons": []
    },
    {
        "id": 4,
        "title": "Course Name",
        "description": "Course Description",
        "createdAt": "2024-08-16T10:58:58.974Z",
        "updatedAt": "2024-08-16T10:58:58.974Z",
        "Lessons": []
    },
    {
        "id": 3,
        "title": "Course Name",
        "description": "Course Description",
        "createdAt": "2024-08-16T10:58:50.693Z",
        "updatedAt": "2024-08-16T10:58:50.693Z",
        "Lessons": []
    },
    {
        "id": 7,
        "title": "Introduction to Node.js",
        "description": "A beginner's course on Node.js",
        "createdAt": "2024-08-16T11:21:28.192Z",
        "updatedAt": "2024-08-16T11:21:28.192Z",
        "Lessons": []
    }
]
```
- Create a Course
```
Endpoint: POST /api/courses

Request Body:

{
  "title": "Introduction to Nest.js",
  "description": "A beginner's course on Nest.js",
  "lessons": [
    {
      "title": "Getting Started with Nest.js",
      "content": "This lesson covers the basics of Nest.js..."
    },
    {
      "title": "Nest.js Modules",
      "content": "This lesson covers how to use modules in Nest.js..."
    }
  ]
}


- Response:

{
    "id": 11,
    "title": "Introduction to Nest.js",
    "description": "A beginner's course on Nest.js",
    "createdAt": "2024-08-16T12:44:02.249Z",
    "updatedAt": "2024-08-16T12:44:02.249Z",
    "Lessons": [
        {
            "id": 5,
            "title": "Getting Started with Nest.js",
            "content": "This lesson covers the basics of Nest.js...",
            "courseId": 11,
            "createdAt": "2024-08-16T12:44:02.329Z",
            "updatedAt": "2024-08-16T12:44:02.329Z"
        },
        {
            "id": 6,
            "title": "Nest.js Modules",
            "content": "This lesson covers how to use modules in Nest.js...",
            "courseId": 11,
            "createdAt": "2024-08-16T12:44:02.330Z",
            "updatedAt": "2024-08-16T12:44:02.330Z"
        }
    ]
}

```
- Update a Course
```
Endpoint: PUT /api/courses/:id

Request Body:


{
  "title": "Updated Course Name",
  "description": "Updated Course Description"
}
Response:

{
  "id": "course_id",
  "title": "Updated Course Name",
  "description": "Updated Course Description"
}
```
- Delete a Course
```
Endpoint: DELETE /api/courses/:id

Response:


{
  "message": "Course deleted"
}
```
### Assumptions and Decisions
```
Database Design: The Users, Courses, and Lessons tables are designed to store user information and course-related data, with foreign keys linking lessons to courses.
```
```
Security: Passwords are hashed using bcryptjs, and JWT tokens are used for authentication.
```
```
Caching: Redis is used to cache course data for improved performance.
```
### Approach

### Database Design and Schema
```
Users Table: Stores user information including username, email, and hashed password.
```
Courses Table: Stores information about courses.
```
Lessons Table: Stores information about lessons linked to courses using a foreign key.
```
### Security and Performance
```
Security: User passwords are hashed before storing them. JWT tokens are used for secure authentication.
```
```
Performance: Redis caching is used to reduce the number of database queries for frequently accessed data.
```
### Challenges and Solutions
```
Database Migrations: Initially faced issues with missing migration files and configuration. Resolved by creating appropriate migration files and ensuring correct configuration in config.json.
```
```
Data Relationships: Managed complex relationships between courses and lessons by defining foreign keys and ensuring proper migration and model definitions.
```
