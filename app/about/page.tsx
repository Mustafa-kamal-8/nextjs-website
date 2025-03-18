import Image from "next/image"
import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  // Company timeline data
  const timelineEvents = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Our journey began with a simple idea: to create high-quality products that enhance people's lives.",
    },
    {
      year: "2013",
      title: "First Product Launch",
      description:
        "We launched our first product line, which quickly gained popularity for its innovative design and quality.",
    },
    {
      year: "2015",
      title: "International Expansion",
      description: "We expanded our operations to international markets, bringing our products to customers worldwide.",
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "We launched our sustainability initiative, committing to eco-friendly practices and materials.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "We embraced digital transformation, enhancing our online presence and customer experience.",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description:
        "We received the prestigious Innovation Award for our commitment to product excellence and customer satisfaction.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Company</h1>
              <p className="text-muted-foreground md:text-xl">
                We're dedicated to providing exceptional products and services that enhance your everyday life.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our Story" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2010, our company began with a simple mission: to create products that make a difference in
                people's lives. What started as a small team with big dreams has grown into a global brand known for
                quality, innovation, and customer satisfaction.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've expanded our product line and reached customers around the world, but our core
                values remain the same. We believe in creating products that are not only functional and beautiful but
                also sustainable and accessible to all.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to push the boundaries of what's possible, always with our customers at the heart of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These core principles guide everything we do
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Quality", description: "We're committed to excellence in everything we create." },
              { title: "Innovation", description: "We constantly seek new ways to improve and evolve." },
              { title: "Sustainability", description: "We strive to minimize our environmental impact." },
              { title: "Integrity", description: "We operate with honesty and transparency in all we do." },
              { title: "Customer Focus", description: "We put our customers at the center of every decision." },
              { title: "Community", description: "We believe in giving back and supporting our communities." },
            ].map((value, i) => (
              <div
                key={i}
                className="flex flex-col p-6 bg-background rounded-lg shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A timeline of our achievements and milestones
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Timeline events={timelineEvents} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals behind our success
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=160&width=160`}
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Team Member {i}</h3>
                <p className="text-muted-foreground">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

