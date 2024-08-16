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

Create a .env file in the root directory with the following content:


DB_NAME=resoluteServer
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=talib123456
DB_PORT=5433
PORT=3000
Replace yourpassword with your actual PostgreSQL password.

### Run Migrations

Initialize and migrate the database:


npx sequelize-cli db:migrate


### Start the Server


npm start



### API Documentation
```
User Routes
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

Login a User


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
Course Routes

```
Get All Courses

Endpoint: GET /api/courses

Response:

[
  {
    "id": "course_id",
    "name": "Course Name",
    "description": "Course Description",
    "lessons": [
      {
        "id": "lesson_id",
        "title": "Lesson Title",
        "content": "Lesson Content"
      }
    ]
  }
]

```
Create a Course

```
Endpoint: POST /api/courses

Request Body:


{
  "name": "Course Name",
  "description": "Course Description",
  "lessons": [
    {
      "title": "Lesson Title",
      "content": "Lesson Content"
    }
  ]
}
Response:


{
  "id": "course_id",
  "name": "Course Name",
  "description": "Course Description",
  "lessons": [
    {
      "id": "lesson_id",
      "title": "Lesson Title",
      "content": "Lesson Content"
    }
  ]
}

```
Update a Course
```
Endpoint: PUT /api/courses/:id

Request Body:


{
  "name": "Updated Course Name",
  "description": "Updated Course Description"
}
Response:

{
  "id": "course_id",
  "name": "Updated Course Name",
  "description": "Updated Course Description"
}
```
Delete a Course
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

Caching: Redis is used to cache course data for improved performance.

```
### Approach

### Database Design and Schema
```
Users Table: Stores user information including username, email, and hashed password.
Courses Table: Stores information about courses.
Lessons Table: Stores information about lessons linked to courses using a foreign key.
Security and Performance
Security: User passwords are hashed before storing them. JWT tokens are used for secure authentication.
Performance: Redis caching is used to reduce the number of database queries for frequently accessed data.
Challenges and Solutions
Database Migrations: Initially faced issues with missing migration files and configuration. Resolved by creating appropriate migration files and ensuring correct configuration in config.json.
Data Relationships: Managed complex relationships between courses and lessons by defining foreign keys and ensuring proper migration and model definitions.

```
