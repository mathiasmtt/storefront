import { products, categories, collections, getProductsByCategory, getProductsByCollection } from "@/data/mock-products"
import { ProductCard } from "@/components/products/product-card"
import Link from "next/link"

interface ProductsPageProps {
  searchParams: Promise<{ cat?: string; col?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const { cat, col } = params

  let filteredProducts = products
  let pageTitle = "Todos los productos"

  if (cat) {
    filteredProducts = getProductsByCategory(cat)
    const category = categories.find((c) => c.handle === cat)
    pageTitle = category?.name || "Categoría"
  } else if (col) {
    filteredProducts = getProductsByCollection(col)
    const collection = collections.find((c) => c.handle === col)
    pageTitle = collection?.title || "Colección"
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{pageTitle}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        <Link
          href="/productos"
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            !cat && !col
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Todos
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/productos?cat=${category.handle}`}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              cat === category.handle
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No hay productos en esta categoría.</p>
          <Link
            href="/productos"
            className="mt-4 inline-block text-sm font-medium text-gray-900 underline"
          >
            Ver todos los productos
          </Link>
        </div>
      )}
    </div>
  )
}
