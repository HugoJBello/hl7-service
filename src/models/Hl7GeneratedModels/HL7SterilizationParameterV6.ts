
// Generated typescript code of HL7v 2.6 STZ  (Sterilization Parameter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationParameterV6Document = mongoose.Document & HL7SterilizationParameterV6I

const HL7SterilizationParameterV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sterilizationType: String,
  sterilizationCycle: String,
  maintenanceCycle: String,
  maintenanceType: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationParameterV6I extends Segment{
  sterilizationType: string
  sterilizationCycle: string
  maintenanceCycle: string
  maintenanceType: string
  
  }
  export const HL7SterilizationParameterV6 = mongoose.model<HL7SterilizationParameterV6Document> ("HL7SterilizationParameterV6", HL7SterilizationParameterV6Schema);

