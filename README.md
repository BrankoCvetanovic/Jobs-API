## Jobs-API

This backend application provides RESTful API endpoints for managing jobs. It allows users to perform operations such as creating, updating, deleting, and fetching jobs. The application is built using Node.js and Express.js framework, with MongoDB as the database using Mongoose. Authentication is implemented using JSON Web Tokens (JWT).

# Installation:
1. Clone the repository:
  git clone <repository-url>
2. Install dependencies:
  npm install
3.Set up environment variables:
  Create a .env file in the root directory.
  Define the following environment variables:
  - MONGODB_URI=<your-mongodb-uri>
  - JWT_SECRET=<your-jwt-secret>
4. Start the server:
  npm start

# API Endpoints:

Authentication:
Register: POST /api/auth/register

1. Create a new user account.
Request Body: User details (email, password).
Response: JWT token and user's name (201 Created).
Login: POST /api/auth/login

2. Authenticate user.
Request Body: User's email and password.
Response: JWT token and user's name (200 OK).
Jobs:
Create Job: POST /api/jobs

3. Create a new job.
Request Body: Job details.
Response: Newly created job object (201 Created).
Get All Jobs: GET /api/jobs

4. Retrieve all jobs created by the authenticated user.
Response: Array of jobs and count.
Get Job by ID: GET /api/jobs/:id

5. Retrieve a specific job by its ID.
Response: Job details (200 OK).
Update Job: PUT /api/jobs/:id

6. Update a specific job.
Request Body: Updated job details.
Response: Updated job object (200 OK).
Delete Job: DELETE /api/jobs/:id

7. Delete a specific job.
Response: Empty response (200 OK).

# Technologies Used:
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)
HTTP Status Codes
