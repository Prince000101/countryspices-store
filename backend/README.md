# CountrySpices Backend

Backend API for **CountrySpices** — a Meghalaya-based organic spice brand from Northeast India.

## Tech Stack
- **Runtime:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT + bcryptjs
- **Rate Limiting:** express-rate-limit

## Setup

```bash
npm install
cp .env.example .env   # configure your environment
npm run seed             # seed database with products + admin user
npm run dev              # start development server on port 5003
```

## Admin Credentials
- **Email:** prince@creatordev.in
- **Password:** Admin@123

## API Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/products` | List all products |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/cart` | Get cart |
| GET | `/api/wishlist` | Get wishlist |
| POST | `/api/orders` | Create order |
| GET | `/api/admin/*` | Admin management |

## Brand Info
- **Brand:** CountrySpices
- **Tagline:** From the Pristine Hills of Meghalaya
- **Developer:** Prince | Creator Dev

---
Built by Prince | Creator Dev | 2026
