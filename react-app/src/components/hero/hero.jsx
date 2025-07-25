import {Mail, Discord, Github, SubtleScroll} from "../icons/index.js";

function Hero({className=""}) {
    return (
        <>
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__text-container">
                        <p>Hi! I'm Nightfall 👋</p>
                        <p>I'm a <span>&lt;Python Developer/&gt;</span></p>
                        <p className="hero__text--muted">I like to code because I like building stuff</p>

                        <div className="hero__links">

                            <a href="#">
                                <Github className="hero__icon github-icon" />
                            </a>

                            <a href="#">
                                <Mail className="hero__icon mail-icon" />
                            </a>

                            <a href="#">
                                <Discord className="hero__icon discord-icon" />
                            </a>
                        </div>
                    </div>

                    <img src="/images/pfp.jpg" className="hero__image " alt="hero image"/>
                </div>

                <div className="subtle-scroll">
                    <p>Come have a look!</p>
                    <SubtleScroll className='subtle-scroll__icon'/>
                </div>
            </section>
        </>
    )
}

export default Hero