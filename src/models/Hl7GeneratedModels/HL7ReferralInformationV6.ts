
// Generated typescript code of HL7v 2.6 RF1  (Referral Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ReferralInformationV6Document = mongoose.Document & HL7ReferralInformationV6I

const HL7ReferralInformationV6Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7ReferralInformationV6I extends Segment{
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
  
  }
  export const HL7ReferralInformationV6 = mongoose.model<HL7ReferralInformationV6Document> ("HL7ReferralInformationV6", HL7ReferralInformationV6Schema);

