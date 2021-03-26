
// Generated typescript code of HL7v 2.4 ECR  (Equipment Command Response)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandResponseV4Document = mongoose.Document & HL7EquipmentCommandResponseV4I

const HL7EquipmentCommandResponseV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  commandResponse: String,
  dateTimeCompleted: Date,
  commandResponseParameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandResponseV4I extends Segment{
  commandResponse: string
  dateTimeCompleted: Date
  commandResponseParameters: string[]
  
  }
  export const HL7EquipmentCommandResponseV4 = mongoose.model<HL7EquipmentCommandResponseV4Document> ("HL7EquipmentCommandResponseV4", HL7EquipmentCommandResponseV4Schema);

