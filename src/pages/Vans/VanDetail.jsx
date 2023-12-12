import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../../server.js"

const VanDetail = () => {
    const param = useParams()

    const [detail,setDetail] = useState([])

    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
        .then((res) => res.json())
        .then((data) => setDetail(data.vans))
        .catch(error => console.error('Error fetching data:', error));
    },[param.id])
    console.log(detail);
    return (
      <div className="van-detail-container">
      <Link to="/vans" >Back to van options</Link>
      {detail ? (
          <div className="van-detail">
              <img src={detail.imageUrl}/>
              <i className={`van-type ${detail.type} selected`}>{detail.type}</i>
              <h2>{detail.name}</h2>
              <p className="van-price"><span>${detail.price}</span>/day</p>
              <p>{detail.description}</p>
              <button className="link-button">Rent this van</button>
          </div>
      ) : <h2>Loading...</h2>}
  </div>
  )
}

export default VanDetail
