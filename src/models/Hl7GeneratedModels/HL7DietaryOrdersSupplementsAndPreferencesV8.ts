
// Generated typescript code of HL7v 2.8 ODS  (Dietary Orders, Supplements, And Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV8Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV8I

const HL7DietaryOrdersSupplementsAndPreferencesV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV8I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV8 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV8Document> ("HL7DietaryOrdersSupplementsAndPreferencesV8", HL7DietaryOrdersSupplementsAndPreferencesV8Schema);

