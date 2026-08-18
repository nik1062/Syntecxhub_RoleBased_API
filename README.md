# Syntecxhub Role-Based User Management API

This is a Node.js and Express backend API for **Project 1** of the Syntecxhub Internship Program. It demonstrates a robust Role-Based Access Control (RBAC) system utilizing JWT authentication and MongoDB.

## Features
- **User Authentication:** Registration and Login using bcrypt for secure password hashing.
- **Role-Based Access Control (RBAC):** Users are assigned either a `user` or `admin` role. 
  - *Note: The first user to register is automatically granted `admin` privileges.*
- **JWT Authorization:** Secure endpoints using JSON Web Tokens.
- **Admin Management:**
  - View all registered users.
  - Promote users to Admin.
  - Block or Unblock users (blocked users cannot log in or access protected routes).
  - Delete user accounts permanently.

## Tech Stack
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JSON Web Tokens (JWT)**
- **Bcrypt** (Password Hashing)

---

## 🚀 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Syntecxhub_RoleBased_API.git
   cd Syntecxhub_RoleBased_API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/syntecxhub_project1
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Run the server:**
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

---

## 📖 API Endpoints Documentation

### Authentication Routes (Public)

| Method | Endpoint | Description | Body / Payload |
|--------|----------|-------------|----------------|
| `POST` | `/api/auth/register` | Register a new user | `{ "name": "John Doe", "email": "john@example.com", "password": "123" }` |
| `POST` | `/api/auth/login` | Login and get JWT token | `{ "email": "john@example.com", "password": "123" }` |

### User Routes (Protected - Requires JWT)

| Method | Endpoint | Description | Headers |
|--------|----------|-------------|---------|
| `GET` | `/api/auth/profile` | Get current logged-in user profile | `Authorization: Bearer <token>` |

### Admin Routes (Strictly Protected - Requires JWT & Admin Role)

*All requests below require the `Authorization: Bearer <admin_token>` header.*

| Method | Endpoint | Description | Body / Payload |
|--------|----------|-------------|----------------|
| `GET` | `/api/admin/users` | Retrieve a list of all users | *None* |
| `PUT` | `/api/admin/users/:id/role` | Promote/Demote user role | `{ "role": "admin" }` |
| `PUT` | `/api/admin/users/:id/block` | Toggle Block/Unblock user | *None* |
| `DELETE`| `/api/admin/users/:id` | Delete a user account | *None* |

---

## Testing Workflow
1. **Register** your first account. It will automatically become an Admin.
2. **Login** with that account and copy the `token` from the response.
3. **Register** a second account (this one will be a standard User).
4. Use the Admin's `token` in the Authorization header to test hitting `/api/admin/users` to view both accounts.
5. Use the Admin's `token` to hit `/api/admin/users/:id/block` (using the 2nd user's ID) to block them.
6. Try logging in as the 2nd user to verify they are blocked!
