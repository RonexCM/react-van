import React from 'react'
import { useOutletContext } from 'react-router-dom' 

const HostVanPhoto = () => {
  const {currentVan} = useOutletContext()
  return (
    <div>
      <img src={currentVan.imageUrl} height={160} className="host-van-detail-image" />
    </div>
  )
}

export default HostVanPhoto
