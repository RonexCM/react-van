/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../Api";

export function loader() {
  return getHostVans();
}
const HostVan = () => {
  const vans = useLoaderData();

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
        <section>{hostEls}</section>
      </div>
    </div>
  );
};

export default HostVan;
