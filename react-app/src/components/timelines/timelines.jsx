import DateItem from './date-item.jsx'
import App from "../../App.jsx";

function Timelines({className=""}) {

    return(
        <>
            <section className="timelines">
                <div className="timeline-1__container">
                    <h1 className="timeline__title">Recently Updated Notes</h1>
                    <ul className="timeline timeline-1">
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
                    </ul>

                    <a href="#" className="timeline-1__see-more">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>arrow_right_circle_line</title>
                            <g id="arrow_right_circle_line" fill="none" fill-rule="nonzero">
                                <path
                                    d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z"/>
                                <path fill="currentColor"
                                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.005 3.758a1 1 0 0 1 1.32-.084l.094.084 3.535 3.535a1 1 0 0 1 .083 1.32l-.083.094-3.535 3.536a1 1 0 0 1-1.498-1.32l.084-.094 1.828-1.83H7.757a1 1 0 0 1-.116-1.992L7.757 11h6.076l-1.828-1.828a1 1 0 0 1 0-1.414Z"/>
                            </g>
                        </svg>
                        <span> Read more</span>
                    </a>

                    <hr/>

                    <h1 className="timeline__title">Recent Project Updates</h1>
                    <ul className="timeline">
                        {/*<li>*/}
                        {/*    <a>*/}
                        {/*        <span>Sample text for timeline 2</span>*/}
                        {/*        <span className="timeline__date">2 hours ago</span>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <DateItem to="#" time="2 hours ago">
                            Sample text for timeline 2
                        </DateItem>

                    </ul>
                    <a href="#" className="timeline-1__see-more">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>arrow_right_circle_line</title>
                            <g id="arrow_right_circle_line" fill="none" fill-rule="nonzero">
                                <path
                                    d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z"/>
                                <path fill="currentColor"
                                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.005 3.758a1 1 0 0 1 1.32-.084l.094.084 3.535 3.535a1 1 0 0 1 .083 1.32l-.083.094-3.535 3.536a1 1 0 0 1-1.498-1.32l.084-.094 1.828-1.83H7.757a1 1 0 0 1-.116-1.992L7.757 11h6.076l-1.828-1.828a1 1 0 0 1 0-1.414Z"/>
                            </g>
                        </svg>
                        <span>Read more</span>
                    </a>
                </div>

                <div className="timeline-2__container">
                    <h1 className="timeline__title">Recent Updates</h1>
                    <ul className="timeline timeline-2__timeline">
                        <li className="timeline-2__item timeline-2__like">

                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className="timeline-2__icon">
                                <title>heart_line</title>
                                <g id="heart_line" fill='none' fill-rule='evenodd'>
                                    <path
                                        d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/>
                                    <path fill='currentColor'
                                          d='M18.494 3.801c2.095 1.221 3.569 3.7 3.504 6.592-.081 3.61-2.89 6.794-7.679 9.638-.71.422-1.458.969-2.319.969-.845 0-1.625-.557-2.32-.97-4.787-2.843-7.597-6.028-7.678-9.637-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.338c2.072-1.685 4.534-1.679 6.494-.537M17.487 5.53c-1.394-.812-3.136-.783-4.644.743a1.188 1.188 0 0 1-1.686 0c-1.508-1.526-3.25-1.555-4.644-.743-1.444.842-2.56 2.628-2.511 4.82.056 2.511 2.04 5.194 6.7 7.962.408.243.834.554 1.298.683.464-.129.89-.44 1.298-.683 4.66-2.768 6.644-5.45 6.7-7.963.05-2.19-1.067-3.977-2.511-4.819'/>
                                </g>
                            </svg>
                            <span className="timeline-2-item__content">
                        Liked the article <a>Article Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__thoughts">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="timeline-2__icon">
                                <path fill="currentColor"
                                      d="M1 11h3v2H1v-2m3.9-7.5L3.5 4.9L5.6 7L7 5.6L4.9 3.5M13 1h-2v3h2V1m7 10v2h3v-2h-3M10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4v1m9.1-18.5L17 5.6L18.4 7l2.1-2.1l-1.4-1.4M18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4Z"></path>
                            </svg>
                            <img src="../assets/images/pfp.jpg" alt="Nightfall3594"/>
                            <span className="timeline-2-item__content">
                        Have you ever wondered what happens when you sleep?
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__article">

                            <svg viewBox="0 0 512 512" className="timeline-2__icon">
                                <path fill="currentColor"
                                      d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94c9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36c53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z">
                                </path>
                            </svg>
                            <span className="timeline-2-item__content">
                        Wrote <a>Article Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__project">

                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 className="timeline-2__icon">
                                <path
                                    d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"/>
                            </svg>
                            <span className="timeline-2-item__content">
                        Added a new project <a>Project Name here!</a>
                    </span>
                        </li>


                        <li className="timeline-2__item timeline-2__project">

                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 className="timeline-2__icon">
                                <path
                                    d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"/>
                            </svg>
                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__project">

                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 className="timeline-2__icon">
                                <path
                                    d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"/>
                            </svg>
                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__project">

                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 className="timeline-2__icon">
                                <path
                                    d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"/>
                            </svg>
                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__project">

                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 className="timeline-2__icon">
                                <path
                                    d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z"/>
                            </svg>
                            <span className="timeline-2-item__content">
                        This is filler for scroll:  <a>Project Name here!</a>
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__thoughts">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="timeline-2__icon">
                                <path fill="currentColor"
                                      d="M1 11h3v2H1v-2m3.9-7.5L3.5 4.9L5.6 7L7 5.6L4.9 3.5M13 1h-2v3h2V1m7 10v2h3v-2h-3M10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4v1m9.1-18.5L17 5.6L18.4 7l2.1-2.1l-1.4-1.4M18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4Z"></path>
                            </svg>
                            <img src="../assets/images/pfp.jpg" alt="Nightfall3594"/>
                            <span className="timeline-2-item__content">
                        Have you ever wondered what happens when you sleep?
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__thoughts">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="timeline-2__icon">
                                <path fill="currentColor"
                                      d="M1 11h3v2H1v-2m3.9-7.5L3.5 4.9L5.6 7L7 5.6L4.9 3.5M13 1h-2v3h2V1m7 10v2h3v-2h-3M10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4v1m9.1-18.5L17 5.6L18.4 7l2.1-2.1l-1.4-1.4M18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4Z"></path>
                            </svg>
                            <img src="../assets/images/pfp.jpg" alt="Nightfall3594"/>
                            <span className="timeline-2-item__content">
                        Have you ever wondered what happens when you sleep?<br/><br/><br/><br/><br/><br/><br/>
                        Sometimes, truthfully, I don't know what I'm doing.
                    </span>
                        </li>
                        <li className="timeline-2__item timeline-2__comment">

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 className="timeline-2__icon">
                                <title>message_2_line</title>
                                <g id="message_2_line" fill="none" fill-rule="evenodd">
                                    <path
                                        d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"/>
                                    <path fill="currentColor"
                                          d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-7.667L8 21.5c-.824.618-2 .03-2-1V19H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.5A1.5 1.5 0 0 1 8 18.5v.5l2.133-1.6a2 2 0 0 1 1.2-.4H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
                                </g>
                            </svg>

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