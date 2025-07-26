import DateItem from './date-item.jsx'
import * as Icons from "../icons/index.js";
import Timeline from "./timeline.jsx";

function Timelines({className=""}) {

    return(
        <>
            <section className="timelines">
                <div className="timeline-1__container">

                    {/* First Timeline of Timeline-1 Section */}
                    <Timeline className="timeline-1" title="Recently Updated Notes">
                        <DateItem to="#" time="2 hours ago">
                            Sample text for timeline 1
                        </DateItem>

                        <DateItem to="#" time="yesterday">
                            More sample text for timeline 1
                        </DateItem>

                        <DateItem to="#" time="6 days ago">
                            Even more sample text for timeline 1
                        </DateItem>

                        <DateItem to="#" time="3 months ago">
                            Even more sample text for <br/>timeline 1
                        </DateItem>

                        <DateItem to="#" time="2025 Jan 16">
                            Even more sample text for timeline 1
                        </DateItem>

                    </Timeline>

                    <a href="#" className="timeline-1__see-more">
                        <Icons.ArrowCircle />
                        <span> Read more</span>
                    </a>

                    <hr/>

                    {/* Second Timeline of Timeline-1 Section */}
                    <Timeline className="timeline-1" title="Recently Updated Projects">
                        <DateItem to="#" time="2 hours ago">
                            Sample text for timeline 2
                        </DateItem>
                    </Timeline>

                    <a href="#" className="timeline-1__see-more">
                        <Icons.ArrowCircle/>
                        <span>Read more</span>
                    </a>
                </div>

                <div className="timeline-2__container">
                    <h1 className="timeline__title">Recent Updates</h1>
                    <ul className="timeline timeline-2__timeline">
                        <li className="timeline-2__item timeline-2__like">

                            <Icons.Heart className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                                Liked the article <a>Article Name here!</a>
                            </span>
                        </li>
                        <li className="timeline-2__item timeline-2__thoughts">

                            <Icons.Thought className="timeline-2__icon"/>

                            <img src="../assets/images/pfp.jpg" alt="Nightfall3594"/>
                            <span className="timeline-2-item__content">
                        Have you ever wondered what happens when you sleep?
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__article">

                            <Icons.Journal className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                                Wrote <a>Article Name here!</a>
                            </span>
                        </li>
                        <li className="timeline-2__item timeline-2__project">

                            <Icons.Project className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                                Added a new project <a>Project Name here!</a>
                            </span>
                        </li>


                        <li className="timeline-2__item timeline-2__project">

                            <Icons.Project className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__project">

                            <Icons.Project className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>

                        <li className="timeline-2__item timeline-2__project">

                            <Icons.Project className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>

                        <li className="timeline-2__item timeline-2__project">

                            <Icons.Project className="timeline-2__icon"/>

                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__thoughts">

                            <Icons.Thought className="timeline-2__icon"/>

                            <img src="../assets/images/pfp.jpg" alt="Nightfall3594"/>
                            <span className="timeline-2-item__content">
                        Have you ever wondered what happens when you sleep?
                    </span>
                        </li>

                        <li className="timeline-2__item timeline-2__thoughts">

                            <Icons.Thought className="timeline-2__icon"/>

                            <img src="../assets/images/pfp.jpg" alt="Nightfall3594"/>
                            <span className="timeline-2-item__content">
                        Have you ever wondered what happens when you sleep?<br/><br/><br/><br/><br/><br/><br/>
                        Sometimes, truthfully, I don't know what I'm doing.
                    </span>
                        </li>

                        <li className="timeline-2__item timeline-2__comment">

                            <Icons.Message className="timeline-2__icon"/>

                            <div className="timeline-2-comment__container">
                                <span className="timeline-2-comment__info">
                                    Someone commented on your article!
                                </span>
                                <span className="timeline-2-item__content">
                                    This place looks pretty nice, I wonder what it is?
                                </span>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Timelines