
// Generated typescript code of HL7v 2.4 EQU  (Equipment Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentDetailV4Document = mongoose.Document & HL7EquipmentDetailV4I

const HL7EquipmentDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  equipmentInstanceIdentifier: String,
  eventDateTime: Date,
  equipmentState: String,
  localRemoteControlState: String,
  alertLevel: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentDetailV4I extends Segment{
  equipmentInstanceIdentifier: string
  eventDateTime: Date
  equipmentState: string
  localRemoteControlState: string
  alertLevel: string
  
  }
  export const HL7EquipmentDetailV4 = mongoose.model<HL7EquipmentDetailV4Document> ("HL7EquipmentDetailV4", HL7EquipmentDetailV4Schema);

