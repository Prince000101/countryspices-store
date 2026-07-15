# CountrySpices — Organic Spices from Meghalaya

Full-stack organic spice e-commerce app built with React (Vite) + Node.js/Express + MongoDB (Atlas).

---

## Live Demo

| URL | Link |
|---|---|
| **Frontend** | https://countryspices-store.vercel.app/ |
| **Backend API** | https://countryspices-store.onrender.com/api/products |
| **Admin Panel** | https://countryspices-store.vercel.app/admin |
| **Backend Images** | https://countryspices-store.onrender.com/uploads/01.jpg |

---

## Login Credentials

### Admin Account

| Field    | Value             |
|----------|-------------------|
| Email    | Set via `ADMIN_EMAIL` env var |
| Password | Set via `ADMIN_PASSWORD` env var |

The admin account is created by running the seed script. It has full access to the admin dashboard at `/admin` where you can manage products, orders, users, coupons, and reviews.

### Regular Users

No default user is seeded. Users must **register themselves** at `/register` on the frontend. After registering, they can browse products, add to cart, place orders, and manage their wishlist.

---

## Quick Start

### Prerequisites
- **Node.js** v18+
- **npm**
- **MongoDB** — [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier) or local

### 1. Clone & Install

```bash
git clone https://github.com/Prince000101/countryspices-store.git
cd countryspices-store

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Configure `backend/.env`

```env
PORT=5003
MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<generate-with-openssl-rand-hex-64>
ADMIN_PASSWORD=<your-admin-password>
ADMIN_EMAIL=<your-admin-email>
CLIENT_URL=http://localhost:3003
```

### 3. Seed Database & Run

```bash
# Terminal 1 — Backend
cd backend
npm run seed    # creates admin account + sample products
npm start       # http://localhost:5003

