
// Generated typescript code of HL7v 2.4 RF1  (Referral Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ReferralInformationV4Document = mongoose.Document & HL7ReferralInformationV4I

const HL7ReferralInformationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referralStatus: String,
  referralPriority: String,
  referralType: String,
  referralDisposition: Array(String),
  referralCategory: String,
  originatingReferralIdentifier: String,
  effectiveDate: Date,
  expirationDate: Date,
  processDate: Date,
  referralReason: Array(String),
  externalReferralIdentifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ReferralInformationV4I extends Segment{
  referralStatus: string
  referralPriority: string
  referralType: string
  referralDisposition: string[]
  referralCategory: string
  originatingReferralIdentifier: string
  effectiveDate: Date
  expirationDate: Date
  processDate: Date
  referralReason: string[]
  externalReferralIdentifier: string[]
  
  }
  export const HL7ReferralInformationV4 = mongoose.model<HL7ReferralInformationV4Document> ("HL7ReferralInformationV4", HL7ReferralInformationV4Schema);

