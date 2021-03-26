
// Generated typescript code of HL7v 2.5 CON  (Consent)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ConsentV5Document = mongoose.Document & HL7ConsentV5I

const HL7ConsentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCON: String,
  consentType: String,
  consentFormID: String,
  consentFormNumber: String,
  consentText: Array(String),
  subjectspecificConsentText: Array(String),
  consentBackground: Array(String),
  subjectspecificConsentBackground: Array(String),
  consenterimposedLimitations: Array(String),
  consentMode: String,
  consentStatus: String,
  consentDiscussionDateTime: Date,
  consentDecisionDateTime: Date,
  consentEffectiveDateTime: Date,
  consentEndDateTime: Date,
  subjectCompetenceIndicator: String,
  translatorAssistanceIndicator: String,
  languageTranslatedTo: String,
  informationalMaterialSuppliedIndicator: String,
  consentBypassReason: String,
  consentDisclosureLevel: String,
  consentNondisclosureReason: String,
  nonsubjectConsenterReason: String,
  consenterID: Array(String),
  relationshipToSubjectTable: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ConsentV5I extends Segment{
  setIDCON: string
  consentType: string
  consentFormID: string
  consentFormNumber: string
  consentText: string[]
  subjectspecificConsentText: string[]
  consentBackground: string[]
  subjectspecificConsentBackground: string[]
  consenterimposedLimitations: string[]
  consentMode: string
  consentStatus: string
  consentDiscussionDateTime: Date
  consentDecisionDateTime: Date
  consentEffectiveDateTime: Date
  consentEndDateTime: Date
  subjectCompetenceIndicator: string
  translatorAssistanceIndicator: string
  languageTranslatedTo: string
  informationalMaterialSuppliedIndicator: string
  consentBypassReason: string
  consentDisclosureLevel: string
  consentNondisclosureReason: string
  nonsubjectConsenterReason: string
  consenterID: string[]
  relationshipToSubjectTable: string[]
  
  }
  export const HL7ConsentV5 = mongoose.model<HL7ConsentV5Document> ("HL7ConsentV5", HL7ConsentV5Schema);

