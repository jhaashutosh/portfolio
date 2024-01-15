import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchResults from "./components/SearchResults";
import FullscreenPrompt from "./components/FullscreenPrompt";
import TabsBar from "./components/TabsBar";
import "./App.css";

function App() {
  const [showPrompt, setShowPrompt] = useState(true);

  const handleClose = () => {
    setShowPrompt(false);
  };

  return (
    <Router>
      <div className="App">
        <TabsBar />
        {showPrompt && <FullscreenPrompt onClose={handleClose} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