# Terminal 2 — Frontend
cd frontend
npm run dev     # http://localhost:3003
```

---

## Features

### Customer Features
- Browse products with search, category filter, and sort
- Product detail page with image gallery and variants
- Shopping cart (add, update quantity, remove)
- Wishlist (persisted locally and synced to backend when logged in)
- Checkout with COD (Cash on Delivery)
- Order tracking by order ID
- User authentication (register / login / logout)
- Responsive design (mobile, tablet, desktop)

### Admin Features
- Dashboard with stats (users, products, orders, revenue)
- Product management (CRUD)
- Order management (view all, mark delivered)
- User management (view all users)
- Coupon management (create, delete discount codes)
- Review management (view and delete customer reviews)
- Sales chart (last 30 days)
- Low stock alerts

---

## Products (8 items)

### Whole Spices
| # | Product | Price | Rating |
|---|---------|-------|--------|
| 1 | Meghalaya Black Pepper | ₹299 | 4.8 |
| 2 | Wild Turmeric from Garo Hills | ₹249 | 4.9 |
| 5 | Jaintia Cumin Seeds | ₹229 | 4.7 |

### Ground Masalas
| # | Product | Price | Rating |
|---|---------|-------|--------|
| 3 | Naga Chili Flakes | ₹349 | 4.7 |
| 4 | Khasi Coriander Powder | ₹199 | 4.6 |
| 6 | Shillong Garam Masala | ₹399 | 4.9 |

### Herbal Teas
| # | Product | Price | Rating |
|---|---------|-------|--------|
| 8 | Meghalaya Tea Blend | ₹299 | 4.8 |

### Value Packs
| # | Product | Price | Rating |
|---|---------|-------|--------|
| 7 | Wild Forest Honey | ₹549 | 4.9 |

---

## API Routes

### Public
| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | /api/products             | All products              |
| GET    | /api/products/:id         | Single product            |
| GET    | /api/products/:id/reviews | Reviews for a product     |
| POST   | /api/auth/login           | Login                     |
| POST   | /api/auth/register        | Register                  |

### Protected (auth required)
| Method | Endpoint                        | Description           |
|--------|---------------------------------|-----------------------|
| GET    | /api/cart                       | Get cart              |
| POST   | /api/cart                       | Add to cart           |
| DELETE | /api/cart/:id                   | Remove from cart      |
| GET    | /api/wishlist                   | Get wishlist          |
| POST   | /api/wishlist                   | Add to wishlist       |
| DELETE | /api/wishlist/:productId        | Remove from wishlist  |
| POST   | /api/orders                     | Create order          |
| GET    | /api/orders/:id                 | Get order by ID       |

### Admin Only
| Method | Endpoint                        | Description                  |
|--------|---------------------------------|------------------------------|
| GET    | /api/admin/dashboard            | Dashboard stats              |
| GET    | /api/admin/recent-orders        | Last 5 orders                |
| GET    | /api/admin/top-products         | Top selling products         |
| GET    | /api/admin/low-stock            | Products with stock ≤ 10     |
| GET    | /api/admin/product-stats        | Cart/wishlist counts         |
| GET    | /api/admin/sales                | Daily sales (last 30 days)   |
| GET    | /api/auth/users                 | All users                    |
| GET    | /api/orders/admin               | All orders                   |
| PUT    | /api/orders/:id/deliver         | Mark order delivered         |
| POST   | /api/products                   | Create product               |
| PUT    | /api/products/:id               | Update product               |
| DELETE | /api/products/:id               | Delete product               |
| GET    | /api/coupons                    | All coupons                  |
| POST   | /api/coupons                    | Create coupon                |
| DELETE | /api/coupons/:id                | Delete coupon                |
| GET    | /api/reviews                    | All reviews                  |
| DELETE | /api/reviews/:id                | Delete review                |

---

## Tech Stack

| Layer    | Technology                                    |
|----------|-----------------------------------------------|
| Frontend | React 19, Vite 8, Tailwind v4, Framer Motion |
| Backend  | Node.js, Express, Mongoose, JWT, bcryptjs     |
| Database | MongoDB Atlas                                 |
| Auth     | JWT (30-day expiry)                           |
| Rate Limiting | express-rate-limit (100 req/15min global, 20 req/15min on auth) |

---

## Deployment

| Service | Role | URL | Cost |
|---|---|---|---|
| Vercel | Frontend | https://countryspices-store.vercel.app | Free |
| Render | Backend | https://countryspices-store.onrender.com | Free |
| MongoDB Atlas | Database | Cloud hosted | Free |

---

## Environment Variables (`backend/.env`)

```env
PORT=5003
MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<generate-with-openssl-rand-hex-64>
ADMIN_PASSWORD=<your-admin-password>
ADMIN_EMAIL=<your-admin-email>
CLIENT_URL=http://localhost:3003
```

---

## Security

- Rate limiting on all `/api/*` routes (100 requests per 15 min)
- Stricter rate limit on login/register (20 requests per 15 min)
- Request body limited to 10 KB
- CSP, HSTS, X-Frame-Options, X-XSS-Protection headers set
- Passwords hashed with bcrypt (12 rounds)
- `totalPrice` calculated server-side
- Stock validated before adding to cart
- Users can only view their own orders
- JWT with strong 64-byte random secret
- `.env` in `.gitignore` — credentials never committed
- Error messages are generic; real errors logged server-side
- Input validation on wishlist endpoints (valid ObjectId check)

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| MongoDB timeout | Atlas free tier spins down — wait 20s and refresh |
| Invalid login | Run `npm run seed` first |
| Module not found | Run `npm install` in both `backend/` and `frontend/` |
| Port in use | `lsof -ti:5003 \| xargs kill` (Linux/macOS) or `taskkill /PID <pid>` (Windows) |
| Images not loading | Check that `uploads/` folder exists in `backend/` and is not in `.gitignore` |

---

## Project Structure

```
CountrySpices/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── data/
│   │   └── products.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── rateLimiter.js
│   ├── models/
│   │   ├── Coupon.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── couponRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── WishlistRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env
│   ├── seeder.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hook/
│   │   ├── pages/
│   │   │   └── admin/
│   │   └── services/
│   ├── index.html
│   └── vite.config.js
└── README.md
```
