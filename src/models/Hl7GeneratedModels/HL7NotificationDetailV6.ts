
// Generated typescript code of HL7v 2.6 NDS  (Notification Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NotificationDetailV6Document = mongoose.Document & HL7NotificationDetailV6I

const HL7NotificationDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  notificationReferenceNumber: Number,
  notificationDateTime: String,
  notificationAlertSeverity: String,
  notificationCode: String,
  
  }, { timestamps: true });
  
export interface HL7NotificationDetailV6I extends Segment{
  notificationReferenceNumber: number
  notificationDateTime: string
  notificationAlertSeverity: string
  notificationCode: string
  
  }
  export const HL7NotificationDetailV6 = mongoose.model<HL7NotificationDetailV6Document> ("HL7NotificationDetailV6", HL7NotificationDetailV6Schema);

