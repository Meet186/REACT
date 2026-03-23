import React from 'react'
import './App.css'
import axois from 'axios';
const Basics = () => {

    const fetchData = async () => {
        // const respose = await fetch("https://jsonplaceholder.typicode.com/users");
        // const data = await respose.json();
        // console.log(data);
        const data = await axois.get("https://jsonplaceholder.typicode.com/users");
        console.log(data);
    }
    return (
        <>
            <button className='rounded-4xl bg-amber-300 w-[300px]' onClick={fetchData}>Fetch Data</button>
        </>
    )
}

export default Basics
