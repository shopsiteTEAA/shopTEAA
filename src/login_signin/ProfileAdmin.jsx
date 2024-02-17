import React, { useState } from 'react';
import NavbarAdmin from '../Ccomponents/NavbarAdmin';
import Leftsidebar from '../Ccomponents/Leftsidebar';
import MinHeader from '../Ccomponents/MinHeader';

function ProfileAdmin() {


  return (
    <div>
        <MinHeader/>
        <NavbarAdmin/>
        <Leftsidebar/>        
       
    </div>
  )
}

export default ProfileAdmin
