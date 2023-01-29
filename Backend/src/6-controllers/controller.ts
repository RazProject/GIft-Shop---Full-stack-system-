import express, { Request, Response, NextFunction } from "express";
import GiftModel from "../4-models/gift-model";
import logic from "../5-logic/logic";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/target-audience
router.get("/target-audience", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const targetAudience = await logic.getAllTargetAudience();
        response.json(targetAudience);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/gifts-per-target-audience/:targetAudienceId
router.get("/gifts-per-target-audience/:targetAudienceId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const targetAudienceId = +request.params.targetAudienceId;
        const gifts = await logic.getGiftsByTargetAudience(targetAudienceId);
        response.json(gifts);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/gifts
router.post("/gifts", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gift = new GiftModel(request.body);
        const addedGift = await logic.addGift(gift);
        response.status(201).json(addedGift);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;