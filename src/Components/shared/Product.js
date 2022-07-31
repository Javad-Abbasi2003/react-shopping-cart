import React from "react";

import { shorten } from "../helper/functions";

const Product = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="img" style={{ width: "100px" }} />
      <h3>{shorten(data.title)}</h3>
      <p>{data.price}</p>
      <div>
        <a href="/">Details</a>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
