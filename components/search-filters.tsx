"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "")
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("search") || "")
  const [sort, setSort] = useState<string>(searchParams.get("sort") || "default")

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchCategories()
  }, [])

  // Update URL with filters
  const updateFilters = () => {
    const params = new URLSearchParams()

    if (selectedCategory) {
      params.set("category", selectedCategory)
    }

    if (searchQuery) {
      params.set("search", searchQuery)
    }

    if (sort !== "default") {
      params.set("sort", sort)
    }

    router.push(`/products?${params.toString()}`)
  }

  // Handle search input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters()
  }

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("")
    } else {
      setSelectedCategory(category)
    }
    setTimeout(updateFilters, 0)
  }

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSort(value)
    setTimeout(updateFilters, 0)
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("")
    setSearchQuery("")
    setSort("default")
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Search & Filter</h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Search
          </Button>
        </form>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Sort By</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                {sort === "price-asc"
                  ? "Price: Low to High"
                  : sort === "price-desc"
                    ? "Price: High to Low"
                    : sort === "name-asc"
                      ? "Name: A to Z"
                      : sort === "name-desc"
                        ? "Name: Z to A"
                        : "Default"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sort} onValueChange={handleSortChange}>
                <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name-asc">Name: A to Z</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name-desc">Name: Z to A</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Accordion type="single" collapsible defaultValue="categories">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Button
                    variant="ghost"
                    className="justify-start h-auto p-2 font-normal w-full"
                    onClick={() => handleCategoryChange(category)}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-4 w-4 rounded-sm border flex items-center justify-center ${selectedCategory === category ? "bg-primary border-primary" : "border-input"}`}
                      >
                        {selectedCategory === category && <Check className="h-3 w-3 text-primary-foreground" />}
                      </div>
                      <span className="capitalize">{category}</span>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {(selectedCategory || searchQuery || sort !== "default") && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Clear Filters
        </Button>
      )}
    </div>
  )
}

