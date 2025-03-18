export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

