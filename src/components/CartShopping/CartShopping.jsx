import { useDispatch, useSelector } from "react-redux";
import {
  // addQuantity,
  addToCartAction,
  subQuantity,
  removeFromCartAction,
} from "../../store/Cart/CartActions";
import "./CartShopping.scss";
const CartShopping = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemIds = useSelector((state) => state.cart.itemsIds);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleAdd = (item) => dispatch(addToCartAction(item));
  const handleSub = (id) => dispatch(subQuantity(id));
  const handleRemove = (id) => dispatch(removeFromCartAction(id));

  return (
    <div className="cart-page">
      <div className="container">
        <div className="header-container">
          <div className="header-cart">
            <h2>cart Shopping</h2>
            <h4> total price is {totalPrice} $</h4>{" "}
          </div>
        </div>

        <div className="cart-container">
          {itemIds.length === 0 ? (
            <p className="cart-empty-message">Your cart is empty</p>
          ) : (
            itemIds.map((id) => {
              const item = cartItems[id];
              return (
                <div className="cart-item" key={item.title+id}>
                  <img src={item.image} alt={item.title} width={150} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleSub(id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAdd(item)}>+</button>
                      <button onClick={() => handleRemove(id)}>Remove</button>
                    </div>
                    
                    <div className="item-total">Total: ${item.price * item.quantity}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cart-total-price">
             <div className="total">
               total price is <span> {(totalPrice / 100).toFixed(2)} $</span>
             </div>
             <div>
               <button>Buy Now</button>
               <button className="checkout-btn">Checkout Now</button>
             </div>
           </div>
      </div>
    </div>
  );
};

export default CartShopping;

// import { useDispatch, useSelector } from "react-redux";
// import {
//   addQuantity,
//   removeFromCartAction,
//   subQuantity,
// } from "../../store/Cart/CartActions";
// import "./CartShopping.scss";
// function CartShopping() {
//   const dispatch = useDispatch();

//   const productCart = useSelector((state) => state.cart.items);
//   const totalpriceforAll = useSelector((state) => state.cart.totalPrice);

//   const addQuantityToItem = (itemId) => {
//     dispatch(addQuantity(itemId));
//   };
//   const subQuantityToItem = (itemId) => {
//     dispatch(subQuantity(itemId));
//   };
//   const handleRemoveItem = (itemId) => dispatch(removeFromCartAction(itemId));
//   return (
//     <div className="cart-page">
//       <div className="container">
//         <div className="header-container">
//           <div className="header-cart">
//             <h2>cart Shopping</h2>
//             <h4> total price is {totalpriceforAll} $</h4>
//           </div>
//         </div>
//         <div className="carts">
//           {productCart.length === 0 ? (
//             <p className="emptyCart">
//               {" "}
//               you dont have any Item{" "}
//               <a href="/">return the home page to select items</a>
//             </p>
//           ) : null}

//           {productCart.map((item, index) => (
//             <div className="item-cart" key={index}>
//               <div className="img-item">
//                 <img
//                   src={item.image}
//                   width="250"
//                   height="250"
//                   alt={item.name}
//                 />
//               </div>
//               <div className="inform-item">
//                 <h4>{item.title}</h4>
//                 <p> {item.describtion}</p>
//                 <div className="btns-quantity">
//                   <button onClick={() => addQuantityToItem(item._id)}>+</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => subQuantityToItem(item._id)}>-</button>
//                   <button onClick={() => handleRemoveItem(item._id)}>
//                     Remove Item
//                   </button>

//                   <div className="price-item">
//                     Total Price : {item.quantity} * {item.price} ={" "}
//                     {item.price * item.quantity} $
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total-price">
//             <div className="total">
//               total price is <span> {totalpriceforAll} $</span>
//             </div>
//             <div>
//               <button>Buy Now</button>
//               <button className="checkout-btn">Checkout Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartShopping;
