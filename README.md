# Contact Management Application

A full-stack contact management system for adding, editing, viewing, and deleting contacts. Built using **ReactJS (Material UI)** for the frontend, **Node.js** for the backend, and **MongoDB** as the database.

---

## **Features**

- Add, update, delete, and view contact information.
- Pagination and sorting implemented for better usability in the contact table.
- RESTful API for all backend operations with proper error handling.
- Uses Material UI for a modern and responsive design.

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd project
```

### **2. Database Setup**

- Use the following schema for the `contacts` collection:

```javascript
// Mongoose Schema in server.js
const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  company: String,
  jobTitle: String,
});
```

### **3. Backend Setup**

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Start the backend server:

```bash
node server.js
```

- The backend server will run on `http://localhost:5000`.

### **4. Frontend Setup**

Navigate to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

Start the React app:

```bash
npm start
```

- The frontend will run on `http://localhost:3000`.

---

## **How It Works**

### **Frontend**

- Built using **ReactJS** and **Material UI** components for form inputs, buttons, and tables.
- Includes:
  - A form to add and update contacts.
  - A table to display all contacts with sorting, pagination, and action buttons (Edit/Delete).
- API calls are made using `axios` to interact with the backend.

### **Backend**

- Built with **Node.js** and **Express**.
- Provides RESTful API endpoints:
  - `POST /contacts`: Add a new contact.
  - `GET /contacts`: Fetch all contacts.
  - `PUT /contacts/:id`: Update an existing contact.
  - `DELETE /contacts/:id`: Delete a contact.
- Handles validation, duplicate entries, and errors.

### **Database**

- **MongoDB** stores contact information in the `contacts` collection.
- **Mongoose** is used for defining and interacting with the database schema.

---

## **Challenges and Solutions**

### **Challenge 1**: MongoDB Connection Issues

- **Problem**: Having worked on multiple projects with MongoDB, previous configurations caused conflicts.
- **Solution**:
  - Checked the local MongoDB connection string and ensured only one MongoDB instance was running.
  - Used environment variables for the MongoDB URI to prevent hardcoding and conflicts.

### **Challenge 2**: Understanding Material UI (MUI)

- **Problem**: Limited prior experience with Material UI made implementation initially challenging.
- **Solution**:
  - Referred to the official Material UI documentation and examples.
  - Experimented with small components first to understand their properties and behavior.

---

## **Technologies Used**

- **Frontend**: ReactJS, Material UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
