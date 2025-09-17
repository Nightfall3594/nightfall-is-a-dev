import './thoughts.css'
import ThoughtItem from "./thought-item.jsx";

export default function Thoughts(){
    return (
        <section className="thoughts">
            <h1 className="thoughts__title">
                My thoughts on things
            </h1>

            <div className="thoughts__list">
                <ThoughtItem text={"Hello, world!"}/>
                <ThoughtItem text={"Hello, world!"}/>
                <ThoughtItem text={"Hello, world! Sometimes I need to test even longer text and that's okay"}/>
                <ThoughtItem text={"Hello, world!"}/>
                <ThoughtItem text={"Hello, world!\n\n\n\nSometimes I need to test even longer text and that's okay"}/>
            </div>
        </section>
    )
}