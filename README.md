# Laravel Brand and Outlet Management System

This project is a Laravel-based system for managing brands and their associated outlets. It includes CRUD operations for brands and outlets, along with an API endpoint for calculating the nearest outlet based on a user's location.

---

## Setup

### Prerequisites

Ensure the following tools are installed:
- **PHP** (version 8.0 or later)
- **Composer**
- **Laravel** (latest version recommended)
- **SQLite** (or another supported database)
- **Node.js** (for frontend build tools)
- **npm or Yarn**

---

### Steps to Set Up the Project

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   - Install PHP dependencies:
     ```bash
     composer install
     ```
   - Install JavaScript dependencies:
     ```bash
     npm install
     ```

3. **Set Up the Environment**
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with the following configuration to use SQLite:
     ```env
     DB_CONNECTION=sqlite
     DB_DATABASE=/path/to/database/database.sqlite
     ```
   - Ensure the SQLite database file exists:
     ```bash
     touch database/database.sqlite
     ```

4. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

5. **Run Database Migrations**
   ```bash
   php artisan migrate
   ```

6. **Seed the Database (Optional)**
   ```bash
   php artisan db:seed
   ```

7. **Start the Development Server**
   ```bash
   php artisan serve
   ```

8. **Run Vite for Frontend Assets**
   ```bash
   npm run dev
   ```

---

## Usage

### CMS Features

1. **Brand Management**
   - Create, Read, Update, and Delete brands.
   - Assign outlets to brands.

2. **Outlet Management**
   - Create, Read, Update, and Delete outlets.
   - Assign outlets to specific brands.

3. **API Endpoint**
   - `/api/outlets/nearest`: Calculates the nearest outlet based on user-provided latitude and longitude.

### API Example

#### Nearest Outlet API
**Request:**
```http
GET /api/outlets/nearest?latitude=12.34&longitude=56.78
```

**Response:**
```json
{
  "outlet": {
    "id": 1,
    "name": "Outlet Name",
    "distance": 2.34
  }
}
```

---

## Testing

Run unit and feature tests using PHPUnit:
```bash
php artisan test
```

---

## Optimization

- **Eager Loading:** Optimize queries with relationships to reduce database calls.
- **Pagination:** Use pagination for endpoints that return large datasets.

---


## License

This project is licensed under the MIT License. See the LICENSE file for details.

