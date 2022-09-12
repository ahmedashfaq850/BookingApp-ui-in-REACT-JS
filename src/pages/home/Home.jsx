import React from "react";
import Banner from "../../components/banner/Banner";
import Featured from "../../components/feature/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbarComponent/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import RatingList from "../../components/ratinglist/RatingList";
import "./Home.style.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <div className="propert-type">
          <h2>Browse by property type</h2>
        </div>
        <PropertyList />
        <div className="rating-list">
          <h2>Homes guests love</h2>
        </div>
        <RatingList />
        <Banner/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
