
// Generated typescript code of HL7v 2.5 ODS  (Dietary Orders, Supplements, and Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV5Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV5I

const HL7DietaryOrdersSupplementsAndPreferencesV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV5I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV5 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV5Document> ("HL7DietaryOrdersSupplementsAndPreferencesV5", HL7DietaryOrdersSupplementsAndPreferencesV5Schema);

