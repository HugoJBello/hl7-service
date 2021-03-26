
// Generated typescript code of HL7v 2.4 ECD  (Equipment Command)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandV4Document = mongoose.Document & HL7EquipmentCommandV4I

const HL7EquipmentCommandV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceCommandNumber: Number,
  remoteControlCommand: String,
  responseRequired: String,
  requestedCompletionTime: String,
  parameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandV4I extends Segment{
  referenceCommandNumber: number
  remoteControlCommand: string
  responseRequired: string
  requestedCompletionTime: string
  parameters: string[]
  
  }
  export const HL7EquipmentCommandV4 = mongoose.model<HL7EquipmentCommandV4Document> ("HL7EquipmentCommandV4", HL7EquipmentCommandV4Schema);

