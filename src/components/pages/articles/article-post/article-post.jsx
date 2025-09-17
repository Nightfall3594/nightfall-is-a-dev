import './article-post.css'
import './sidebar/sidebar.css'

import ArticlePostHeader from "./article-post-header.jsx";
import ArticleBody from "./article-body.jsx";
import {useEffect, useState} from "react";
import {SidebarContext} from "./sidebar/SidebarContext.js";

import dedent from "dedent";
import Sidebar from "./sidebar/sidebar.jsx";
import FloatingButtonContainer from "../../../common/buttons/floating-button-container.jsx";
import FloatingButton from "../../../common/buttons/floating-button.jsx";
import Hamburger from "../../../common/icons/hamburger.jsx";
import ArrowUp from "../../../common/icons/arrow-up.jsx";

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

export default function ArticlePost() {

    // Commented out for now, but left as a footnote for future integration
    // const {articleID} = useParams();
    //
    // const [content, setContent] = useState(null);

    // Get all chapter ids, in array format
    const [chapters, setChapters] = useState([]);


    useEffect(() => {
        setChapters(
            dedent(PLACEHOLDER_TEXT)
                .trim()
                .match(/^#\s(.+)$/gm))
    },[])


    // For responsive behavior
    const [isMobile, setMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setMobile(window.innerWidth <= 768);
        if (!isMobile) {
            setMobileSidebarVisible(false);
        }
    }

    // For handling whether the scroll-to-top button will appear (on mobile)
    const [hasScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY >= 60);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    })


    const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false);


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