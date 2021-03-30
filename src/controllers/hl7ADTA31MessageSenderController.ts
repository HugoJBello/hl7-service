import { Request, Response } from "express";
import { ADTA31Message, ADTA31MessageI } from "../models/ADTA31Message";
import { ACKMessage, ACKMessageI } from "../models/ACKMessage";
import { composeADTA31 } from "../managers/hl7ADTA31Composer";
import { v4 as uuidv4 } from "uuid";
import { Status } from "../models/HL7Message";
import { sendMessage } from "../managers/hl7MessageSender";

export const hl7ADTA31MessageSenderController = async (req: Request, res: Response): Promise<void> => {

  const adta31Message = req.body as ADTA31MessageI;
  const id = uuidv4();
  adta31Message.messageHeader.processingID = id;
  adta31Message.id = id;
  adta31Message.status = Status.SENT;

  const encodedMessage = composeADTA31(adta31Message);
  adta31Message.textPayload = encodedMessage;

  const adta31Doc = new ADTA31Message(adta31Message);
  await adta31Doc.save();

  const ack = await sendMessage(encodedMessage);
  const ackDoc = new ACKMessage({ ack } as ACKMessageI);
  ackDoc.save();

  adta31Doc.status = Status.CONFIRMED;
  await adta31Doc.save();

  res.json({ message: "Ok", data: adta31Message , ack: ack });
};
