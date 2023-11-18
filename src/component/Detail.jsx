import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import Product from "./Product";

const Detail = () => {
  const { id } = useParams();
  const res = useProductContext();
  console.log(res && res);
  return <>;;;</>;
};

export default Detail;
