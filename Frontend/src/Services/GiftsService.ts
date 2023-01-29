import axios from "axios";
import GiftModel from "../Models/GiftModel";
import TargetAudienceModel from "../Models/TargetAudienceModel";
import appConfig from "../Utils/Config";

class GiftsService {

    public async getAllTargetAudience(): Promise<TargetAudienceModel[]> {
        const response = await axios.get<TargetAudienceModel[]>(appConfig.targetAudienceUrl);
        const targetAudience = response.data;
        return targetAudience;
    }

    public async getGiftsByTargetAudience(targetAudienceId: number): Promise<GiftModel[]> {
        const response = await axios.get<GiftModel[]>(appConfig.giftsPerTargetAudienceUrl + targetAudienceId);
        const gifts = response.data;
        return gifts;
    }

    public async addGift(gift: GiftModel): Promise<void> {
        await axios.post<GiftModel>(appConfig.giftsUrl, gift);
    }

}

const giftsService = new GiftsService();

export default giftsService;