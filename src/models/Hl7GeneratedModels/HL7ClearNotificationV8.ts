
// Generated typescript code of HL7v 2.8 CNS  (Clear Notification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClearNotificationV8Document = mongoose.Document & HL7ClearNotificationV8I

const HL7ClearNotificationV8Schema = new mongoose.Schema({
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
  
export interface HL7ClearNotificationV8I extends Segment{
  startingNotificationReferenceNumber: number
  endingNotificationReferenceNumber: number
  startingNotificationDateTime: string
  endingNotificationDateTime: string
  startingNotificationCode: string
  endingNotificationCode: string
  
  }
  export const HL7ClearNotificationV8 = mongoose.model<HL7ClearNotificationV8Document> ("HL7ClearNotificationV8", HL7ClearNotificationV8Schema);

