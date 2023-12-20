import React from "react";
import articleContent from "./article-content";

import ArticleList from '../components/ArticleList';

const ArticleListPage = () => {
  React.useEffect(() => {
    document.title = 'Article List';
  }, []);
  return (
    <>
      <h1>Article </h1>
      <ArticleList articles={articleContent} />
  
    </>
  );
};

export default ArticleListPage;
