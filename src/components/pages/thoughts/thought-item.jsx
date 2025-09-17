import './thought-item.css'
import {motion} from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: "20%"
    },
    animate: {
        opacity: 1,
        y: "0%",
        transition: {
            animation: "easeInOut"
        }
    }
}

export default function ThoughtItem({text, date}){
    return (
        <motion.div
            className="thought-item"
            variants={variants}
        >
            <img
                src="/images/pfp.jpg"
                alt="Nightfall3594"
                className="thought-item__pfp"
            />

            <div className="thought-item__content">
                <div className="thought-item__info">
                    <p className="thought-item__author">Nightfall3594</p>
                    <p className="thought-item__date">{date}</p>
                </div>
                <p className="thought-item__text">
                    {text}
                </p>
            </div>
        </motion.div>
    )
}