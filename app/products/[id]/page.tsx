// import Image from "next/image"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import { Star, ArrowLeft, ShoppingCart, Heart } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// import ProductCard from "@/components/product-card"

// interface ProductPageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const product = await getProductById(Number.parseInt(params.id))

//   if (!product) {
//     notFound()
//   }

//   const relatedProducts = await getRelatedProducts(product.category)

//   return (
//     <main className="flex flex-col min-h-screen">
//       {/* Product Detail Section */}
//       <section className="w-full py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col gap-2 mb-8">
//             <Link href="/products" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>
//           </div>
          
//           <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
//             {/* Product Images */}
//             <div className="flex flex-col gap-4">
//               <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.title}
//                   fill
//                   className="object-contain p-4"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   priority
//                 />
//               </div>
//             </div>  100vw, 50vw"
//                   priority
//                 />
//               </div>
//             </div>
            
//             {/* Product Info */}
//             <div className="flex flex-col gap-4">
//               <div className="space-y-2">
//                 <Badge className="mb-2">{product.category}</Badge>
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{product.title}</h1>
//                 <div className="flex items-center gap-4">
//                   <div className="flex items-center gap-0.5">
//                     <Star className="w-5 h-5 fill-primary" />
//                     <Star className="w-5 h-5 fill-primary" />
//                     <Star className="w-5 h-5 fill-primary" />
//                     <Star className="w-5 h-5 fill-primary" />
//                     <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
//                     <span className="ml-2 text-sm text-muted-foreground">4.0 (24 reviews)</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
              
//               <div className="prose prose-sm">
//                 <p>{product.description}</p>
//               </div>
              
//               <div className="grid gap-4 pt-4">
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button size="lg" className="group">
//                     <ShoppingCart className="mr-2 h-5 w-5" />
//                     Add to Cart
//                   </Button>
//                   <Button size="lg" variant="outline">
//                     <Heart className="mr-2 h-5 w-5" />
//                     Add to Wishlist
//                   </Button>
//                 </div>
//               </div>
              
//               <div className="grid gap-4 pt-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-muted-foreground">Availability</span>
//                     <span>In Stock</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-muted-foreground">SKU</span>
//                     <span>PRD-{product.id}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//   </section>
//   ;<section className="w-full py-12 md:py-24 bg-muted">
//     <div className="container px-4 md:px-6">
//       <div className="flex flex-col items-center justify-center space-y-4 text-center">
//         <div className="space-y-2">
//           <h2 className="text-3xl font-bold tracking-tighter">Related Products</h2>
//           <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//             You might also like these products
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//         {relatedProducts.slice(0, 4).map((relatedProduct) => (
//           <ProductCard key={relatedProduct.id} product={relatedProduct} />
//         ))}
//       </div>
//     </div>
//   </section>
//   </main>
//   )
// }

