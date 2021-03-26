
// Generated typescript code of HL7v 2.7 CNS  (Clear Notification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClearNotificationV7Document = mongoose.Document & HL7ClearNotificationV7I

const HL7ClearNotificationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  startingNotificationReferenceNumber: Number,
  endingNotificationReferenceNumber: Number,
  startingNotificationDateTime: String,
  endingNotificationDateTime: String,
  startingNotificationCode: String,
  endingNotificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7ClearNotificationV7I extends Segment{
  startingNotificationReferenceNumber: number
  endingNotificationReferenceNumber: number
  startingNotificationDateTime: string
  endingNotificationDateTime: string
  startingNotificationCode: string
  endingNotificationCode: string
  
  }
  export const HL7ClearNotificationV7 = mongoose.model<HL7ClearNotificationV7Document> ("HL7ClearNotificationV7", HL7ClearNotificationV7Schema);

