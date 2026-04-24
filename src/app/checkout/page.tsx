"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, Check } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/data/mock-products"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const [step, setStep] = useState<"form" | "success">("form")

  const taxTotal = Math.round(subtotal * 0.21)
  const shippingTotal = subtotal >= 3000000 ? 0 : 599900
  const total = subtotal + taxTotal + shippingTotal

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("success")
    clearCart()
  }

  if (items.length === 0 && step !== "success") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-gray-500 text-lg mb-4">No hay productos en tu carrito.</p>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold"
        >
          Ver productos
        </Link>
      </div>
    )
  }

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Pedido confirmado!</h1>
        <p className="text-gray-500 mb-2">
          Este es un prototipo — en producción con MedusaJS, acá se procesaría el pago
          con Stripe u otro proveedor.
        </p>
        <p className="text-sm text-gray-400 mb-8">Orden #MOCK-{Date.now().toString(36).toUpperCase()}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/carrito"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver al carrito
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Datos de contacto</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:col-span-2"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:col-span-2"
                />
              </div>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Dirección de envío</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Dirección"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Piso / Depto (opcional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Código postal"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Provincia"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:col-span-2"
                />
              </div>
            </div>

            {/* Payment mock */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pago</h2>
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Tarjeta de crédito/débito</span>
                </div>
                <p className="text-xs text-gray-400">
                  En producción, acá se integraría Stripe a través del módulo de pagos de MedusaJS.
                  Por ahora es un formulario simulado.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent sm:col-span-2"
                  />
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-gray-50 rounded-2xl p-6 h-fit sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Tu pedido</h2>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                    <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 truncate">{item.title}</p>
                    <p className="text-[10px] text-gray-500">{item.variant_title}</p>
                  </div>
                  <p className="text-xs font-semibold text-gray-900">
                    {formatPrice(item.unit_price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
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
              <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-gray-900 text-base">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-4 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Confirmar pedido
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
