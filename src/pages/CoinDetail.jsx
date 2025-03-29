import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/CoinDetail.css";

const CoinDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { coin } = location.state || {}; // Extract coin from state

  // Redirect to home if no data is available
  useEffect(() => {
    if (!coin) {
      navigate("/");
    }
  }, [coin, navigate]);

  if (!coin) {
    return null; // Prevent rendering invalid data
  }

  return (
    <div className="coin-detail-container">
      <button className="go-back" onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      <img src={coin.image} alt={coin.name} className="coin-image" />
      <div className="coin-details">
        <h2>
          {coin.name} ({coin.year})
        </h2>
        <p>{coin.description}</p>
      </div>
    </div>
  );
};

export default CoinDetail;
