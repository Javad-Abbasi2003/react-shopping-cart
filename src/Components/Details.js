import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { productsContext } from "../context/ProductsContext";

const Details = () => {
  const id = useParams().id;
  const products = useContext(productsContext);
  const { image, title, description, category, price } = products[id - 1];

  return (
    <div>
      <img src={image} alt="product" style={{ width: "200px"}} />
      <div>
        <div>
          <Link to="/products">Back to shop</Link>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Category: {category}</p>
        </div>
        <div>
          <p>{price} $</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
