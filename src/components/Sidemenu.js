import React from 'react'

import { MdDashboard } from "react-icons/md";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { CgAirplane } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Sidemenu = () => {

    const pages = [
        {icon: <MdDashboard color='#fff' size={24}/>,title:"Homepage" ,route: "/"},
        {icon: <FaEnvelopeOpenText color='#fff' size={24}/>,title:"About Us",route: "/about"},
        {icon: <CgAirplane color='#fff' size={24}/>,title:"Our Prodacts",route: "/products"},
        {icon: <BsFillEnvelopeFill color='#fff' size={24}/>,title:"Conact",route: "/contact"},

    ]
  return (
    <div className='col-lg-2'>
        <div style={{textAlign:"center", backgroundColor:'#000000',paddingTop:20, paddingBottom:20}}>
           <img style={{width:120}} src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'/>
           <p className='name'>Ramzy Abohane</p> 
           <p className='titel'>Product Desinger</p>
        </div>
        <div className='menu'>
            {
                pages.map((page, index) =>(
                    <Link to={page.route} key={index} className='link'>
                        {page.icon} <span style={{marginLeft:12}}>{page.title} </span> 
                    </Link>
                ))
            }

        </div>

    </div>
  )
}

export default Sidemenu