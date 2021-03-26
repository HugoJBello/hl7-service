
// Generated typescript code of HL7v 2.7 STZ  (Sterilization Parameter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SterilizationParameterV7Document = mongoose.Document & HL7SterilizationParameterV7I

const HL7SterilizationParameterV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sterilizationType: String,
  sterilizationCycle: String,
  maintenanceCycle: String,
  maintenanceType: String,
  
  }, { timestamps: true });
  
export interface HL7SterilizationParameterV7I extends Segment{
  sterilizationType: string
  sterilizationCycle: string
  maintenanceCycle: string
  maintenanceType: string
  
  }
  export const HL7SterilizationParameterV7 = mongoose.model<HL7SterilizationParameterV7Document> ("HL7SterilizationParameterV7", HL7SterilizationParameterV7Schema);

