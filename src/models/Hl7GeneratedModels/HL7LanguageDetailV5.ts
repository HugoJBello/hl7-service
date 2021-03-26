
// Generated typescript code of HL7v 2.5 LAN  (Language Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LanguageDetailV5Document = mongoose.Document & HL7LanguageDetailV5I

const HL7LanguageDetailV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDLAN: String,
  languageCode: String,
  languageAbilityCode: Array(String),
  languageProficiencyCode: String,
  
  }, { timestamps: true });
  
export interface HL7LanguageDetailV5I extends Segment{
  setIDLAN: string
  languageCode: string
  languageAbilityCode: string[]
  languageProficiencyCode: string
  
  }
  export const HL7LanguageDetailV5 = mongoose.model<HL7LanguageDetailV5Document> ("HL7LanguageDetailV5", HL7LanguageDetailV5Schema);

