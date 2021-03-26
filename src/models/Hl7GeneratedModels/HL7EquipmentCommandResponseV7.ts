
// Generated typescript code of HL7v 2.7 ECR  (Equipment Command Response)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandResponseV7Document = mongoose.Document & HL7EquipmentCommandResponseV7I

const HL7EquipmentCommandResponseV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  commandResponse: String,
  dateTimeCompleted: String,
  commandResponseParameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandResponseV7I extends Segment{
  commandResponse: string
  dateTimeCompleted: string
  commandResponseParameters: string[]
  
  }
  export const HL7EquipmentCommandResponseV7 = mongoose.model<HL7EquipmentCommandResponseV7Document> ("HL7EquipmentCommandResponseV7", HL7EquipmentCommandResponseV7Schema);

