import { Request, Response } from "express";
import { HL7MessageI } from "../models/HL7Message";


export const hl7ObservationController = async (req: Request, res: Response): Promise<void> => {
    const hl7Message = req.body as HL7MessageI

    res.json({message:"Ok"});
};
