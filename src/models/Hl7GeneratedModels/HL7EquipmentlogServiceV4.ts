
// Generated typescript code of HL7v 2.4 EQP  (Equipment/log Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentlogServiceV4Document = mongoose.Document & HL7EquipmentlogServiceV4I

const HL7EquipmentlogServiceV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventType: String,
  fileName: String,
  startDateTime: Date,
  endDateTime: Date,
  transactionData: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentlogServiceV4I extends Segment{
  eventType: string
  fileName: string
  startDateTime: Date
  endDateTime: Date
  transactionData: string
  
  }
  export const HL7EquipmentlogServiceV4 = mongoose.model<HL7EquipmentlogServiceV4Document> ("HL7EquipmentlogServiceV4", HL7EquipmentlogServiceV4Schema);

