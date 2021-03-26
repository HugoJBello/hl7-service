
// Generated typescript code of HL7v 2.6 ODS  (Dietary Orders, Supplements, and Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV6Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV6I

const HL7DietaryOrdersSupplementsAndPreferencesV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV6I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV6 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV6Document> ("HL7DietaryOrdersSupplementsAndPreferencesV6", HL7DietaryOrdersSupplementsAndPreferencesV6Schema);

