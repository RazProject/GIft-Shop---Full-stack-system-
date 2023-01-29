import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GiftModel from "../../../Models/GiftModel";
import TargetAudienceModel from "../../../Models/TargetAudienceModel";
import giftsService from "../../../Services/GiftsService";
import "./Insert.css";

function Insert(): JSX.Element {

    const navigate = useNavigate();

    const [targetAudience, setTargetAudience] = useState<TargetAudienceModel[]>([]);

    const { register, handleSubmit } = useForm<GiftModel>();

    useEffect(() => {
        giftsService.getAllTargetAudience()
            .then(targetAudience => setTargetAudience(targetAudience))
            .catch(err => alert(err.message));
    }, []);

    async function send(gift: GiftModel) {
        try {
            await giftsService.addGift(gift);
            alert("Gift has been added");
            navigate("/gifts");
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Insert">

            <form onSubmit={handleSubmit(send)}>

                <label>Select Target Audience: </label>
                <select defaultValue="" {...register("targetAudienceId")} required>
                    <option disabled value="">Select...</option>
                    {targetAudience.map(t =>
                        <option key={t.targetAudienceId} value={t.targetAudienceId}>
                            {t.targetAudienceName}
                        </option>
                    )}
                </select>

                <label>Name: </label>
                <input type="text" {...register("name")} required/>

                <label>Description: </label>
                <input type="text" {...register("description")} required/>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} required min="0" />

                <label>Discount: </label>
                <input type="number" {...register("discount")} required min="0" max="100" />

                <button>Add</button>

            </form>

        </div>
    );
}

export default Insert;
