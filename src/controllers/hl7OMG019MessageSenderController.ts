import { Request, Response } from "express";
import { ADTA31Message, ADTA31MessageI } from "../models/ADTA31Message";
import { ACKMessage, ACKMessageI } from "../models/ACKMessage";
import { composeADTA40 } from "../managers/hl7ADTA40Composer";
import { v4 as uuidv4 } from "uuid";
import { Status } from "../models/HL7Message";
import { sendMessage } from "../managers/hl7MessageSender";
import { OMG019Message, OMGO19MessageI } from "../models/OMG019Message";
import { composeOMG019 } from "../managers/hl7OMG019Composer";

export const hl7OMG019MessageSenderController = async (req: Request, res: Response): Promise<void> => {

  const omg019Message = req.body as OMGO19MessageI;
  const id = uuidv4();
  omg019Message.messageHeader.processingID = id;
  omg019Message.id = id;
  omg019Message.status = Status.SENT;

  const encodedMessage = composeOMG019(omg019Message);
  omg019Message.textPayload = encodedMessage;

  const omg019Doc = new OMG019Message(omg019Message);
  await omg019Doc.save();

  const ack = await sendMessage(encodedMessage);
  const ackDoc = new ACKMessage({ ack } as ACKMessageI);
  ackDoc.save();

  omg019Doc.status = Status.CONFIRMED;
  await omg019Doc.save();

  res.json({ message: "Ok", data: omg019Message, ack: ack });
};
