
// Generated typescript code of HL7v 2.7 ODS  (Dietary Orders, Supplements, And Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV7Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV7I

const HL7DietaryOrdersSupplementsAndPreferencesV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV7I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV7 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV7Document> ("HL7DietaryOrdersSupplementsAndPreferencesV7", HL7DietaryOrdersSupplementsAndPreferencesV7Schema);

