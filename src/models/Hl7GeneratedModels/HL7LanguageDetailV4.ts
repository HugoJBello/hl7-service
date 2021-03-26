
// Generated typescript code of HL7v 2.4 LAN  (Language Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LanguageDetailV4Document = mongoose.Document & HL7LanguageDetailV4I

const HL7LanguageDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDLAN: String,
  languageCode: String,
  languageAbilityCode: Array(String),
  languageProficiencyCode: String,
  
  }, { timestamps: true });
  
export interface HL7LanguageDetailV4I extends Segment{
  setIDLAN: string
  languageCode: string
  languageAbilityCode: string[]
  languageProficiencyCode: string
  
  }
  export const HL7LanguageDetailV4 = mongoose.model<HL7LanguageDetailV4Document> ("HL7LanguageDetailV4", HL7LanguageDetailV4Schema);

