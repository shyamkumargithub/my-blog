import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./NavBar";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
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
