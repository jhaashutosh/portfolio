import React from "react";
import Bookmarks from "./Bookmarks";
import NavBar from "./NavBar";
import MiddleContent from "./MiddleContent";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <Bookmarks />
      <MiddleContent />
      <Footer />
    </div>
  );
};

export default HomePage;
