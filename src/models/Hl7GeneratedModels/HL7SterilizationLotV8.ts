
// Generated typescript code of HL7v 2.8 SLT  (Sterilization Lot)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationLotV8Document = mongoose.Document & HL7SterilizationLotV8I

const HL7SterilizationLotV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  deviceNumber: String,
  deviceName: String,
  lotNumber: String,
  itemIdentifier: String,
  barCode: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationLotV8I extends Segment{
  deviceNumber: string
  deviceName: string
  lotNumber: string
  itemIdentifier: string
  barCode: string
  
  }
  export const HL7SterilizationLotV8 = mongoose.model<HL7SterilizationLotV8Document> ("HL7SterilizationLotV8", HL7SterilizationLotV8Schema);

