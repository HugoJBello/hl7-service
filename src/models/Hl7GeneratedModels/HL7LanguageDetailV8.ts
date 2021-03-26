
// Generated typescript code of HL7v 2.8 LAN  (Language Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LanguageDetailV8Document = mongoose.Document & HL7LanguageDetailV8I

const HL7LanguageDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdLan: String,
  languageCode: String,
  languageAbilityCode: Array(String),
  languageProficiencyCode: String,
  
  }, { timestamps: true });
  
export interface HL7LanguageDetailV8I extends Segment{
  setIdLan: string
  languageCode: string
  languageAbilityCode: string[]
  languageProficiencyCode: string
  
  }
  export const HL7LanguageDetailV8 = mongoose.model<HL7LanguageDetailV8Document> ("HL7LanguageDetailV8", HL7LanguageDetailV8Schema);

