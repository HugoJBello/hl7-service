
// Generated typescript code of HL7v 2.6 ECD  (Equipment Command)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandV6Document = mongoose.Document & HL7EquipmentCommandV6I

const HL7EquipmentCommandV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceCommandNumber: Number,
  remoteControlCommand: String,
  responseRequired: String,
  requestedCompletionTime: String,
  parameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandV6I extends Segment{
  referenceCommandNumber: number
  remoteControlCommand: string
  responseRequired: string
  requestedCompletionTime: string
  parameters: string[]
  
  }
  export const HL7EquipmentCommandV6 = mongoose.model<HL7EquipmentCommandV6Document> ("HL7EquipmentCommandV6", HL7EquipmentCommandV6Schema);

