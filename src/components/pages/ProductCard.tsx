import { Button } from "../ui/button";

const ProductCard = ({product}: any) => {
    const { id, title, price, description, category } = product;
    return (
        <div>
            <div className="card shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>$ {price}</p>
                    <div className="card-actions justify-end">
                        <Button className="w-full bg-indigo-500 text-white">Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard