import { Product, ProductCategory, ProductCollection } from "@/types/medusa"

export const collections: ProductCollection[] = [
  { id: "col_summer", title: "Colección Verano", handle: "verano" },
  { id: "col_basics", title: "Esenciales", handle: "esenciales" },
  { id: "col_new", title: "Nuevos Ingresos", handle: "nuevos" },
]

export const categories: ProductCategory[] = [
  { id: "cat_remeras", name: "Remeras", handle: "remeras", description: "Remeras de algodón premium" },
  { id: "cat_pantalones", name: "Pantalones", handle: "pantalones", description: "Pantalones para todo momento" },
  { id: "cat_accesorios", name: "Accesorios", handle: "accesorios", description: "Complementá tu look" },
  { id: "cat_calzado", name: "Calzado", handle: "calzado", description: "Pisá firme con estilo" },
]

export const products: Product[] = [
  {
    id: "prod_01",
    title: "Remera Oversize Essential",
    handle: "remera-oversize-essential",
    subtitle: "Algodón 100% orgánico",
    description: "Remera oversize de corte relajado confeccionada en algodón orgánico de 220g. Costuras reforzadas y cuello acanalado que mantiene su forma lavado tras lavado. El fit perfecto para el día a día.",
    thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    images: [
      { id: "img_01a", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop", alt: "Remera blanca frontal" },
      { id: "img_01b", url: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=1000&fit=crop", alt: "Remera blanca detalle" },
    ],
    options: [
      { id: "opt_size", title: "Talle", values: ["S", "M", "L", "XL"] },
      { id: "opt_color", title: "Color", values: ["Blanco", "Negro", "Gris"] },
    ],
    variants: [
      { id: "var_01a", title: "S / Blanco", sku: "REM-OVR-S-W", prices: [{ amount: 15900, currency_code: "ARS" }], options: { Talle: "S", Color: "Blanco" }, inventory_quantity: 25, manage_inventory: true },
      { id: "var_01b", title: "M / Blanco", sku: "REM-OVR-M-W", prices: [{ amount: 15900, currency_code: "ARS" }], options: { Talle: "M", Color: "Blanco" }, inventory_quantity: 30, manage_inventory: true },
      { id: "var_01c", title: "L / Negro", sku: "REM-OVR-L-B", prices: [{ amount: 15900, currency_code: "ARS" }], options: { Talle: "L", Color: "Negro" }, inventory_quantity: 18, manage_inventory: true },
      { id: "var_01d", title: "XL / Gris", sku: "REM-OVR-XL-G", prices: [{ amount: 15900, currency_code: "ARS" }], options: { Talle: "XL", Color: "Gris" }, inventory_quantity: 12, manage_inventory: true },
    ],
    collection: collections[1],
    categories: [categories[0]],
    tags: ["algodón", "oversize", "básico"],
    status: "published",
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-06-01T10:00:00Z",
  },
  {
    id: "prod_02",
    title: "Jean Slim Fit Premium",
    handle: "jean-slim-fit-premium",
    subtitle: "Denim italiano 12oz",
    description: "Jean slim fit en denim italiano de 12oz con elastano para mayor comodidad. Lavado medio que combina con todo. Cinco bolsillos clásicos y cierre YKK. Un imprescindible en cualquier guardarropa.",
    thumbnail: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop",
    images: [
      { id: "img_02a", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop", alt: "Jean slim frontal" },
      { id: "img_02b", url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=1000&fit=crop", alt: "Jean slim detalle" },
    ],
    options: [
      { id: "opt_size", title: "Talle", values: ["28", "30", "32", "34", "36"] },
      { id: "opt_color", title: "Color", values: ["Azul Medio", "Negro", "Azul Oscuro"] },
    ],
    variants: [
      { id: "var_02a", title: "30 / Azul Medio", sku: "JN-SLM-30-AM", prices: [{ amount: 34900, currency_code: "ARS" }], options: { Talle: "30", Color: "Azul Medio" }, inventory_quantity: 20, manage_inventory: true },
      { id: "var_02b", title: "32 / Azul Medio", sku: "JN-SLM-32-AM", prices: [{ amount: 34900, currency_code: "ARS" }], options: { Talle: "32", Color: "Azul Medio" }, inventory_quantity: 15, manage_inventory: true },
      { id: "var_02c", title: "34 / Negro", sku: "JN-SLM-34-N", prices: [{ amount: 34900, currency_code: "ARS" }], options: { Talle: "34", Color: "Negro" }, inventory_quantity: 22, manage_inventory: true },
    ],
    collection: collections[1],
    categories: [categories[1]],
    tags: ["denim", "slim", "premium"],
    status: "published",
    created_at: "2024-02-10T10:00:00Z",
    updated_at: "2024-06-01T10:00:00Z",
  },
  {
    id: "prod_03",
    title: "Zapatillas Urban Runner",
    handle: "zapatillas-urban-runner",
    subtitle: "Suela de goma EVA ultra-liviana",
    description: "Zapatillas urbanas con upper en mesh transpirable y suela de goma EVA que absorbe impactos. Diseño minimalista que va del gym a la calle. Plantilla memory foam extraíble.",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop",
    images: [
      { id: "img_03a", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop", alt: "Zapatillas rojas lateral" },
      { id: "img_03b", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop", alt: "Zapatillas detalle" },
    ],
    options: [
      { id: "opt_size", title: "Talle", values: ["38", "39", "40", "41", "42", "43", "44"] },
      { id: "opt_color", title: "Color", values: ["Rojo", "Negro", "Blanco"] },
    ],
    variants: [
      { id: "var_03a", title: "40 / Rojo", sku: "ZAP-UR-40-R", prices: [{ amount: 52900, currency_code: "ARS" }], options: { Talle: "40", Color: "Rojo" }, inventory_quantity: 10, manage_inventory: true },
      { id: "var_03b", title: "42 / Negro", sku: "ZAP-UR-42-N", prices: [{ amount: 52900, currency_code: "ARS" }], options: { Talle: "42", Color: "Negro" }, inventory_quantity: 8, manage_inventory: true },
      { id: "var_03c", title: "43 / Blanco", sku: "ZAP-UR-43-B", prices: [{ amount: 52900, currency_code: "ARS" }], options: { Talle: "43", Color: "Blanco" }, inventory_quantity: 14, manage_inventory: true },
    ],
    collection: collections[0],
    categories: [categories[3]],
    tags: ["zapatillas", "urbano", "running"],
    status: "published",
    created_at: "2024-03-05T10:00:00Z",
    updated_at: "2024-06-01T10:00:00Z",
  },
  {
    id: "prod_04",
    title: "Mochila Canvas Minimal",
    handle: "mochila-canvas-minimal",
    subtitle: "Canvas encerado resistente al agua",
    description: "Mochila en canvas encerado con herrajes de latón envejecido. Compartimento principal amplio con bolsillo para notebook de hasta 15\". Tirantes acolchados ajustables y espalda transpirable.",
    thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    images: [
      { id: "img_04a", url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop", alt: "Mochila frontal" },
      { id: "img_04b", url: "https://images.unsplash.com/photo-1581605405669-fcdf81165b36?w=800&h=1000&fit=crop", alt: "Mochila detalle" },
    ],
    options: [
      { id: "opt_color", title: "Color", values: ["Verde Militar", "Marrón", "Negro"] },
    ],
    variants: [
      { id: "var_04a", title: "Verde Militar", sku: "MOCH-CV-VM", prices: [{ amount: 28900, currency_code: "ARS" }], options: { Color: "Verde Militar" }, inventory_quantity: 30, manage_inventory: true },
      { id: "var_04b", title: "Marrón", sku: "MOCH-CV-M", prices: [{ amount: 28900, currency_code: "ARS" }], options: { Color: "Marrón" }, inventory_quantity: 25, manage_inventory: true },
      { id: "var_04c", title: "Negro", sku: "MOCH-CV-N", prices: [{ amount: 28900, currency_code: "ARS" }], options: { Color: "Negro" }, inventory_quantity: 20, manage_inventory: true },
    ],
    collection: collections[2],
    categories: [categories[2]],
    tags: ["mochila", "canvas", "notebook"],
    status: "published",
    created_at: "2024-04-20T10:00:00Z",
    updated_at: "2024-06-01T10:00:00Z",
  },
  {
    id: "prod_05",
    title: "Campera Bomber Tech",
    handle: "campera-bomber-tech",
    subtitle: "Tela técnica impermeable",
    description: "Campera bomber en tela técnica con membrana impermeable y costuras termoselladas. Puños y cintura en rib elástico. Bolsillos laterales con cierre oculto. Interior forrado en mesh.",
    thumbnail: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=750&fit=crop",
    images: [
      { id: "img_05a", url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop", alt: "Campera frontal" },
    ],
    options: [
      { id: "opt_size", title: "Talle", values: ["S", "M", "L", "XL"] },
      { id: "opt_color", title: "Color", values: ["Negro", "Verde Oliva"] },
    ],
    variants: [
      { id: "var_05a", title: "M / Negro", sku: "CAMP-BM-M-N", prices: [{ amount: 67900, currency_code: "ARS" }], options: { Talle: "M", Color: "Negro" }, inventory_quantity: 10, manage_inventory: true },
      { id: "var_05b", title: "L / Negro", sku: "CAMP-BM-L-N", prices: [{ amount: 67900, currency_code: "ARS" }], options: { Talle: "L", Color: "Negro" }, inventory_quantity: 8, manage_inventory: true },
      { id: "var_05c", title: "L / Verde Oliva", sku: "CAMP-BM-L-VO", prices: [{ amount: 67900, currency_code: "ARS" }], options: { Talle: "L", Color: "Verde Oliva" }, inventory_quantity: 5, manage_inventory: true },
    ],
    collection: collections[0],
    categories: [categories[0]],
    tags: ["campera", "bomber", "impermeable"],
    status: "published",
    created_at: "2024-05-10T10:00:00Z",
    updated_at: "2024-06-01T10:00:00Z",
  },
  {
    id: "prod_06",
    title: "Gorra Snapback Logo",
    handle: "gorra-snapback-logo",
    subtitle: "Bordado 3D premium",
    description: "Gorra snapback con visera plana y logo bordado en 3D. Panel frontal estructurado y malla trasera transpirable. Cierre snapback ajustable. Talle único.",
    thumbnail: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop",
    images: [
      { id: "img_06a", url: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=800&h=1000&fit=crop", alt: "Gorra frontal" },
    ],
    options: [
      { id: "opt_color", title: "Color", values: ["Negro", "Blanco", "Azul Marino"] },
    ],
    variants: [
      { id: "var_06a", title: "Negro", sku: "GOR-SN-N", prices: [{ amount: 12900, currency_code: "ARS" }], options: { Color: "Negro" }, inventory_quantity: 50, manage_inventory: true },
      { id: "var_06b", title: "Blanco", sku: "GOR-SN-B", prices: [{ amount: 12900, currency_code: "ARS" }], options: { Color: "Blanco" }, inventory_quantity: 40, manage_inventory: true },
    ],
    collection: collections[2],
    categories: [categories[2]],
    tags: ["gorra", "snapback", "accesorio"],
    status: "published",
    created_at: "2024-05-15T10:00:00Z",
    updated_at: "2024-06-01T10:00:00Z",
  },
]

export const getProductByHandle = (handle: string): Product | undefined => {
  return products.find((p) => p.handle === handle)
}

export const getProductsByCategory = (categoryHandle: string): Product[] => {
  return products.filter((p) =>
    p.categories?.some((c) => c.handle === categoryHandle)
  )
}

export const getProductsByCollection = (collectionHandle: string): Product[] => {
  return products.filter((p) => p.collection?.handle === collectionHandle)
}

export const formatPrice = (amount: number, currencyCode: string = "ARS"): string => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
  }).format(amount / 100)
}
