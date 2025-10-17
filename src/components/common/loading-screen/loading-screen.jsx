import './loading-screen.css'

export default function LoadingScreen(){
    return (
        <div className="loading-screen">

            <div className="loading-screen__container">
                <div className="loading-screen__icon"/>
                <p className="loading-screen__text">Loading, please wait</p>
            </div>
        </div>
    )
}