import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item));
  };

  return (
    <div>
      <div> 
        <img src={item.image} alt={item.title} />
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <p>{item.price}</p>
          <MdDelete onClick={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
