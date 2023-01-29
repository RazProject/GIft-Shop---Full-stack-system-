import "./Home.css";
import giftSource from "../../../Assets/Images/gift.jpg";

function Home(): JSX.Element {
    return (
        <div className="Home">

            <p>The most amazing gift shop in Israel!</p>
            
            <img src={giftSource} />

        </div>
    );
}

export default Home;
