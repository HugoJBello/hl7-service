
// Generated typescript code of HL7v 2.7 CON  (Consent Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ConsentSegmentV7Document = mongoose.Document & HL7ConsentSegmentV7I

const HL7ConsentSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCon: String,
  consentType: String,
  consentFormIdAndVersion: String,
  consentFormNumber: String,
  consentText: Array(String),
  subjectspecificConsentText: Array(String),
  consentBackgroundInformation: Array(String),
  subjectspecificConsentBackgroundText: Array(String),
  consenterimposedLimitations: Array(String),
  consentMode: String,
  consentStatus: String,
  consentDiscussionDateTime: String,
  consentDecisionDateTime: String,
  consentEffectiveDateTime: String,
  consentEndDateTime: String,
  subjectCompetenceIndicator: String,
  translatorAssistanceIndicator: String,
  languageTranslatedTo: String,
  informationalMaterialSuppliedIndicator: String,
  consentBypassReason: String,
  consentDisclosureLevel: String,
  consentNondisclosureReason: String,
  nonsubjectConsenterReason: String,
  consenterId: Array(String),
  relationshipToSubject: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ConsentSegmentV7I extends Segment{
  setIdCon: string
  consentType: string
  consentFormIdAndVersion: string
  consentFormNumber: string
  consentText: string[]
  subjectspecificConsentText: string[]
  consentBackgroundInformation: string[]
  subjectspecificConsentBackgroundText: string[]
  consenterimposedLimitations: string[]
  consentMode: string
  consentStatus: string
  consentDiscussionDateTime: string
  consentDecisionDateTime: string
  consentEffectiveDateTime: string
  consentEndDateTime: string
  subjectCompetenceIndicator: string
  translatorAssistanceIndicator: string
  languageTranslatedTo: string
  informationalMaterialSuppliedIndicator: string
  consentBypassReason: string
  consentDisclosureLevel: string
  consentNondisclosureReason: string
  nonsubjectConsenterReason: string
  consenterId: string[]
  relationshipToSubject: string[]
  
  }
  export const HL7ConsentSegmentV7 = mongoose.model<HL7ConsentSegmentV7Document> ("HL7ConsentSegmentV7", HL7ConsentSegmentV7Schema);

