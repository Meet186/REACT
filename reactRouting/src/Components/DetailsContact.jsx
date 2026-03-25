import React from 'react'
import { useParams } from 'react-router-dom'
const DetailsContact = () => {
    const params = useParams();
    console.log(params);
    
  return (
    <div className='page'>
      detailsContact : {params.id}
    </div>
  )
}

export default DetailsContact
