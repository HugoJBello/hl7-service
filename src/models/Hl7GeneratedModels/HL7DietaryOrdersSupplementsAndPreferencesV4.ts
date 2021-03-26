
// Generated typescript code of HL7v 2.4 ODS  (Dietary Orders, Supplements, and Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV4Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV4I

const HL7DietaryOrdersSupplementsAndPreferencesV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV4I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV4 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV4Document> ("HL7DietaryOrdersSupplementsAndPreferencesV4", HL7DietaryOrdersSupplementsAndPreferencesV4Schema);

