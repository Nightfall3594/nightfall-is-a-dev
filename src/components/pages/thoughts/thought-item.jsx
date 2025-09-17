import './thought-item.css'

export default function ThoughtItem({text}){
    return (
        <div className="thought-item">
            <img
                src="/images/pfp.jpg"
                alt="Nightfall3594"
                className="thought-item__pfp"
            />

            <div className="thought-item__content">
                <div className="thought-item__info">
                    <p className="thought-item__author">Nightfall3594</p>
                    <p className="thought-item__date">Jul 3, 2025</p>
                </div>
                <p className="thought-item__text">
                    {text}
                </p>
            </div>
        </div>
    )
}