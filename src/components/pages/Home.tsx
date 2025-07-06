import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import AddProduct from "./AddProduct"


const Home = () => {
  const products = useSelector((state: string) => state.cart)


  return (
    <div className='py-8 px-32'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <div className='grid lg:grid-cols-2 gap-4 gap-y-8'>
            {
              products.length ? products.map((product: any, index: any) => (
                <ProductCard key={index} product={product} />
              )) : <p>No product Found!</p>
            }
          </div>
        </div>


        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  )
}

export default Home

