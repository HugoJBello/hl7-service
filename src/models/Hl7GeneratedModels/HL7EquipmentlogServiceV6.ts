
// Generated typescript code of HL7v 2.6 EQP  (Equipment/log Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentlogServiceV6Document = mongoose.Document & HL7EquipmentlogServiceV6I

const HL7EquipmentlogServiceV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventType: String,
  fileName: String,
  startDateTime: String,
  endDateTime: String,
  transactionData: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentlogServiceV6I extends Segment{
  eventType: string
  fileName: string
  startDateTime: string
  endDateTime: string
  transactionData: string
  
  }
  export const HL7EquipmentlogServiceV6 = mongoose.model<HL7EquipmentlogServiceV6Document> ("HL7EquipmentlogServiceV6", HL7EquipmentlogServiceV6Schema);

