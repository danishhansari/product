import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import Product from "./Product";
import { NavLink } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const req = useProductContext();
  const res = req.data;
  const product = res[id - 1];
  console.log(product);
  return (
    <>
      <div className="max-w-[900px] mx-auto mt-16">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
          {product.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between p-2">
          <img src={product.img} />
          <div className="text text-xl">
            <h1 className="font-bold mb-2">
              Model:<span className="font-normal">{product.title}</span>
            </h1>
            <h2 className="font-bold mb-2">
              Made By: <span className="font-normal">{product.company}</span>
            </h2>
            <p className="font-bold mb-2">
              Price: <span className="font-normal"> ${product.price}</span>
            </p>
            <p className="font-bold">Description</p>
            <p>{product.info}</p>
            <div className="flex gap-6 mt-4">
              <button className="p-2 border border-black rounded hover:bg-black hover:text-white transition-all duration-500">
                <NavLink to="/">Back to Products</NavLink>
              </button>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
