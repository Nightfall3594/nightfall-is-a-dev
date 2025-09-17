import './thought-item.css'

export default function ThoughtItem({text}){
    return (
        <div className="thought-item">
            <img
                src="/images/pfp.jpg"
                alt="Nightfall3594"
                className="thought-item__pfp"
            />

            <p className="thought-item__content">
                {text}
            </p>
        </div>
    )
}