import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import Product from "./Product";

const Detail = () => {
  const { id } = useParams();
  const req = useProductContext();
  const res = req.data;
  const product = res[id - 1];
  console.log(product);
  return (
    <>
      <div>
        <img src={product.img} />
      </div>
    </>
  );
};

export default Detail;
