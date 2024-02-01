import { useEffect, useState } from "react";
import Item from "./Item";
import SHOP_DATA from "../../Data/ShopData";
import "./products.scss"

function Group() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/getProducts", {
      method: "Get",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setProducts(SHOP_DATA));

    
  }, []);
  return (
    <div className="products-container">
      <div className="container">
        {products.map((product, index) => (
          <Item item={product} key={product.title + index} />
        ))}
      </div>
    </div>
  );
}

export default Group;
