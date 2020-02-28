import React from "react";
import articleContent from "./article-content";
import {Link} from "react-router-dom";

const ArticlesList = () => {
    return (
        <>
            <h1>Articles List</h1>
            {articleContent.map(article => (
                <Link key={article.name}
                      className="article-list-item"
                      to={'article/' + article.name}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </>
    )
};

export default ArticlesList;