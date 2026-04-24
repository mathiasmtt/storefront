"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Check, Truck, RotateCcw, Shield } from "lucide-react"
import { Product, ProductVariant } from "@/types/medusa"
import { formatPrice } from "@/data/mock-products"
import { useCart } from "@/context/cart-context"

interface ProductDetailProps {
  product: Product
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addItem } = useCart()
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {}
    product.options.forEach((opt) => {
      initial[opt.title] = opt.values[0]
    })
    return initial
  })
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  const selectedVariant: ProductVariant | undefined = product.variants.find((v) =>
    Object.entries(selectedOptions).every(
      ([key, value]) => v.options[key] === value
    )
  )

  const price = selectedVariant?.prices[0] || product.variants[0]?.prices[0]

  const handleAddToCart = () => {
    if (!selectedVariant) return
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Images */}
      <div className="space-y-4">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.images[activeImage]?.url || product.thumbnail}
            alt={product.images[activeImage]?.alt || product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(i)}
                className={`relative w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                  activeImage === i ? "border-gray-900" : "border-transparent"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt || ""}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-6">
        {product.collection && (
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            {product.collection.title}
          </p>
        )}

        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

        {product.subtitle && (
          <p className="text-gray-500">{product.subtitle}</p>
        )}

        {price && (
          <p className="text-2xl font-bold text-gray-900">
            {formatPrice(price.amount, price.currency_code)}
          </p>
        )}

        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {/* Options */}
        <div className="space-y-5 pt-2">
          {product.options.map((option) => (
            <div key={option.id}>
              <label className="text-sm font-semibold text-gray-900 mb-2 block">
                {option.title}: <span className="font-normal text-gray-500">{selectedOptions[option.title]}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {option.values.map((value) => (
                  <button
                    key={value}
                    onClick={() =>
                      setSelectedOptions((prev) => ({ ...prev, [option.title]: value }))
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      selectedOptions[option.title] === value
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quantity */}
        <div>
          <label className="text-sm font-semibold text-gray-900 mb-2 block">Cantidad</label>
          <div className="inline-flex items-center border border-gray-200 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-sm font-medium min-w-[40px] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={!selectedVariant}
          className={`w-full py-4 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
            added
              ? "bg-green-600 text-white"
              : selectedVariant
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" />
              Agregado al carrito
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              Agregar al carrito
            </>
          )}
        </button>

        {!selectedVariant && (
          <p className="text-sm text-red-500">
            Esta combinación no está disponible. Probá otra opción.
          </p>
        )}

        {/* Features */}
        <div className="border-t border-gray-100 pt-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Truck className="w-5 h-5 text-gray-400" />
            <span>Envío gratis a partir de $30.000</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <RotateCcw className="w-5 h-5 text-gray-400" />
            <span>Devolución gratuita en 30 días</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-gray-400" />
            <span>Pago seguro con MedusaJS</span>
          </div>
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
