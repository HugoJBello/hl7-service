
// Generated typescript code of HL7v 2.5 ODT  (Diet Tray Instructions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionsV5Document = mongoose.Document & HL7DietTrayInstructionsV5I

const HL7DietTrayInstructionsV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionsV5I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string
  
  }
  export const HL7DietTrayInstructionsV5 = mongoose.model<HL7DietTrayInstructionsV5Document> ("HL7DietTrayInstructionsV5", HL7DietTrayInstructionsV5Schema);

