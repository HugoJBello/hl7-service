
// Generated typescript code of HL7v 2.4 NDS  (Notification Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotificationDetailV4Document = mongoose.Document & HL7NotificationDetailV4I

const HL7NotificationDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  notificationReferenceNumber: Number,
  notificationDateTime: Date,
  notificationAlertSeverity: String,
  notificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7NotificationDetailV4I extends Segment{
  notificationReferenceNumber: number
  notificationDateTime: Date
  notificationAlertSeverity: string
  notificationCode: string
  
  }
  export const HL7NotificationDetailV4 = mongoose.model<HL7NotificationDetailV4Document> ("HL7NotificationDetailV4", HL7NotificationDetailV4Schema);

