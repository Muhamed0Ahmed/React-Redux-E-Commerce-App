// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeFromCartAction, subQuantity } from "../../store/Cart/CartActions";
import "./CartShopping.scss";
function CartShopping() {
  // const [totalPriceAll, setTotalPriceAll] = useState(0);
  const productCart = useSelector((state) => state.cart.productCart);
  const totalpriceforAll = useSelector(state => state.cart.totalPrice)
  const dispatch = useDispatch();

  const addQuantityToItem = (item) => {
    dispatch(addQuantity(item["_id"]));
  };
  const subQuantityToItem = (item) => {
    dispatch(subQuantity(item["_id"]));
  };
  

  return (
    <div className="cart-page">
      <div className="container">
        <div className="header-container">
        <div className="header-cart">
          <h2>cart Shopping</h2>
          <h4> total price is {totalpriceforAll} $</h4>
        </div>
        </div>
        <div className="carts">
          {(productCart.length === 0)? <p className="emptyCart"> you dont have any Item <a href="/">return the home page to select items</a></p>: null}
          {productCart.map((item, index) => (
            <div className="item-cart" key={index}>
              <div className="img-item">
                <img src={item.photo} alt={item.name} width="250px" />
              </div>
              <div className="inform-item">
                <h4>{item.title}</h4>
                <p> {item.describtion}</p>
                <div className="btns-quantity">
                  <button onClick={() => addQuantityToItem(item)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => subQuantityToItem(item)}>-</button>
                  <button onClick={() => dispatch(removeFromCartAction(item["_id"]))}>Remove Item</button>

                  <div className="price-item">
                    Total Price : {item.quantity} * {item.price} ={" "}
                    {item.price * item.quantity} $
                  </div>
                </div>
              </div>
              
            </div>
          ))}
          <div className="cart-total-price">
            <div className="total">total price is <span> {totalpriceforAll} $</span></div>
            <div>
              <button  >Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartShopping;
