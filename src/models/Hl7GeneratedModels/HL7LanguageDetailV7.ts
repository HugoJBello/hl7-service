
// Generated typescript code of HL7v 2.7 LAN  (Language Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LanguageDetailV7Document = mongoose.Document & HL7LanguageDetailV7I

const HL7LanguageDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdLan: String,
  languageCode: String,
  languageAbilityCode: Array(String),
  languageProficiencyCode: String,
  
  }, { timestamps: true });
  
export interface HL7LanguageDetailV7I extends Segment{
  setIdLan: string
  languageCode: string
  languageAbilityCode: string[]
  languageProficiencyCode: string
  
  }
  export const HL7LanguageDetailV7 = mongoose.model<HL7LanguageDetailV7Document> ("HL7LanguageDetailV7", HL7LanguageDetailV7Schema);

