import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVan = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  });

  const hostEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="listedVans">
      <h1 className="host-van-title">Your Listed Vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? <section>{hostEls}</section> : <h2>Loading...</h2>}
      </div>
    </div>
  );
};

export default HostVan;
