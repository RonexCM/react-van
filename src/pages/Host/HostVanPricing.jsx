import React from 'react'
import { useOutletContext } from 'react-router-dom' 

const HostVanPricing = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
      <h1 className="host-van-price">Price: ${currentVan.price}<span>/day</span></h1>
    </div>
  )
}

export default HostVanPricing
