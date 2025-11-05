import {useEffect, useState} from "react";

export default function useArticle(article_slug){

    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8181/articles/${article_slug}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
    },[article_slug])

    return {article, isLoading}

}