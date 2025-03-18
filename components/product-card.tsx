import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`} className="relative block aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-4">
        <Badge className="mb-2">{product.category}</Badge>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{product.title}</h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
        <span className="font-bold">₹{product.price.toFixed(2)}</span>
          {/* <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button> */}
        </div>
      </div>
    </div>
  )
}

