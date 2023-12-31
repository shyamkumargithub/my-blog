import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";

const ArticlePage = () => {

  React.useEffect(() => {
    document.title = 'Article';
  }, []);
  //use useParams instead of match
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const otherArticle = articleContent.filter((article) => article.name !== name);

  if (!article) return <h1>Article does not exist</h1>;
  return (
    <>
      <h1> {article.title} </h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ArticleList articles={otherArticle}/>
    </>
  );
};

export default ArticlePage;
