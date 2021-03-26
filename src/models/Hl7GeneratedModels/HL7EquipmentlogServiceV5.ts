
// Generated typescript code of HL7v 2.5 EQP  (Equipment/log Service)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentlogServiceV5Document = mongoose.Document & HL7EquipmentlogServiceV5I

const HL7EquipmentlogServiceV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventType: String,
  fileName: String,
  startDateTime: Date,
  endDateTime: Date,
  transactionData: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentlogServiceV5I extends Segment{
  eventType: string
  fileName: string
  startDateTime: Date
  endDateTime: Date
  transactionData: string
  
  }
  export const HL7EquipmentlogServiceV5 = mongoose.model<HL7EquipmentlogServiceV5Document> ("HL7EquipmentlogServiceV5", HL7EquipmentlogServiceV5Schema);

