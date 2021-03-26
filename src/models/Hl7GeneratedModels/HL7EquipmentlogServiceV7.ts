
// Generated typescript code of HL7v 2.7 EQP  (Equipment/log Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentlogServiceV7Document = mongoose.Document & HL7EquipmentlogServiceV7I

const HL7EquipmentlogServiceV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventType: String,
  fileName: String,
  startDateTime: String,
  endDateTime: String,
  transactionData: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentlogServiceV7I extends Segment{
  eventType: string
  fileName: string
  startDateTime: string
  endDateTime: string
  transactionData: string
  
  }
  export const HL7EquipmentlogServiceV7 = mongoose.model<HL7EquipmentlogServiceV7Document> ("HL7EquipmentlogServiceV7", HL7EquipmentlogServiceV7Schema);

