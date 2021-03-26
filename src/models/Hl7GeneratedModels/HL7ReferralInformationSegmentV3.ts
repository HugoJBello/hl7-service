
// Generated typescript code of HL7v 2.3 RF1  (Referral Information Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ReferralInformationSegmentV3Document = mongoose.Document & HL7ReferralInformationSegmentV3I

const HL7ReferralInformationSegmentV3Schema = new mongoose.Schema({
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
  
export interface HL7ReferralInformationSegmentV3I extends Segment{
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
  export const HL7ReferralInformationSegmentV3 = mongoose.model<HL7ReferralInformationSegmentV3Document> ("HL7ReferralInformationSegmentV3", HL7ReferralInformationSegmentV3Schema);

