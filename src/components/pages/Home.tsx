import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const Home = () => {
  const products = useSelector((state: string)=> state.cart)
  console.log(products)
  return (
    <div>
        <h1 className="text-red-400">Welcome to the Shopping Cart</h1>
        <div className='grid grid-cols-3 gap-4'>
          {
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
            <div className='grid grid-cols-1'>
              <h1>Add to Cart</h1>
            </div>
        </div>
    </div>
  )
}

export default Home