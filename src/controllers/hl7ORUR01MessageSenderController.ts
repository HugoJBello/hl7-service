import { Request, Response } from "express";
import { ACKMessage, ACKMessageI } from "../models/ACKMessage";
import { v4 as uuidv4 } from "uuid";
import { Status } from "../models/HL7Message";
import { sendMessage } from "../managers/hl7MessageSender";
import { ORUR01Message, ORUR01MessageI } from "../models/ORUR01Message";
import { composeORUR01 } from "../managers/hl7ORUR01Composer";

export const hl7ORUR01MessageSenderController = async (req: Request, res: Response): Promise<void> => {

  const orur01Message = req.body as ORUR01MessageI;
  const id = uuidv4();
  orur01Message.messageHeader.processingID = id;
  orur01Message.id = id;
  orur01Message.status = Status.SENT;

  const encodedMessage = composeORUR01(orur01Message);
  orur01Message.textPayload = encodedMessage;

  const oruDoc = new ORUR01Message(orur01Message);
  await oruDoc.save();

  const ack = await sendMessage(encodedMessage);
  const ackDoc = new ACKMessage({ ack } as ACKMessageI);
  ackDoc.save();

  oruDoc.status = Status.CONFIRMED;
  await oruDoc.save();

  res.json({ message: "Ok", data: orur01Message, ack: ack });
};
