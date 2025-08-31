import {useParams} from "react-router-dom";

import './article-post.css'
import ArticlePostHeader from "./article-post-header.jsx";
import ArticleBody from "./article-body.jsx";
import {useEffect, useState} from "react";
import SidebarChapters from "./sidebar/sidebar-chapters.jsx";

import dedent from "dedent";

const PLACEHOLDER_TEXT = `
                    # Lorem Ipsum Example

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna at arcu vestibulum lacinia. Curabitur quis eros id sapien euismod sodales. Integer et magna nec magna maximus sodales. Vivamus sit amet erat fringilla, maximus ante sed, tempor tortor.

                    ## Subheading 1

                    Donec eget nulla at felis vehicula interdum. Etiam a interdum mi, ac interdum est. Nulla facilisi. Sed tempor euismod mauris id suscipit.

                    ### Subheading 2

                    - Lorem ipsum dolor sit amet
                    - Consectetur adipiscing elit
                    - Sed sit amet urna at arcu

                    # Lorem Ipsum Example 2

                    **Bold text** and *italic text*.

                    ![catto](https://i.pinimg.com/736x/7e/b5/da/7eb5da94d67db82034648f5ced716ee3.jpg)
                    
                    # Lorem Ipsum Example 3

                    > "Aenean eget tincidunt erat."

                    ### Subheading 3

                    1. First item
                    2. Second item
                    3. Third item
                    
                    # Lorem Ipsum Example 4

                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce feugiat arcu ac orci tincidunt, et fermentum leo sodales. Sed sed nunc eget mi blandit vestibulum sit amet in nunc.
                    
                    
                    # Lorem Ipsum Example 5
                    `

export default function ArticlePost({}) {

    const {articleID} = useParams();

    const [content, setContent] = useState(null);

    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        setChapters(dedent(PLACEHOLDER_TEXT).trim().match(/^#\s(.+)$/gm))
        console.log(chapters);
    },[])

    return (
        <section className="article-post">
            <div className='article-post__content'>

                <ArticlePostHeader
                    title="My thoughts on making a website..."
                    date="Jan 16, 2025"
                    author="Nightfall3594"
                />

                <ArticleBody>
                    {
                        PLACEHOLDER_TEXT
                    }
                </ArticleBody>

            </div>


            <div className="article-post__sidebar">
                <SidebarChapters chapters={chapters}/>

                <hr/>

            </div>

        </section>
    )
}