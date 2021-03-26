
// Generated typescript code of HL7v 2.8 SCP  (Sterilizer Configuration (anti-microbial Devices))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizerConfigurationAntimicrobialDevicesV8Document = mongoose.Document & HL7SterilizerConfigurationAntimicrobialDevicesV8I

const HL7SterilizerConfigurationAntimicrobialDevicesV8Schema = new mongoose.Schema({
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
  
export interface HL7SterilizerConfigurationAntimicrobialDevicesV8I extends Segment{
  numberOfDecontaminationSterilizationDevices: number
  laborCalculationType: string
  dateFormat: string
  deviceNumber: string
  deviceName: string
  deviceModelName: string
  deviceType: string
  lotControl: string
  
  }
  export const HL7SterilizerConfigurationAntimicrobialDevicesV8 = mongoose.model<HL7SterilizerConfigurationAntimicrobialDevicesV8Document> ("HL7SterilizerConfigurationAntimicrobialDevicesV8", HL7SterilizerConfigurationAntimicrobialDevicesV8Schema);

