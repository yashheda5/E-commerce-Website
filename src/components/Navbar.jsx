import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart}=useSelector((state)=>state);

  return (
    <div>
      <div className="flex flex-row items-center h-20 max-w-6xl  justify-between">
      <NavLink to="/">
      <div className="ml-[12rem]">
        <img src="./logo.png" className="h-14" alt="" />
        </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 -mr-[14rem] space-x-8">
        <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/Cart">
          <div className="relative">
          <FaShoppingCart className="text-2xl" /> {cart.length>0 &&<span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white "> {cart.length}</span>}
          </div>
        
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
