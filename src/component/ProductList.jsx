import { useProductContext } from "../context/productContext";
import Product from "./Product";

const ProductList = () => {
  const res = useProductContext();
  return (
    <div className="flex items-center flex-wrap justify-center gap-2 md:gap-[2rem] rounded my-8 px-4 max-w-[1200px] mx-auto">
      {res.data &&
        res.data.map((curr, index) => {
          return <Product {...curr} key={index} />;
        })}
    </div>
  );
};

export default ProductList;
