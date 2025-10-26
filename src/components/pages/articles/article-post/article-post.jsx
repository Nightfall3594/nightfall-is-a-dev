import './article-post.css'
import './sidebar/sidebar.css'

import ArticlePostHeader from "./article-post-header.jsx";
import ArticleBody from "./article-body.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {SidebarContext} from "./sidebar/SidebarContext.js";

import dedent from "dedent";
import Sidebar from "./sidebar/sidebar.jsx";
import FloatingButtonContainer from "../../../common/buttons/floating-button-container.jsx";
import FloatingButton from "../../../common/buttons/floating-button.jsx";
import Hamburger from "../../../common/icons/hamburger.jsx";
import ArrowUp from "../../../common/icons/arrow-up.jsx";
import {useScroll} from "../../../../hooks/useScroll.js";
import useResponsive from "../../../../hooks/useResponsive.js";
import useArticle from "../../../../hooks/useArticle.js";
import LoadingScreen from "../../../common/loading-screen/loading-screen.jsx";


export default function ArticlePost() {

    const {article_slug} = useParams();
    let {article, isLoading} = useArticle(article_slug);

    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        if (!isLoading) {
            setChapters(
                dedent(article.body)
                    .trim()
                    .match(/^#\s(.+)$/gm)
            )
        }
    },[article])


    // For handling whether the scroll-to-top button will appear (on mobile)
    const hasScrolled = useScroll()

    const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false);
    let isMobile = useResponsive((stillMobile) => {
        if (!stillMobile) setMobileSidebarVisible(false);
    });

    if (isLoading) return <LoadingScreen/>


    return (
        <section className="article-post">
            <div className='article-post__content'>

                <ArticlePostHeader
                    title="My thoughts on making a website..."
                    date="Jan 16, 2025"
                    author="Nightfall3594"
                />

                <ArticleBody>
                    {article.body}
                </ArticleBody>

            </div>


            <SidebarContext.Provider
                value = {{
                    isMobile: isMobile,
                    isVisible: isMobileSidebarVisible,
                    hasScrolled: hasScrolled,
                    onClick: () => setMobileSidebarVisible(false)
                }}
            >
                <Sidebar chapters={chapters}/>
            </SidebarContext.Provider>


            {isMobile &&
                <FloatingButtonContainer>
                    <FloatingButton Icon={Hamburger} onClick={() => setMobileSidebarVisible(true)} />
                    <FloatingButton Icon={ArrowUp} isVisible={hasScrolled} onClick={() => window.scrollTo(0, 0)} />
                </FloatingButtonContainer>
            }

        </section>
    )
}