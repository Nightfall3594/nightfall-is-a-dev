import {useEffect, useState} from "react";
import {API_URL} from "../config/constants.js";

export default function useArticle(article_slug){

    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/articles/${article_slug}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
    },[article_slug])

    return {article, isLoading}

}