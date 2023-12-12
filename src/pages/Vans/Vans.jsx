import React, { useEffect, useState } from 'react';
import "../../server.js"
import { Link } from 'react-router-dom';

const Vans = () => {
  const [vans,setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Removed 'data' from the dependency array


  const vanElements = vans.map(van => (
    <div key={van.id} className="van-title">
    <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt='vans-picture'/>
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>
    </div>
  ))

  return (
    <div className="van-list-container">
    <h1>Explore our van options</h1>
    <div className="van-list">
      {vanElements}
    </div>
    </div>
  );
};

export default Vans;