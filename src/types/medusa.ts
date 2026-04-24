// Tipos que reflejan los modelos de MedusaJS v2
// Cuando conectes al backend real, reemplazá estos por @medusajs/types

export interface MoneyAmount {
  amount: number
  currency_code: string
}

export interface ProductImage {
  id: string
  url: string
  alt?: string
}

export interface ProductOption {
  id: string
  title: string
  values: string[]
}

export interface ProductVariant {
  id: string
  title: string
  sku?: string
  prices: MoneyAmount[]
  options: Record<string, string>
  inventory_quantity: number
  manage_inventory: boolean
}

export interface ProductCollection {
  id: string
  title: string
  handle: string
  metadata?: Record<string, unknown>
}

export interface ProductCategory {
  id: string
  name: string
  handle: string
  description?: string
  parent_category_id?: string | null
}

export interface Product {
  id: string
  title: string
  handle: string
  subtitle?: string
  description: string
  thumbnail: string
  images: ProductImage[]
  options: ProductOption[]
  variants: ProductVariant[]
  collection?: ProductCollection
  categories?: ProductCategory[]
  tags?: string[]
  status: "draft" | "published" | "proposed" | "rejected"
  created_at: string
  updated_at: string
}

export interface Region {
  id: string
  name: string
  currency_code: string
  tax_rate: number
}

export interface LineItem {
  id: string
  variant_id: string
  product_id: string
  title: string
  description: string
  thumbnail: string
  quantity: number
  unit_price: number
  variant_title: string
}

export interface Cart {
  id: string
  items: LineItem[]
  region: Region
  subtotal: number
  tax_total: number
  shipping_total: number
  total: number
}

export interface Address {
  first_name: string
  last_name: string
  address_1: string
  address_2?: string
  city: string
  province?: string
  postal_code: string
  country_code: string
  phone?: string
}

export interface ShippingOption {
  id: string
  name: string
  amount: number
  estimated_days: string
}
