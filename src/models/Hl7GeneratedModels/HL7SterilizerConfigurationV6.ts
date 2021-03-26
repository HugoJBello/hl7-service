
// Generated typescript code of HL7v 2.6 SCP  (Sterilizer Configuration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizerConfigurationV6Document = mongoose.Document & HL7SterilizerConfigurationV6I

const HL7SterilizerConfigurationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfDecontaminationSterilizationDevices: Number,
  laborCalculationType: String,
  dateFormat: String,
  deviceNumber: String,
  deviceName: String,
  deviceModelName: String,
  deviceType: String,
  lotControl: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizerConfigurationV6I extends Segment{
  numberOfDecontaminationSterilizationDevices: number
  laborCalculationType: string
  dateFormat: string
  deviceNumber: string
  deviceName: string
  deviceModelName: string
  deviceType: string
  lotControl: string
  
  }
  export const HL7SterilizerConfigurationV6 = mongoose.model<HL7SterilizerConfigurationV6Document> ("HL7SterilizerConfigurationV6", HL7SterilizerConfigurationV6Schema);

