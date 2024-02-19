import React, { useEffect, useState } from 'react';
import Description from './description.jsx';
import Details from './details.jsx';
import RelatedItem from './relateditem.jsx';
import Navbar from '../../Ccomponents/Navbar.jsx';
import Footer from '../../Ccomponents/Fotter.jsx';
import MinHeader from '../../Ccomponents/MinHeader.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Productdetails() {
  const {idprod} = useParams()
  const [info , setinfo ] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:3000/saler/getproduct/${idprod}`)
    .then((res) => {
      setinfo(res.data)
    })
    .catch(()=>{
      console.log(err,'err');
    })
  },[]);
  console.log(info,'infoo in all');

  return (
    <div>
      <MinHeader />
      <Navbar />
      <div className="flex justify-center mt-10 ">
        <Details style={{ marginLeft: '30px' ,marginRight: '80px'}} data={info}/>
        <Description className="mt-20" data={info}/>
      </div>
      <div className="flex">
        {/* <RelatedItem /> */}
      </div>
      
    </div>
  );
}

export default Productdetails;