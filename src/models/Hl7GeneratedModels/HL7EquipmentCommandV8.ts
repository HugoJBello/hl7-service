
// Generated typescript code of HL7v 2.8 ECD  (Equipment Command)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandV8Document = mongoose.Document & HL7EquipmentCommandV8I

const HL7EquipmentCommandV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceCommandNumber: Number,
  remoteControlCommand: String,
  responseRequired: String,
  requestedCompletionTime: String,
  parameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandV8I extends Segment{
  referenceCommandNumber: number
  remoteControlCommand: string
  responseRequired: string
  requestedCompletionTime: string
  parameters: string[]
  
  }
  export const HL7EquipmentCommandV8 = mongoose.model<HL7EquipmentCommandV8Document> ("HL7EquipmentCommandV8", HL7EquipmentCommandV8Schema);

