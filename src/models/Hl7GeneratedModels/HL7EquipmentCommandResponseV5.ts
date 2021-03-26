
// Generated typescript code of HL7v 2.5 ECR  (Equipment Command Response)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentCommandResponseV5Document = mongoose.Document & HL7EquipmentCommandResponseV5I

const HL7EquipmentCommandResponseV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  commandResponse: String,
  dateTimeCompleted: Date,
  commandResponseParameters: Array(String),
  
  }, { timestamps: true });
  
export interface HL7EquipmentCommandResponseV5I extends Segment{
  commandResponse: string
  dateTimeCompleted: Date
  commandResponseParameters: string[]
  
  }
  export const HL7EquipmentCommandResponseV5 = mongoose.model<HL7EquipmentCommandResponseV5Document> ("HL7EquipmentCommandResponseV5", HL7EquipmentCommandResponseV5Schema);

