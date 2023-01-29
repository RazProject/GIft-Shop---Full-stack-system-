import GiftModel from "../../../Models/GiftModel";
import "./GiftCard.css";

interface GiftCardProps {
    gift: GiftModel;
}

function GiftCard(props: GiftCardProps): JSX.Element {
    return (
        <div className="GiftCard">
            <div className="Container">
                <span>Name: {props.gift.name}</span>
                <br />
                <span>Description: {props.gift.description}</span>
                <br />
                <span>Price: ${props.gift.price}</span>
                <br />
                <span>Discount: {props.gift.discount}%</span>
                <br />
                <span>Target Audience: {props.gift.targetAudienceName}</span>
            </div>
        </div>
    );
}

export default GiftCard;
