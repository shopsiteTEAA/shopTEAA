import React, { useContext } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import MinHeader from '../Ccomponents/MinHeader.jsx';
import NavbarAdmin from '../Ccomponents/NavbarAdmin.jsx';
import LeftsidebarAdmin from '../Ccomponents/LeftsidebarAdmin.jsx'

function ProfileAdmin() {
    const info=useContext('userData')
    console.log(info,"info")
  return (
    <div>
 <MinHeader />
 <NavbarAdmin />
    
    <div>
    <div style={{display: 'flex' , justifyContent:'space-between' , marginRight:'280px', marginTop:'50px'}}>
    <LeftsidebarAdmin/>
      <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://img.freepik.com/photos-gratuite/jeune-homme-barbu-chemise-rayee_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707523200&semt=ais" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Achref Farhat
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Admin
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    <Card className="w-96" >
      <CardHeader floated={false} className="h-80">
        <img src="https://img.freepik.com/photos-gratuite/jeune-homme-barbu-chemise-rayee_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707523200&semt=ais" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Mohamed Amin Dhib
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Admin
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
    
    </div>
    </div>
  )
}

export default ProfileAdmin
