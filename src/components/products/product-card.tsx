"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Check } from "lucide-react"
import { Product } from "@/types/medusa"
import { formatPrice } from "@/data/mock-products"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const defaultVariant = product.variants[0]
  const price = defaultVariant?.prices[0]

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!defaultVariant) return
    addItem(product, defaultVariant, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Link href={`/productos/${product.handle}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.collection && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-gray-700">
            {product.collection.title}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 ${
            added
              ? "bg-green-600 text-white rounded-lg"
              : "bg-white text-gray-900 rounded-lg hover:bg-gray-100"
          }`}
        >
          {added ? (
            <><Check className="w-3.5 h-3.5" /> Agregado</>
          ) : (
            <><ShoppingBag className="w-3.5 h-3.5" /> Agregar al carrito</>
          )}
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.title}
        </h3>
        {product.subtitle && (
          <p className="text-xs text-gray-500">{product.subtitle}</p>
        )}
        {price && (
          <p className="text-sm font-semibold text-gray-900">
            {formatPrice(price.amount, price.currency_code)}
          </p>
        )}
      </div>
    </Link>
  )
}
