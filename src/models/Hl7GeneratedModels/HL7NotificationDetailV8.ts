
// Generated typescript code of HL7v 2.8 NDS  (Notification Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotificationDetailV8Document = mongoose.Document & HL7NotificationDetailV8I

const HL7NotificationDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  notificationReferenceNumber: Number,
  notificationDateTime: String,
  notificationAlertSeverity: String,
  notificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7NotificationDetailV8I extends Segment{
  notificationReferenceNumber: number
  notificationDateTime: string
  notificationAlertSeverity: string
  notificationCode: string
  
  }
  export const HL7NotificationDetailV8 = mongoose.model<HL7NotificationDetailV8Document> ("HL7NotificationDetailV8", HL7NotificationDetailV8Schema);

