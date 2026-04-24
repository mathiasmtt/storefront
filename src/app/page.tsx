import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products, categories } from "@/data/mock-products"
import { ProductCard } from "@/components/products/product-card"

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col gap-8">
          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
            Colección Verano 2025
          </p>
          <h1 className="text-6xl sm:text-8xl lg:text-[9rem] font-bold text-gray-900 leading-none tracking-tight">
            Estilo<br />
            <span className="text-gray-300">consciente.</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pt-4 border-t border-gray-100">
            <p className="text-base text-gray-500 max-w-sm leading-relaxed">
              Materiales premium, diseño atemporal. Piezas pensadas para durar más
              que una temporada.
            </p>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-4 transition-all"
            >
              Ver colección <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/productos?cat=${cat.handle}`}
                className="group flex flex-col justify-between px-6 py-8 hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs text-gray-400 tracking-widest uppercase mb-6">
                  {cat.description}
                </span>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-semibold text-gray-900">{cat.name}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Selección</h2>
            <Link
              href="/productos"
              className="text-sm text-gray-400 hover:text-gray-900 inline-flex items-center gap-1 transition-colors"
            >
              Ver todo <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-2xl font-bold text-gray-900 tracking-tight">
            Nuevos ingresos disponibles.
          </p>
          <Link
            href="/productos?col=nuevos"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-700 transition-colors"
          >
            Ver nuevos ingresos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
