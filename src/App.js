import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./NavBar";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import ReactGA from "react-ga";
import InitializeGoogleAnalytics from "./utils";
const TRACKING_ID = "G-RN0T3SKYR6"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
   React.useEffect(() => {
     InitializeGoogleAnalytics()
   }, []);
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article-list" element={<ArticleListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
