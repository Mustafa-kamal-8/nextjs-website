import type { Product } from "@/lib/types"

// Get all products with optional filtering
export async function getProducts(category?: string, search?: string, sort?: string): Promise<Product[]> {
  let url = "https://fakestoreapi.com/products"

  // Apply category filter if provided
  if (category) {
    url = `https://fakestoreapi.com/products/category/${category}`
  }

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }) // Cache for 1 hour
    let products: Product[] = await response.json()

    // Apply search filter if provided
    if (search) {
      const searchLower = search.toLowerCase()
      products = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
      )
    }

    // Apply sorting if provided
    if (sort) {
      switch (sort) {
        case "price-asc":
          products.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          products.sort((a, b) => b.price - a.price)
          break
        case "name-asc":
          products.sort((a, b) => a.title.localeCompare(b.title))
          break
        case "name-desc":
          products.sort((a, b) => b.title.localeCompare(a.title))
          break
        default:
          break
      }
    }

    return products
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}





