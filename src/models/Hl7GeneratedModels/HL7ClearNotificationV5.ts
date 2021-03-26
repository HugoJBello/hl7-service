
// Generated typescript code of HL7v 2.5 CNS  (Clear Notification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClearNotificationV5Document = mongoose.Document & HL7ClearNotificationV5I

const HL7ClearNotificationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  startingNotificationReferenceNumber: Number,
  endingNotificationReferenceNumber: Number,
  startingNotificationDateTime: Date,
  endingNotificationDateTime: Date,
  startingNotificationCode: String,
  endingNotificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7ClearNotificationV5I extends Segment{
  startingNotificationReferenceNumber: number
  endingNotificationReferenceNumber: number
  startingNotificationDateTime: Date
  endingNotificationDateTime: Date
  startingNotificationCode: string
  endingNotificationCode: string
  
  }
  export const HL7ClearNotificationV5 = mongoose.model<HL7ClearNotificationV5Document> ("HL7ClearNotificationV5", HL7ClearNotificationV5Schema);

