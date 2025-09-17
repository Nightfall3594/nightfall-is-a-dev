import ReactMarkdown from "react-markdown";
import dedent from "dedent";
import remarkGfm from "remark-gfm";

import './article-body.css'

export default function ArticleBody({children}) {

    return (
        <div className='article-post__body'>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({children}) => {
                        const id = children.toString().toLowerCase().trim().replace(/\s/g, '-');
                        return <h1 id={id}>{children}</h1>
                    }
                }}
            >
                {dedent(children)}
            </ReactMarkdown>
        </div>
    )
}