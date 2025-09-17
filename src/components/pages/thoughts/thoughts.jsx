import './thoughts.css'
import ThoughtItem from "./thought-item.jsx";

export default function Thoughts(){
    return (
        <section className="thoughts">

            <div className="thoughts-title__container">
                <h1 className="thoughts__title">
                    Thoughts
                </h1>

                <h2 className="thoughts__subtitle">
                    Listen to my random ramblings :)
                </h2>
            </div>

            <div className="thoughts__list">
                <ThoughtItem text={"Hello, world!"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world!"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world! Sometimes I need to test even longer text and that's okay"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world! I would like to test an even even even even even longer text to try and see how formatting looks"} date="July 3, 2025"/>
                <ThoughtItem text={"Hello, world!\n\n\n\nSometimes I need to test even longer text and that's okay"} date="July 3, 2025"/>
            </div>
        </section>
    )
}