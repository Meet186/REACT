import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
const Navbar = () => {
    let isLoggedIn = true;
    const navigate = useNavigate();
    const handleClick = ()=>{
        if(isLoggedIn)  navigate('/help')
    }
    let arr = ['a','b','c','d'];
    return (
        <>
            <div className='bg-lime-300 text-2xl text-white flex gap-5'>
                <NavLink to="/" className={({isActive})=> isActive ? 'text-red-600' : ''}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? 'text-red-600' : ''}>About</NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive ? 'text-red-600' : ''}>Contact</NavLink>
                <NavLink to="/help" className={({isActive})=> isActive ? 'text-red-600' : ''}>Help</NavLink>
                {arr.map((item)=>{
                    return (
                        <NavLink key ={item }to={`/contact/${item}`} className={({isActive})=> isActive ? 'text-red-600' : ''}>{item}</NavLink>
                    )
                })}
            </div>
            <button onClick={handleClick} className='w-25 h-[50px] bg-blue-300 rounded-xl'>Navigate to help</button>
        </>
    )
}
export default Navbar
