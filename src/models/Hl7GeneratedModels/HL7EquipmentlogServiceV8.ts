
// Generated typescript code of HL7v 2.8 EQP  (Equipment/log Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentlogServiceV8Document = mongoose.Document & HL7EquipmentlogServiceV8I

const HL7EquipmentlogServiceV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventType: String,
  fileName: String,
  startDateTime: String,
  endDateTime: String,
  transactionData: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentlogServiceV8I extends Segment{
  eventType: string
  fileName: string
  startDateTime: string
  endDateTime: string
  transactionData: string
  
  }
  export const HL7EquipmentlogServiceV8 = mongoose.model<HL7EquipmentlogServiceV8Document> ("HL7EquipmentlogServiceV8", HL7EquipmentlogServiceV8Schema);

