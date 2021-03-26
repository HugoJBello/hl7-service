
// Generated typescript code of HL7v 2.8 RF1  (Referral Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ReferralInformationV8Document = mongoose.Document & HL7ReferralInformationV8I

const HL7ReferralInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referralStatus: String,
  referralPriority: String,
  referralType: String,
  referralDisposition: Array(String),
  referralCategory: String,
  originatingReferralIdentifier: String,
  effectiveDate: String,
  expirationDate: String,
  processDate: String,
  referralReason: Array(String),
  externalReferralIdentifier: Array(String),
  referralDocumentationCompletionStatus: String,
  plannedTreatmentStopDate: String,
  referralReasonText: String,
  numberOfAuthorizedTreatmentsUnits: String,
  numberOfUsedTreatmentsUnits: String,
  numberOfScheduleTreatmentsUnits: String,
  remainingBenefitAmount: String,
  authorizedProvider: String,
  authorizedHealthProfessional: String,
  sourceText: String,
  sourceDate: String,
  sourcePhone: String,
  comment: String,
  actionCode: String,
  
  }, { timestamps: true });
  
export interface HL7ReferralInformationV8I extends Segment{
  referralStatus: string
  referralPriority: string
  referralType: string
  referralDisposition: string[]
  referralCategory: string
  originatingReferralIdentifier: string
  effectiveDate: string
  expirationDate: string
  processDate: string
  referralReason: string[]
  externalReferralIdentifier: string[]
  referralDocumentationCompletionStatus: string
  plannedTreatmentStopDate: string
  referralReasonText: string
  numberOfAuthorizedTreatmentsUnits: string
  numberOfUsedTreatmentsUnits: string
  numberOfScheduleTreatmentsUnits: string
  remainingBenefitAmount: string
  authorizedProvider: string
  authorizedHealthProfessional: string
  sourceText: string
  sourceDate: string
  sourcePhone: string
  comment: string
  actionCode: string
  
  }
  export const HL7ReferralInformationV8 = mongoose.model<HL7ReferralInformationV8Document> ("HL7ReferralInformationV8", HL7ReferralInformationV8Schema);

