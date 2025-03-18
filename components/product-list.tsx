import { getProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default async function ProductList() {
  const products = await getProducts();
  console.log("Fetched Products:", products); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

