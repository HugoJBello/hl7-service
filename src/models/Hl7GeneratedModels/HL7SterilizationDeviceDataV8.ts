
// Generated typescript code of HL7v 2.8 SDD  (Sterilization Device Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationDeviceDataV8Document = mongoose.Document & HL7SterilizationDeviceDataV8I

const HL7SterilizationDeviceDataV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  lotNumber: String,
  deviceNumber: String,
  deviceName: String,
  deviceDataState: String,
  loadStatus: String,
  controlCode: Number,
  operatorName: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationDeviceDataV8I extends Segment{
  lotNumber: string
  deviceNumber: string
  deviceName: string
  deviceDataState: string
  loadStatus: string
  controlCode: number
  operatorName: string
  
  }
  export const HL7SterilizationDeviceDataV8 = mongoose.model<HL7SterilizationDeviceDataV8Document> ("HL7SterilizationDeviceDataV8", HL7SterilizationDeviceDataV8Schema);

