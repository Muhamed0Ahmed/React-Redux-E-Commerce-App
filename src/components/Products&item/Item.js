import "./products.scss";
import { useDispatch, useSelector } from "react-redux";
import {  addQuantity, addToCartAction } from "../../store/Cart/CartActions";

function Item(props) {
  const productCart = useSelector((state) => state.cart.productCart);
  const isLogined = useSelector((state) => state.auth.isLogIn);
  
  const dispatch = useDispatch();

  const addToCart = (item) => {
    if (isLogined) {
      if (productCart.length === 0) {
        dispatch(addToCartAction(item));
        localStorage.setItem(
          "cart",
          JSON.stringify({
            _id: item["_id"],
            title: item.title,
            photo: item.photo,
            price: item.price,
            quantity: 1,
          })
        );
      } else {
        let newItem = productCart.some((product) => product["_id"] === item["_id"]);
        
        if(newItem)
          {
            dispatch(addQuantity(item["_id"]));
            
            //  localStorage.setItem("cart", JSON.stringify(productCart));

            
           
          }else{
            dispatch(addToCartAction(item));
            // let newCart = [...productCart,{
            //   id: item["_id"],
            //   title: item.title,
            //   photo: item.photo,
            //   price: item.price,
            //   quantity: 1,
            // }]
          // localStorage.setItem("cart", JSON.stringify(newCart));
          };
         
     
            
       
        localStorage.setItem("cart", JSON.stringify([...productCart, item]));
      }
    } else {
      alert("please log in");
    }
  };
  const { item } = props;
  return (
    <div className="item">
      <div
        style={{
          width: "230px",
          height: "250px",
          backgroundImage: `url(${item.photo})`,
        }}
      />
      <h4>{item.title}</h4>
      <span className="price">Price : {item.price} $</span>
      <div className="btns-cart">
        <button className="add-cart-btn" onClick={() => addToCart(item)}>
          Add To Cart
        </button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Item;
