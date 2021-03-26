
// Generated typescript code of HL7v 2.5 NDS  (Notification Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotificationDetailV5Document = mongoose.Document & HL7NotificationDetailV5I

const HL7NotificationDetailV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  notificationReferenceNumber: Number,
  notificationDateTime: Date,
  notificationAlertSeverity: String,
  notificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7NotificationDetailV5I extends Segment{
  notificationReferenceNumber: number
  notificationDateTime: Date
  notificationAlertSeverity: string
  notificationCode: string
  
  }
  export const HL7NotificationDetailV5 = mongoose.model<HL7NotificationDetailV5Document> ("HL7NotificationDetailV5", HL7NotificationDetailV5Schema);

