import { NavLink } from "react-router-dom";

const Product = ({ img, price, title ,id}) => {
  return (
    <NavLink to={`/detail/${id}`}>
    <div className="border group h-[300px]">
      <img src={img} className="w-36 md:w-56 transition-all mx-auto group-hover:w-52" />
      <div className="flex justify-between items-center p-4">
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>
    </NavLink>
  );
};

export default Product;
