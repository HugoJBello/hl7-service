
// Generated typescript code of HL7v 2.4 CNS  (Clear Notification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClearNotificationV4Document = mongoose.Document & HL7ClearNotificationV4I

const HL7ClearNotificationV4Schema = new mongoose.Schema({
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
  
export interface HL7ClearNotificationV4I extends Segment{
  startingNotificationReferenceNumber: number
  endingNotificationReferenceNumber: number
  startingNotificationDateTime: Date
  endingNotificationDateTime: Date
  startingNotificationCode: string
  endingNotificationCode: string
  
  }
  export const HL7ClearNotificationV4 = mongoose.model<HL7ClearNotificationV4Document> ("HL7ClearNotificationV4", HL7ClearNotificationV4Schema);

