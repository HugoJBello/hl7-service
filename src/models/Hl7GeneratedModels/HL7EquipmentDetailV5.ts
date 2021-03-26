
// Generated typescript code of HL7v 2.5 EQU  (Equipment Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentDetailV5Document = mongoose.Document & HL7EquipmentDetailV5I

const HL7EquipmentDetailV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  equipmentInstanceIdentifier: String,
  eventDateTime: Date,
  equipmentState: String,
  localRemoteControlState: String,
  alertLevel: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentDetailV5I extends Segment{
  equipmentInstanceIdentifier: string
  eventDateTime: Date
  equipmentState: string
  localRemoteControlState: string
  alertLevel: string
  
  }
  export const HL7EquipmentDetailV5 = mongoose.model<HL7EquipmentDetailV5Document> ("HL7EquipmentDetailV5", HL7EquipmentDetailV5Schema);

