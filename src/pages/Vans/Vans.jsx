import React, { useEffect, useState } from "react";
import "../../server.js";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [search, setSearch] = useSearchParams();
  const [vans, setVans] = useState([]);
  const typeFilter = search.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ useEffect ~ data:", data);
        return setVans(data.vans);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Removed 'data' from the dependency array

  const filteredData = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = filteredData.map((van) => (
    <div key={van.id} className="van-title">
      <Link to={van.id}>
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
  ));

  function handleFilterChange(key, value) {
    setSearch((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
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
            onClick={() => setSearch({})}
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
