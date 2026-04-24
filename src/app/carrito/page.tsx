"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/data/mock-products"

export default function CartPage() {
  const { items, subtotal, itemCount, updateQuantity, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8">Agregá productos para comenzar tu compra.</p>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Ver productos
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  const taxRate = 0.21
  const taxTotal = Math.round(subtotal * taxRate)
  const shippingTotal = subtotal >= 3000000 ? 0 : 599900
  const total = subtotal + taxTotal + shippingTotal

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Carrito</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Carrito ({itemCount} {itemCount === 1 ? "producto" : "productos"})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white"
            >
              <div className="relative w-24 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.variant_title}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="inline-flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-xs font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="font-semibold text-sm text-gray-900">
                    {formatPrice(item.unit_price * item.quantity)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors mt-2"
          >
            Vaciar carrito
          </button>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Resumen</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>IVA (21%)</span>
              <span>{formatPrice(taxTotal)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Envío</span>
              <span>{shippingTotal === 0 ? "Gratis" : formatPrice(shippingTotal)}</span>
            </div>
            {shippingTotal > 0 && (
              <p className="text-xs text-green-600">
                Envío gratis a partir de {formatPrice(3000000)}
              </p>
            )}
            <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full mt-6 py-4 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Ir al checkout
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/productos"
            className="block text-center mt-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  )
}
