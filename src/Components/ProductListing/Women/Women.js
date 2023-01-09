import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import heart from '../Men/heart.png';
import './Productcomponent.css';

const Women = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [data, setData] = useState([]);
  const updatedList = products.filter((value) => value.category === "women's clothing");
  const renderList = updatedList.map((product) => {
    const { id, title, image, price, category, details } = product;
    // console.log(details.image,'=========')
    // console.log(product.details[0].image,"name")
    return (
      <>
        <div className="col-md-4 col-xs-6" key={id}>
          <div className="product" key={product.id}>
              <Link to={`/product/${product.id}`} target="_blank">
                  <div className="product__card">
                    <div className="product__image">
                      <img src={details[0].image} alt={title} /> 
                    </div>
                      <h4 className="product__title">{title}</h4>
                      <div className="product__price">${details[0].price}</div>
                      <Link to="#"><img src={heart} alt="heart" /></Link>
                </div>
              </Link>
          </div>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default Women;
