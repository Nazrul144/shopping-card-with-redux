import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const Home = () => {
  const products = useSelector((state: string) => state.cart)
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
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Add New Product!
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* name */}
              <div>
                <label className="text-sm font-medium block text-gray-600">
                  Product Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Product 1"
                  className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* category */}
              <div>
                <label className="text-sm font-medium block text-gray-600">
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  name="category"
                  className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">Choose a category</option>
                  <option value="fashion">Fashion</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="bags">Bags</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>

              {/* product image url */}
              <div>
                <label className="text-sm font-medium block text-gray-600">
                  Image URL:
                </label>
                <input
                  type="text"
                  name="image"
                  {...register("image", { required: true })}
                  id="image"
                  placeholder="https://"
                  className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* price and date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block text-gray-600">
                    Price:
                  </label>
                  <input
                    type="number"
                    name="price"
                    {...register("price", { required: true })}
                    id="price"
                    placeholder="100"
                    className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block text-gray-600">
                    Upload Date:
                  </label>
                  <input
                    type="date"
                    {...register("date", { required: true })}
                    name="date"
                    id="date"
                    className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full bg-indigo-500 text-white">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home