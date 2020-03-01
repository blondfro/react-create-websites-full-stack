import React, {useEffect, useState} from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/api/articles/' + name);
            const body = await result.json();
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage/>;
    const otherArticles = articleContent.filter( article => (
        article.name !== name
    ));

    return (
        <>
            <h1>{article.title}</h1>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph, key) => (
                <div key={key}>{paragraph}</div>
            ))}
            <h3> Related Articles </h3>
            <CommentsList comments={articleInfo.comments}/>
            <ArticlesList articles={otherArticles}/>
        </>
    )
};

export default ArticlePage;