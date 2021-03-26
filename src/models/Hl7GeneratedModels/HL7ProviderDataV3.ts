
// Generated typescript code of HL7v 2.3 PRD  (Provider Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProviderDataV3Document = mongoose.Document & HL7ProviderDataV3I

const HL7ProviderDataV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  role: Array(String),
  providerName: Array(String),
  providerAddress: String,
  providerLocation: String,
  providerCommunicationInformation: Array(String),
  preferredMethodOfContact: String,
  providerIdentifiers: Array(String),
  effectiveStartDateOfRole: Date,
  effectiveEndDateOfRole: Date,
  
  }, { timestamps: true });
  
export interface HL7ProviderDataV3I extends Segment{
  role: string[]
  providerName: string[]
  providerAddress: string
  providerLocation: string
  providerCommunicationInformation: string[]
  preferredMethodOfContact: string
  providerIdentifiers: string[]
  effectiveStartDateOfRole: Date
  effectiveEndDateOfRole: Date
  
  }
  export const HL7ProviderDataV3 = mongoose.model<HL7ProviderDataV3Document> ("HL7ProviderDataV3", HL7ProviderDataV3Schema);

