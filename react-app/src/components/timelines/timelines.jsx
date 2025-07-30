import DateItem from './items/date-item.jsx'
import * as Icons from "../icons/index.js";
import Timeline from "./timeline.jsx";

import * as Items from './index.js'

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
                    <Timeline title="Recent Updates" className="timeline-2__timeline">

                        <Items.LikeItem to="#" articleName="Article Name here!"/>

                        <Items.ThoughtItem>
                            Have you ever wondered what happens when you sleep?
                        </Items.ThoughtItem>

                        <Items.ArticleItem to="#" articleName="Article Name here!"/>

                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>

                        {/* Some Filler to test for scrollability */}
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>

                        <Items.ThoughtItem>
                            Have you ever wondered what happens when you sleep?
                        </Items.ThoughtItem>

                        {/* For testing multi-line thoughts */}
                        <Items.ThoughtItem>
                            Have you ever wondered what happens when you sleep?<br/><br/><br/><br/><br/><br/><br/>
                            Sometimes, truthfully, I don't know what I'm doing.
                        </Items.ThoughtItem>

                        <Items.CommentItem>
                            This place looks pretty nice, I wonder what it is?
                        </Items.CommentItem>

                    </Timeline>
                </div>
            </section>
        </>
    )
}

export default Timelines