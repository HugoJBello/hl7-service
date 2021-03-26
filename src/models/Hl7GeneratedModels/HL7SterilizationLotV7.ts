
// Generated typescript code of HL7v 2.7 SLT  (Sterilization Lot)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationLotV7Document = mongoose.Document & HL7SterilizationLotV7I

const HL7SterilizationLotV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  deviceNumber: String,
  deviceName: String,
  lotNumber: String,
  itemIdentifier: String,
  barCode: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationLotV7I extends Segment{
  deviceNumber: string
  deviceName: string
  lotNumber: string
  itemIdentifier: string
  barCode: string
  
  }
  export const HL7SterilizationLotV7 = mongoose.model<HL7SterilizationLotV7Document> ("HL7SterilizationLotV7", HL7SterilizationLotV7Schema);

