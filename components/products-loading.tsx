export default function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="rounded-lg border bg-background">
          <div className="aspect-square bg-muted animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-16 bg-muted rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

