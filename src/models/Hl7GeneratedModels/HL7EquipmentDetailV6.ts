
// Generated typescript code of HL7v 2.6 EQU  (Equipment Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7EquipmentDetailV6Document = mongoose.Document & HL7EquipmentDetailV6I

const HL7EquipmentDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  equipmentInstanceIdentifier: String,
  eventDateTime: String,
  equipmentState: String,
  localRemoteControlState: String,
  alertLevel: String,
  
  }, { timestamps: true });
  
export interface HL7EquipmentDetailV6I extends Segment{
  equipmentInstanceIdentifier: string
  eventDateTime: string
  equipmentState: string
  localRemoteControlState: string
  alertLevel: string
  
  }
  export const HL7EquipmentDetailV6 = mongoose.model<HL7EquipmentDetailV6Document> ("HL7EquipmentDetailV6", HL7EquipmentDetailV6Schema);

