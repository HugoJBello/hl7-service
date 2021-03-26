
// Generated typescript code of HL7v 2.7 ECD  (Equipment Command)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandV7Document = mongoose.Document & HL7EquipmentCommandV7I

const HL7EquipmentCommandV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceCommandNumber: Number,
  remoteControlCommand: String,
  responseRequired: String,
  requestedCompletionTime: String,
  parameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandV7I extends Segment{
  referenceCommandNumber: number
  remoteControlCommand: string
  responseRequired: string
  requestedCompletionTime: string
  parameters: string[]
  
  }
  export const HL7EquipmentCommandV7 = mongoose.model<HL7EquipmentCommandV7Document> ("HL7EquipmentCommandV7", HL7EquipmentCommandV7Schema);

