import {useEffect, useState} from "react";

export default function useArticleList() {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8181/articles/")
            .then(res => res.json())
            .then(({articles}) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(err => alert(err))
    }, [])

    return {articles, isLoading}
}