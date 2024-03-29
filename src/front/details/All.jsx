import React from 'react';
import Description from './description.jsx';
import Details from './details.jsx';
import RelatedItem from './relateditem.jsx';
import Navbar from '../../Ccomponents/Navbar.jsx';
import Footer from '../../Ccomponents/Fotter.jsx';
import MinHeader from '../../Ccomponents/MinHeader.jsx';

function Productdetails() {
  return (
    <div>
      <MinHeader />
      <Navbar />
      <div className="flex justify-center mt-10 ">
        <Details style={{ marginLeft: '30px' ,marginRight: '80px'}} />
        <Description className="mt-20" />
      </div>
      <div className="flex">
        <RelatedItem />
      </div>
      <Footer />
    </div>
  );
}

export default Productdetails;