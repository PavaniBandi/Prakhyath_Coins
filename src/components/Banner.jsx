import React from "react";
import "./../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      {/* Left Profile Section */}
      <div className="banner-left">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <div>
          <h2>Your Name</h2>
          <p>your.email@example.com</p>
        </div>
      </div>

      {/* ✅ Centered Heading & Text */}
      <div className="banner-center">
        <h1>My Coin Collection</h1>
        <p>A showcase of rare and historical coins</p>
      </div>
    </div>
  );
};

export default Banner;
