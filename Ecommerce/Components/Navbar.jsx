import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='flex m-2 text-white gap-5'>
              <Menu to={'/'} title={'Home'}/>
              <Menu to={'/products'} title={'Products'}/>
            </div>
        </>
    )
}

const Menu = ({to,title})=>{
    return (
         <NavLink to={to} className={({isActive})=> isActive ? 'text-red-600' : ''}>{title}</NavLink> 
    )
}

export default Navbar
