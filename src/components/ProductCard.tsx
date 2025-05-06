import { Star } from 'lucide-react'

interface ProductCardProps {
  name: string
  description: string
  price: number
  oldPrice?: number
  rating: number
  image: string
  isPopular?: boolean
}

export default function ProductCard({ name, description, price, oldPrice, rating, image, isPopular }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPopular && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Populaire
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{price}€</span>
            {oldPrice && (
              <span className="text-gray-400 line-through">{oldPrice}€</span>
            )}
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}