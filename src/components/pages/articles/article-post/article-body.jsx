import ReactMarkdown from "react-markdown";
import dedent from "dedent";
import remarkGfm from "remark-gfm";

import './article-body.css'

export default function ArticleBody({children}) {
    return (
        <div className='article-post__body'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {dedent(children)}
            </ReactMarkdown>
        </div>
    )
}