import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { products, categories, formatPrice } from "@/data/mock-products"
import { ProductCard } from "@/components/products/product-card"

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-950">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
          alt="Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
              Colección Verano 2025
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight">
              Estilo que <br />
              <span className="text-gray-400">habla por vos</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-md">
              Materiales premium, diseño consciente. Descubrí la nueva colección 
              pensada para quienes eligen calidad sobre cantidad.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver productos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/productos?col=nuevos"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Nuevos ingresos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/productos?cat=${cat.handle}`}
                className="group relative h-48 rounded-xl overflow-hidden bg-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
                  <p className="text-gray-300 text-xs mt-1">{cat.description}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Destacados</h2>
            <Link
              href="/productos"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 inline-flex items-center gap-1 transition-colors"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Powered by MedusaJS
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Este storefront es un prototipo con datos mock. Cuando conectes un backend 
            MedusaJS con PostgreSQL, estos datos vendrán de la API real.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">Next.js 15</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">TailwindCSS</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">TypeScript</span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-sm">MedusaJS v2</span>
          </div>
        </div>
      </section>
    </>
  )
}
