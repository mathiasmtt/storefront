"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import { LineItem, Product, ProductVariant } from "@/types/medusa"

interface CartContextType {
  items: LineItem[]
  itemCount: number
  subtotal: number
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider")
  }
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<LineItem[]>([])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0)

  const addItem = useCallback((product: Product, variant: ProductVariant, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.variant_id === variant.id)
      if (existing) {
        return prev.map((item) =>
          item.variant_id === variant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      const newItem: LineItem = {
        id: `li_${Date.now()}`,
        variant_id: variant.id,
        product_id: product.id,
        title: product.title,
        description: product.subtitle || "",
        thumbnail: product.thumbnail,
        quantity,
        unit_price: variant.prices[0]?.amount || 0,
        variant_title: variant.title,
      }
      return [...prev, newItem]
    })
  }, [])

  const removeItem = useCallback((itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== itemId))
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
