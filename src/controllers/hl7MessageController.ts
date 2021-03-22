import { Request, Response } from "express";
import { HL7MessageI } from "../models/HL7Message";


export const hl7MessageController = async (req: Request, res: Response): Promise<void> => {
    const hl7Message = req.body as HL7MessageI
    const payload = hl7Message.payload


    res.json({message:"Ok"});
};
