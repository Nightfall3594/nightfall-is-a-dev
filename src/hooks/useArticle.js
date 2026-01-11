import {useEffect, useState} from "react";
import {API_URL} from "../config/constants.js";

export default function useArticle(article_slug){

    const [article, setArticle] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/articles/${article_slug}`)
            .then(res => {
                if (!res.ok) {
                    if (res.status === 404) {
                        throw new Error("Oops! Article not found ");
                    } else if (res.status === 500) {
                        throw new Error("Something went wrong on our end ");
                    } else {
                        throw new Error(`Unexpected error: ${res.status}`);
                    }
                }
                return res.json();
            })
            .then(data => {
                setArticle(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message)
                setLoading(false);
            })
    },[article_slug])

    return {article, isLoading, error}

}