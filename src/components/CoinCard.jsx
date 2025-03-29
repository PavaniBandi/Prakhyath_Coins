import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CoinCard.css";

const CoinCard = ({ coin }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coin/${coin.id}`, { state: { coin } }); // Pass coin data
  };

  return (
    <div className="coin-card" onClick={handleClick}>
      <img src={coin.image} alt={coin.name} className="coin-image" />
      <h3>{coin.name} ({coin.year})</h3>
      <p>{coin.description ? coin.description.substring(0, 50) + "..." : "No description available."}</p> {/* Handle missing descriptions */}
    </div>
  );
};

export default CoinCard;
