import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const hl7InsulineController = async (req: Request, res: Response): Promise<void> => {
    res.json({message:"Ok"});
};
