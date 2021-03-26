
// Generated typescript code of HL7v 2.7 RF1  (Referral Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ReferralInformationV7Document = mongoose.Document & HL7ReferralInformationV7I

const HL7ReferralInformationV7Schema = new mongoose.Schema({
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
  
export interface HL7ReferralInformationV7I extends Segment{
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
  export const HL7ReferralInformationV7 = mongoose.model<HL7ReferralInformationV7Document> ("HL7ReferralInformationV7", HL7ReferralInformationV7Schema);

