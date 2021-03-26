
// Generated typescript code of HL7v 2.7 EQU  (Equipment Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentDetailV7Document = mongoose.Document & HL7EquipmentDetailV7I

const HL7EquipmentDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  equipmentInstanceIdentifier: String,
  eventDateTime: String,
  equipmentState: String,
  localRemoteControlState: String,
  alertLevel: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentDetailV7I extends Segment{
  equipmentInstanceIdentifier: string
  eventDateTime: string
  equipmentState: string
  localRemoteControlState: string
  alertLevel: string
  
  }
  export const HL7EquipmentDetailV7 = mongoose.model<HL7EquipmentDetailV7Document> ("HL7EquipmentDetailV7", HL7EquipmentDetailV7Schema);

