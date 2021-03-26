
// Generated typescript code of HL7v 2.3 ODS  (Dietary orders, supplements, and preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV3Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV3I

const HL7DietaryOrdersSupplementsAndPreferencesV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV3I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV3 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV3Document> ("HL7DietaryOrdersSupplementsAndPreferencesV3", HL7DietaryOrdersSupplementsAndPreferencesV3Schema);

