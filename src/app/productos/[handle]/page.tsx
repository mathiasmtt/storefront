import { notFound } from "next/navigation"
import { products, getProductByHandle } from "@/data/mock-products"
import { ProductDetail } from "@/components/products/product-detail"
import Link from "next/link"

interface ProductPageProps {
  params: Promise<{ handle: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    handle: product.handle,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params
  const product = getProductByHandle(handle)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/productos" className="hover:text-gray-900 transition-colors">Productos</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </nav>

      <ProductDetail product={product} />
    </div>
  )
}
