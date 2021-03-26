
// Generated typescript code of HL7v 2.8 ECR  (Equipment Command Response)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandResponseV8Document = mongoose.Document & HL7EquipmentCommandResponseV8I

const HL7EquipmentCommandResponseV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  commandResponse: String,
  dateTimeCompleted: String,
  commandResponseParameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandResponseV8I extends Segment{
  commandResponse: string
  dateTimeCompleted: string
  commandResponseParameters: string[]
  
  }
  export const HL7EquipmentCommandResponseV8 = mongoose.model<HL7EquipmentCommandResponseV8Document> ("HL7EquipmentCommandResponseV8", HL7EquipmentCommandResponseV8Schema);

