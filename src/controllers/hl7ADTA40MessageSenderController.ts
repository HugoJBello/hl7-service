import { Request, Response } from "express";
import { ADTA31Message, ADTA31MessageI } from "../models/ADTA31Message";
import { ACKMessage, ACKMessageI } from "../models/ACKMessage";
import { composeADTA40 } from "../managers/hl7ADTA40Composer";
import { v4 as uuidv4 } from "uuid";
import { Status } from "../models/HL7Message";
import { sendMessage } from "../managers/hl7MessageSender";
import { ADTA40Message, ADTA40MessageI } from "../models/ADTA40Message";

export const hl7ADTA40MessageSenderController = async (req: Request, res: Response): Promise<void> => {

  const adta40Message = req.body as ADTA40MessageI;
  const id = uuidv4();
  adta40Message.messageHeader.processingID = id;
  adta40Message.id = id;
  adta40Message.status = Status.SENT;

  const encodedMessage = composeADTA40(adta40Message);
  adta40Message.textPayload = encodedMessage;

  const adta40Doc = new ADTA40Message(adta40Message);
  await adta40Doc.save();

  const ack = await sendMessage(encodedMessage);
  const ackDoc = new ACKMessage({ ack } as ACKMessageI);
  ackDoc.save();

  adta40Doc.status = Status.CONFIRMED;
  await adta40Doc.save();

  res.json({ message: "Ok", data: adta40Message , ack: ack });
};
