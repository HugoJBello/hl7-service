
// Generated typescript code of HL7v 2.6 LAN  (Language Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LanguageDetailV6Document = mongoose.Document & HL7LanguageDetailV6I

const HL7LanguageDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDLAN: String,
  languageCode: String,
  languageAbilityCode: Array(String),
  languageProficiencyCode: String,
  
  }, { timestamps: true });
  
export interface HL7LanguageDetailV6I extends Segment{
  setIDLAN: string
  languageCode: string
  languageAbilityCode: string[]
  languageProficiencyCode: string
  
  }
  export const HL7LanguageDetailV6 = mongoose.model<HL7LanguageDetailV6Document> ("HL7LanguageDetailV6", HL7LanguageDetailV6Schema);

