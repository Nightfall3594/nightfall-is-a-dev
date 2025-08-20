import './hero.css'

import {Mail, Discord, Github, SubtleScroll} from "src/components/common/icons/index.js";
import HeroLink from "./hero-link.jsx";
import HeroText from "./hero-text.jsx";
import MutedHeroText from "./muted-hero-text.jsx";

import {motion} from "framer-motion";

const heroTextContainerVariants = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.75
        }
    }
}

const heroLinkContainerVariants = {
    initial: {opacity: 0},
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <motion.div
                    className="hero__text-container"
                    variants={heroTextContainerVariants}
                    initial="initial"
                    animate="animate"
                >
                    <HeroText>Hi! I'm Nightfall 👋</HeroText>
                    <HeroText>I'm a <span>&lt;Python Developer/&gt;</span></HeroText>
                    <MutedHeroText>I like to code because I like building stuff</MutedHeroText>

                    <motion.div
                        className="hero__links"
                        variants={heroLinkContainerVariants}
                    >
                        <HeroLink Icon={Github} className="github-icon" to="#"/>
                        <HeroLink Icon={Mail} className="mail-icon" to="#"/>
                        <HeroLink Icon={Discord} className="discord-icon" to="#"/>
                    </motion.div>

                </motion.div>

                <motion.img
                    src="/images/pfp.jpg"
                    className="hero__image"
                    alt="hero image"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration: 1}}}
                />

            </div>

            <div className="subtle-scroll">
                <p>Come have a look!</p>
                <SubtleScroll className='subtle-scroll__icon'/>
            </div>
        </section>
    )
}

export default Hero