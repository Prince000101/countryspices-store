# CountrySpices — Architecture

## Brand Identity
- **Name**: CountrySpices
- **Tagline**: "From the Hills of Meghalaya to Your Kitchen"
- **Founded**: 2005, Shillong, Meghalaya
- **Founder**: Ruth Mawphlang
- **Theme**: Forest green + terracotta + mist cream
- **Location**: Laitumkhrah, Shillong, Meghalaya 793003

## Tech Stack
- Frontend: React 19, Vite 8, Tailwind CSS v4, Framer Motion
- Backend: Node.js, Express, Mongoose, JWT, bcryptjs
- Database: MongoDB Atlas
- Auth: JWT (30-day expiry)
- Payments: Razorpay

## Color Palette
- Forest Green: `#166534` (primary)
- Terracotta: `#C2410C` (accent)
- Mist Cream: `#F5F0E8` (background)
- Deep Moss: `#14532D` (dark)
- Leaf Gold: `#A3E635` (highlight)
- Pure White: `#FFFFFF`
- Charcoal: `#1C1917` (text)

## Fonts
- Fraunces (serif, headings)
- DM Sans (sans-serif, body)

## Project Structure
```
countryspices/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── data/products.js
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── seeder.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── DarkModeToggle.jsx
│   │   │   └── ImageWithSkeleton.jsx
│   │   ├── context/
│   │   ├── hook/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── About.jsx
│   │   └── services/
│   ├── index.html
│   └── vite.config.js
└── ARCHITECTURE.md
```

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

## Pages
- **Home**: Hero with mountain imagery, featured products, story section, features, testimonials, newsletter
- **About**: Brand story, timeline, Meghalaya connection, values
- **Shop**: Product listing with filters
- **Contact**: Contact form

## API Endpoints
- `GET /api/products` — List all products
- `GET /api/products/:id` — Single product
- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — Login user
- `POST /api/orders` — Create order
- `GET /api/orders/:id` — Get order

## Environment Variables
```env
PORT=5003
MONGODB_URI=mongodb+srv://<REDACTED>@cluster.mongodb.net/<REDACTED>
JWT_SECRET=your_jwt_secret_here
RAZORPAY_KEY_ID=rzp_test_Ba7bK0VfZn0Zqg
RAZORPAY_KEY_SECRET=your_razorpay_secret_here
EMAIL_USER=prince@creatordev.in
EMAIL_PASS=your_email_password_here
```
