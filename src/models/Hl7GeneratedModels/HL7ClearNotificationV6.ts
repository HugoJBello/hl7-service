
// Generated typescript code of HL7v 2.6 CNS  (Clear Notification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClearNotificationV6Document = mongoose.Document & HL7ClearNotificationV6I

const HL7ClearNotificationV6Schema = new mongoose.Schema({
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
  
export interface HL7ClearNotificationV6I extends Segment{
  startingNotificationReferenceNumber: number
  endingNotificationReferenceNumber: number
  startingNotificationDateTime: string
  endingNotificationDateTime: string
  startingNotificationCode: string
  endingNotificationCode: string
  
  }
  export const HL7ClearNotificationV6 = mongoose.model<HL7ClearNotificationV6Document> ("HL7ClearNotificationV6", HL7ClearNotificationV6Schema);

