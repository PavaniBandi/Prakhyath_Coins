import React from "react";
import "./../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <img
          src="/assets/prakhyath.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div>
          <h2>Prakhyath Vallabhaneni</h2>
          <p>vallabhaneniprakhyath@gmail.com</p>
        </div>
      </div>

      {/* ✅ Updated Centered Section */}
      <div className="banner-center">
        <h1>My Coin Collection</h1>
        <p>A showcase of rare and historical coins</p>
      </div>
    </div>
  );
};

export default Banner;
