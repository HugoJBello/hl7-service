
// Generated typescript code of HL7v 2.7 NDS  (Notification Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotificationDetailV7Document = mongoose.Document & HL7NotificationDetailV7I

const HL7NotificationDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  notificationReferenceNumber: Number,
  notificationDateTime: String,
  notificationAlertSeverity: String,
  notificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7NotificationDetailV7I extends Segment{
  notificationReferenceNumber: number
  notificationDateTime: string
  notificationAlertSeverity: string
  notificationCode: string
  
  }
  export const HL7NotificationDetailV7 = mongoose.model<HL7NotificationDetailV7Document> ("HL7NotificationDetailV7", HL7NotificationDetailV7Schema);

