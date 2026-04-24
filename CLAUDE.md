# Proyecto: MyCommerce Storefront

## Qué es
Prototipo de storefront e-commerce construido con Next.js, diseñado para conectarse a un backend MedusaJS v2. Actualmente funciona con datos mock.

## Stack
- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS v4
- **Iconos:** Lucide React
- **Lenguaje:** TypeScript (strict)
- **Backend (futuro):** MedusaJS v2 (Node.js + PostgreSQL)
- **Pagos (futuro):** Stripe vía módulo de pagos de MedusaJS

## Arquitectura
- El storefront es una app Next.js independiente
- Los datos actualmente vienen de `src/data/mock-products.ts`
- Los tipos en `src/types/medusa.ts` reflejan los modelos de MedusaJS v2
- Cuando se conecte al backend, los datos vendrán de la Store API de MedusaJS
- El estado del carrito se maneja con React Context (`src/context/cart-context.tsx`)

## Estructura
```
/storefront
  /src
    /app                → App Router pages
      /productos        → Listado de productos (con filtros por categoría)
      /productos/[handle] → Detalle de producto
      /carrito          → Carrito de compras
      /checkout         → Checkout simulado
    /components
      /layout           → Header, Footer
      /products         → ProductCard, ProductDetail
    /context            → CartProvider (React Context)
    /data               → Datos mock (productos, categorías, colecciones)
    /types              → Tipos TypeScript (reflejan modelos MedusaJS)
```

## Convenciones de código

### TypeScript
- Componentes funcionales con arrow functions
- Tailwind para estilos — NO CSS modules ni styled-components
- Server Components por defecto, "use client" solo cuando necesario
- Props tipadas con interface, NO type inline
- Named exports para componentes
- Nombres de archivos: kebab-case

## Comandos
```bash
npm run dev     # Dev server en http://localhost:3000
npm run build   # Build de producción
npm run lint    # Linting
```

## Próximos pasos para conectar MedusaJS
1. Instalar PostgreSQL (`brew install postgresql@16`)
2. Crear app MedusaJS (`npx create-medusa-app@latest`)
3. Reemplazar datos mock por llamadas a la Store API de MedusaJS
4. Configurar `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` y `MEDUSA_BACKEND_URL`
5. Instalar `@medusajs/js-sdk` para el cliente API

## ⚠️ Reglas que NUNCA debes romper
1. **No usar `any` en TypeScript** — tipar todo explícitamente
2. **No instalar dependencias sin preguntar** — discutir alternativas primero
3. **Server Components por defecto** — "use client" solo para interactividad
4. **Tailwind para estilos** — nunca style={{}} ni CSS modules
5. **Variables sensibles en .env** — nunca hardcodear secrets
