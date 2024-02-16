import React from 'react';
import Description from "./description.jsx";
import Details from "./details.jsx";
import RelatedItem from "./relateditem.jsx";

function Productdetails() {
  return (
    <div>
       
      <div className="flex w-full h-[800px] justify-center items-center"  style={{justifyContent:'space-between'}}>
      <Details/>
      <Description/>
       
      </div>
      <div className=" flex justify-start mx-50 mt-20">
        <RelatedItem/>
      </div>
    </div>
  )
}

export default Productdetails