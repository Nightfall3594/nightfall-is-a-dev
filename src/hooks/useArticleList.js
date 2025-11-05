import {useEffect, useState} from "react";
import {API_URL} from "../config/constants.js"

export default function useArticleList() {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/articles/`)
            .then(res => res.json())
            .then(({articles}) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(err => alert(err))
    }, [])

    return {articles, isLoading}
}