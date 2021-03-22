import { Request, Response } from "express";
import { HL7MessageI } from "../models/HL7Message";
import { separatePayload } from "../managers/payloadMessageManager";
import { Segment } from "../models/Segment";
import { hl7OBSXDecoder } from "../managers/hl7ObservationParser";


export const hl7MessageController = async (req: Request, res: Response): Promise<void> => {
    const hl7Message = req.body as HL7MessageI
    const payload = hl7Message.payload
    const lines = separatePayload(payload)

    const message = []

    for (const payloadPart of lines) {
        if (payloadPart.hl7Key == Segment.OBSERVATION) {
            const observation = hl7OBSXDecoder(payloadPart.hl7BodyPart)
            //do stuff with the obs
            message.push(observation)
        }
    }

    res.json({message:"Ok"});
};
