import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, addToCartAction } from "../../store/Cart/CartActions";

function Item(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isLogined = useSelector((state) => state.auth.isLogIn);

  const handleAddToCart = () => {
    if (!isLogined) return alert("Please log in to add items to cart");

    if (cartItems[item.id]) {
      //Item exists - increase quantity
      dispatch(addToCartAction(item));
    } else {
      // New Item - add to  cart
      dispatch(
        addToCartAction({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: 1,
        })
      );
    }
  };
  const { item } = props;
  return (
    <div className="item">
      <img src={item.image} width={230} height={250} alt={item.name} />
      <h4>{item.title}</h4>
      <span className="price">Price : {item.price} $</span>
      <div className="btns-cart">
        <button className="add-cart-btn" onClick={() => handleAddToCart(item)}>
          Add To Cart
        </button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Item;
