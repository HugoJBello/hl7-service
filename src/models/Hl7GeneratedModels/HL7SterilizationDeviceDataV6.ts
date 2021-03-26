
// Generated typescript code of HL7v 2.6 SDD  (Sterilization Device Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationDeviceDataV6Document = mongoose.Document & HL7SterilizationDeviceDataV6I

const HL7SterilizationDeviceDataV6Schema = new mongoose.Schema({
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
  
export interface HL7SterilizationDeviceDataV6I extends Segment{
  lotNumber: string
  deviceNumber: string
  deviceName: string
  deviceDataState: string
  loadStatus: string
  controlCode: number
  operatorName: string
  
  }
  export const HL7SterilizationDeviceDataV6 = mongoose.model<HL7SterilizationDeviceDataV6Document> ("HL7SterilizationDeviceDataV6", HL7SterilizationDeviceDataV6Schema);

