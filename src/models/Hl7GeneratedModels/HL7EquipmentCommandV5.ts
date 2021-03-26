
// Generated typescript code of HL7v 2.5 ECD  (Equipment Command)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandV5Document = mongoose.Document & HL7EquipmentCommandV5I

const HL7EquipmentCommandV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceCommandNumber: Number,
  remoteControlCommand: String,
  responseRequired: String,
  requestedCompletionTime: String,
  parameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandV5I extends Segment{
  referenceCommandNumber: number
  remoteControlCommand: string
  responseRequired: string
  requestedCompletionTime: string
  parameters: string[]
  
  }
  export const HL7EquipmentCommandV5 = mongoose.model<HL7EquipmentCommandV5Document> ("HL7EquipmentCommandV5", HL7EquipmentCommandV5Schema);

