
// Generated typescript code of HL7v 2.8 STZ  (Sterilization Parameter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationParameterV8Document = mongoose.Document & HL7SterilizationParameterV8I

const HL7SterilizationParameterV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sterilizationType: String,
  sterilizationCycle: String,
  maintenanceCycle: String,
  maintenanceType: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationParameterV8I extends Segment{
  sterilizationType: string
  sterilizationCycle: string
  maintenanceCycle: string
  maintenanceType: string
  
  }
  export const HL7SterilizationParameterV8 = mongoose.model<HL7SterilizationParameterV8Document> ("HL7SterilizationParameterV8", HL7SterilizationParameterV8Schema);

