import {useParams} from "react-router-dom";

export default function ArticlePost({}) {

    const {articleID} = useParams();

    return (
        <h1>{articleID}</h1>
    )
}