import { Suspense } from "react"
import ProductList from "@/components/product-list"
import ProductsLoading from "@/components/products-loading"
import { SearchFilters } from "@/components/search-filters"

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our collection of high-quality products designed to enhance your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Filters */}
            <aside className="lg:w-[240px]">
              <SearchFilters />
            </aside>

            {/* Products */}
            <div>
              <Suspense fallback={<ProductsLoading />}>
                <ProductList />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

