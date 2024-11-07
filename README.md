# Admin Dashboard

Full-stack admin dashboard application built with React (frontend) and Node.js/Express (backend) for managing camping accommodations.

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (v8.0 or higher)
- [XAMPP](https://www.apachefriends.org/) (if you prefer using phpMyAdmin)

## Project Structure

```
admin-dashboard/
├── frontend/          # React frontend application
├── backend/           # Node.js/Express backend application
└── database/          # SQL scripts for database setup
```

## Installation & Setup

### 1. Database Setup

1. Create a new MySQL database:

```sql
CREATE DATABASE camping_admin;
```

2. Import the database structure:

- Open phpMyAdmin (http://localhost/phpmyadmin)
- Select the `camping_admin` database
- Import the SQL file from `database/schema.sql`

### 2. Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=camping_admin
PORT=5000
```

4. Start the backend server:

```bash
npm start
```

The backend should now be running on http://localhost:5000

### 3. Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:

```bash
npm run dev
```

The frontend should now be running on http://localhost:5173

## Features

- **Accommodation Management**

  - CRUD operations for accommodation units
  - Type management
  - Image upload functionality

- **Responsive Design**
  - Mobile-friendly interface
  - Adaptive sidebar

## API Endpoints

### Accommodation Units

- GET `/api/brojsj` - Get all units
- POST `/api/brojsj` - Create new unit
- PUT `/api/brojsj/:id` - Update unit
- DELETE `/api/brojsj/:id` - Delete unit

### Accommodation Types

- GET `/api/vrstasj` - Get all types
- POST `/api/vrstasj` - Create new type
- PUT `/api/vrstasj/:id` - Update type
- DELETE `/api/vrstasj/:id` - Delete type

## Common Issues & Solutions

1. **Database Connection Error**

   - Verify MySQL is running
   - Check database credentials in `.env`
   - Ensure the database exists

2. **CORS Issues**

   - Backend includes CORS configuration
   - Check frontend API URL in `.env`

3. **Port Already in Use**
   - Change port in backend `.env`
   - Update frontend API URL accordingly

## Development

### Adding New Features

1. Backend:

- Add routes in `backend/routes/`
- Create controllers in `backend/controllers/`
- Define models in `backend/models/`

2. Frontend:

- Add new pages in `frontend/src/pages/`
- Create components in `frontend/src/components/`
- Update routing in `App.jsx`

## Deployment

For production deployment:

1. Backend:

```bash
cd backend
npm run build
```

2. Frontend:

```bash
cd frontend
npm run build
```

## Support

For issues or questions, please:

1. Check the common issues section
2. Review backend logs
3. Contact support at [your-email]

## License

This project is proprietary and confidential.

```

```
