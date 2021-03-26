
// Generated typescript code of HL7v 2.7 ODT  (Diet Tray Instructions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionsV7Document = mongoose.Document & HL7DietTrayInstructionsV7I

const HL7DietTrayInstructionsV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionsV7I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string
  
  }
  export const HL7DietTrayInstructionsV7 = mongoose.model<HL7DietTrayInstructionsV7Document> ("HL7DietTrayInstructionsV7", HL7DietTrayInstructionsV7Schema);

