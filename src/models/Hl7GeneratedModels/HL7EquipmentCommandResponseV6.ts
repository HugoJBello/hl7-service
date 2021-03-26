
// Generated typescript code of HL7v 2.6 ECR  (Equipment Command Response)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandResponseV6Document = mongoose.Document & HL7EquipmentCommandResponseV6I

const HL7EquipmentCommandResponseV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  commandResponse: String,
  dateTimeCompleted: String,
  commandResponseParameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandResponseV6I extends Segment{
  commandResponse: string
  dateTimeCompleted: string
  commandResponseParameters: string[]
  
  }
  export const HL7EquipmentCommandResponseV6 = mongoose.model<HL7EquipmentCommandResponseV6Document> ("HL7EquipmentCommandResponseV6", HL7EquipmentCommandResponseV6Schema);

