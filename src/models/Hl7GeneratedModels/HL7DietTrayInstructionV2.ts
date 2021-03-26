
// Generated typescript code of HL7v 2.2 ODT  (Diet Tray Instruction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionV2Document = mongoose.Document & HL7DietTrayInstructionV2I

const HL7DietTrayInstructionV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionV2I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string[]
  
  }
  export const HL7DietTrayInstructionV2 = mongoose.model<HL7DietTrayInstructionV2Document> ("HL7DietTrayInstructionV2", HL7DietTrayInstructionV2Schema);

