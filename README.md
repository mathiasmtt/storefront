# MyCommerce — Storefront

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

E-commerce storefront built with Next.js, designed to connect to a [MedusaJS v2](https://medusajs.com/) backend. Currently running on mock data.

## Tech Stack

| Technology          | Version |
| ------------------- | ------- |
| Next.js (App Router)| 16      |
| React               | 19      |
| TypeScript          | 5 (strict) |
| Tailwind CSS        | 4       |
| Lucide React        | latest  |

## Project Structure

```
src/
├── app/
│   ├── productos/           # Product listing with category filters
│   ├── productos/[handle]/  # Product detail page
│   ├── carrito/             # Shopping cart
│   └── checkout/            # Simulated checkout
├── components/
│   ├── layout/              # Header, Footer
│   └── products/            # ProductCard, ProductDetail
├── context/                 # CartProvider (React Context)
├── data/                    # Mock data
└── types/                   # TypeScript types (MedusaJS models)
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Lint
```

## Environment Variables

Create a `.env.local` file at the root (required when connecting the backend):

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your_key_here
```

## Roadmap

- [ ] Set up MedusaJS v2 backend
- [ ] Replace mock data with MedusaJS Store API
- [ ] Integrate Stripe payments
- [ ] User authentication
