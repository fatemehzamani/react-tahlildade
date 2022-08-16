import React from "react";
import { useParams } from "react-router-dom";
import MobilesList from "./MobileList";
const SingleProduct = () => {
  const params = useParams();
  const filterResult = MobilesList.filter(
    (item) => item.id === parseInt(params.mobileID)
  );

  return (
    <div>
      <h2>id : {filterResult[0].id}</h2>
      <h2>name : {filterResult[0].name}</h2>
      <h2>price : {filterResult[0].price}</h2>
      <h2>brand : {filterResult[0].brand}</h2>
    </div>
  );
};

export default SingleProduct;
