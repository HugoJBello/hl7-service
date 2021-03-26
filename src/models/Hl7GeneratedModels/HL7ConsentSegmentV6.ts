
// Generated typescript code of HL7v 2.6 CON  (Consent Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ConsentSegmentV6Document = mongoose.Document & HL7ConsentSegmentV6I

const HL7ConsentSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCON: String,
  consentType: String,
  consentFormIDAndVersion: String,
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
  consenterID: Array(String),
  relationshipToSubject: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ConsentSegmentV6I extends Segment{
  setIDCON: string
  consentType: string
  consentFormIDAndVersion: string
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
  consenterID: string[]
  relationshipToSubject: string[]
  
  }
  export const HL7ConsentSegmentV6 = mongoose.model<HL7ConsentSegmentV6Document> ("HL7ConsentSegmentV6", HL7ConsentSegmentV6Schema);

