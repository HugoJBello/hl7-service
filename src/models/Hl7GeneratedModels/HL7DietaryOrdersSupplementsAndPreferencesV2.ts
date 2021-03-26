
// Generated typescript code of HL7v 2.2 ODS  (Dietary Orders, Supplements, And Preferences)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietaryOrdersSupplementsAndPreferencesV2Document = mongoose.Document & HL7DietaryOrdersSupplementsAndPreferencesV2I

const HL7DietaryOrdersSupplementsAndPreferencesV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  type: String,
  servicePeriod: Array(String),
  dietSupplementOrPreferenceCode: Array(String),
  textInstruction: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DietaryOrdersSupplementsAndPreferencesV2I extends Segment{
  type: string
  servicePeriod: string[]
  dietSupplementOrPreferenceCode: string[]
  textInstruction: string[]
  
  }
  export const HL7DietaryOrdersSupplementsAndPreferencesV2 = mongoose.model<HL7DietaryOrdersSupplementsAndPreferencesV2Document> ("HL7DietaryOrdersSupplementsAndPreferencesV2", HL7DietaryOrdersSupplementsAndPreferencesV2Schema);

