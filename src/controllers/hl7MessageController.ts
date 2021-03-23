import { Request, Response } from "express";

export const hl7MessageController = async (req: Request, res: Response): Promise<void> => {

    res.json({message:"Ok"});
};
