# Online Learning Platform Backend

## Features
1. **User Authentication**: 
    - JWT-based authentication for secure login and registration.
2. **Course Management**: 
    - CRUD operations for courses (admin only).
3. **User Enrollment**: 
    - Users can enroll in courses and track their progress.
4. **Lesson Management**: 
    - CRUD operations for lessons (admin only).
5. **Progress Tracking**: 
    - Track lesson completion for each enrolled user.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (Json Web Token)**
- **bcryptjs**
- **Helmet**
- **CORS**

## Getting Started

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/online-learning-platform.git
    cd online-learning-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT = 3010
    MONGO_URI = mongodb://localhost:27017/online_learning
    JWT_SECRET = vibhu12345
    ```

### Running the Application
1. Start the server:
    ```bash
    npm start
    ```

2. The server should be running on `http://localhost:3010`

### API Endpoints

#### User Authentication
- **Register User**: `POST /api/auth/register`
    ```json
    
    ```
- **Login User**: `POST /api/auth/login`
    ```json
    
    ```

#### Course Management
- **Create Course**: `POST /api/courses` (Admin Only)
    ```json
    
    ```
- **Get All Courses**: `GET /api/courses`
- **Get Course by ID**: `GET /api/courses/:id`
- **Update Course**: `PUT /api/courses/:id` (Admin Only)
    ```json
    
    ```
- **Delete Course**: `DELETE /api/courses/:id` (Admin Only)

#### User Enrollment
- **Enroll in a Course**: `POST /api/enrollments` (Protected)
    ```json
    {
      "courseId": "courseIdHere"
    }
    ```
- **Get User's Enrollments**: `GET /api/enrollments/my` (Protected)
- **Update Lesson Progress**: `PUT /api/enrollments/:id/progress` (Protected)
    ```json
    {
      "lessonId": "lessonIdHere",
      "completed": true
    }
    ```

#### Lesson Management
- **Create Lesson**: `POST /api/lessons` (Admin Only)
    ```json
    {
      "courseId": "courseIdHere",
      "title": "Getting Started with Python",
      "content": "Python is an easy to learn programming language..."
    }
    ```
- **Get Lessons by Course**: `GET /api/lessons/:courseId`


