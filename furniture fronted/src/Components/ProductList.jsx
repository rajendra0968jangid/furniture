import React, { useState } from "react";
import CardProductList from "./CardProductList";
function ProductList() {
  const[cardData,setCardData] = useState([{
    productImage: "images/product-3.png",
    productName: "hello",
    productPrice: "100",
  },{
    productImage: "images/product-1.png",
    productName: "Nordic Chair",
    productPrice: "$50.00",
  },{
    productImage: "images/product-2.png",
    productName: "Kruzo Aero Chair",
    productPrice: "$78.00",
  },{
    productImage: "images/product-3.png",
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
  },{
    productImage: "images/product-3.png",
    productName: "Nordic Chair",
    productPrice: "$50.00",
  },{
    productImage: "images/product-1.png",
    productName: "Nordic Chair",
    productPrice: "$50.00",
  },{
    productImage: "images/product-2.png",
    productName: "Kruzo Aero Chair",
    productPrice: "$78.00",
  },{
    productImage: "images/product-3.png",
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
  }])
  return (
    <>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {cardData.map((item,index)=>(
              <CardProductList  one={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
