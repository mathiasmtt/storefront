import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/medusa"
import { formatPrice } from "@/data/mock-products"

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const price = product.variants[0]?.prices[0]

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
