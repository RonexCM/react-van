import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "../../server.js";

const VanDetail = () => {
  const param = useParams();
  const location = useLocation();
  console.log("🚀 ~ VanDetail ~ location:", location);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data.vans))
      .catch((error) => console.error("Error fetching data:", error));
  }, [param.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {detail ? (
        <div className="van-detail">
          <img src={detail.imageUrl} />
          <i className={`van-type ${detail.type} selected`}>{detail.type}</i>
          <h2>{detail.name}</h2>
          <p className="van-price">
            <span>${detail.price}</span>/day
          </p>
          <p>{detail.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
