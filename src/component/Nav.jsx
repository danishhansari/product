import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <ul className="flex justify-between items-center bg-zinc-600 text-white px-4 md:px-[4rem] py-2 md:py-4 text-xl">
      <li>
        <NavLink to="/">Products</NavLink>
      </li>
      <li>
        <button className="border py-2 px-4 rounded bg-zinc-300 text-black hover:bg-zinc-400 hover:border-zinc-400 transition-all">
          <NavLink to="/cart">AddToCart</NavLink>
        </button>
      </li>
    </ul>
  );
};

export default Nav;
