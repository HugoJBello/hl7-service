
// Generated typescript code of HL7v 2.8 EQU  (Equipment Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentDetailV8Document = mongoose.Document & HL7EquipmentDetailV8I

const HL7EquipmentDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  equipmentInstanceIdentifier: String,
  eventDateTime: String,
  equipmentState: String,
  localRemoteControlState: String,
  alertLevel: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentDetailV8I extends Segment{
  equipmentInstanceIdentifier: string
  eventDateTime: string
  equipmentState: string
  localRemoteControlState: string
  alertLevel: string
  
  }
  export const HL7EquipmentDetailV8 = mongoose.model<HL7EquipmentDetailV8Document> ("HL7EquipmentDetailV8", HL7EquipmentDetailV8Schema);

