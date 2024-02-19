import React, { useEffect, useState } from "react";
import "../../server.js";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../Api.jsx";

export function loader() {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData();

  const filteredData = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = filteredData ? (
    filteredData.map((van) => (
      <div key={van.id} className="van-title">
        <Link
          to={van.id}
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
          <img src={van.imageUrl} alt="vans-picture" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
        </Link>
      </div>
    ))
  ) : (
    <h1>No vans found</h1>
  );

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) {
    return <h1>Failed to load Vans</h1>;
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          className={`van-type simple ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`van-type simple ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
