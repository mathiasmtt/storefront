# MyCommerce — Storefront

Prototipo de storefront e-commerce construido con Next.js y diseñado para conectarse a un backend [MedusaJS v2](https://medusajs.com/). Actualmente funciona con datos mock.

## Stack

| Tecnología | Versión |
|---|---|
| Next.js (App Router) | 16 |
| React | 19 |
| TypeScript | 5 (strict) |
| Tailwind CSS | 4 |
| Lucide React | latest |

## Estructura

```
src/
├── app/
│   ├── productos/          # Listado con filtros por categoría
│   ├── productos/[handle]/ # Detalle de producto
│   ├── carrito/            # Carrito de compras
│   └── checkout/           # Checkout simulado
├── components/
│   ├── layout/             # Header, Footer
│   └── products/           # ProductCard, ProductDetail
├── context/                # CartProvider (React Context)
├── data/                   # Datos mock
└── types/                  # Tipos TypeScript (modelos MedusaJS)
```

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting
```

## Variables de entorno

Crear un archivo `.env.local` en la raíz (requerido al conectar el backend):

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your_key_here
```

## Roadmap

- [ ] Instalar y configurar MedusaJS v2
- [ ] Reemplazar datos mock por la Store API de MedusaJS
- [ ] Integrar pagos con Stripe
- [ ] Autenticación de usuarios
