import React from 'react'
import { useOutletContext } from 'react-router-dom' 

const HostVanInfo = () => {

  const {currentVan} = useOutletContext()
  return (
    <div className="host-van-detail-info">
      <h4>Name: <span>{currentVan.name}</span></h4>
      <h4>Type: <span>{currentVan.type}</span></h4>
      <h4>Description: <span>{currentVan.description}</span></h4>
      <h4>Visibilty: <span>Public</span></h4>
    </div>
  )
}

export default HostVanInfo
