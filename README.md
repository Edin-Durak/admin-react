# Admin Dashboard

This project is a React-based admin dashboard application with a sidebar navigation, dynamic content rendering, and a CRUD interface for managing "BrojSJ" entries.

## Features

- Responsive sidebar navigation
- Dynamic content rendering based on selected section
- CRUD operations for "BrojSJ" and "VrstaSJ" entries
- Form validation using Formik and Yup
- Bootstrap styling for a clean, modern UI

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   └── Sidebar.jsx
├── pages/
│   └── BrojSJ.jsx
│   └── VrstaSJ.jsx
├── css/
│   └── sidebar.css
├── App.jsx
├── main.jsx
└── index.css
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Dependencies

- React
- React Bootstrap
- Formik
- Yup
- Font Awesome

## Usage

### Sidebar Navigation

The sidebar allows users to switch between different sections of the dashboard. It also includes a dropdown to select different camps.

### BrojSJ Page and VrstaSJ Page

These pages demonstrate CRUD operations:

- Add new entries
- Edit existing entries
- Delete entries
- View all entries in a table format

## Customization

- Modify `src/components/Sidebar.jsx` to add or remove navigation items
- Add new pages in the `src/pages/` directory and update `App.jsx` to include them in the routing

## License

This project is open source and available under the [MIT License](LICENSE).
