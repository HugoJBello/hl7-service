
// Generated typescript code of HL7v 2.5 PRD  (Provider Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProviderDataV5Document = mongoose.Document & HL7ProviderDataV5I

const HL7ProviderDataV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerRole: Array(String),
  providerName: Array(String),
  providerAddress: Array(String),
  providerLocation: String,
  providerCommunicationInformation: Array(String),
  preferredMethodOfContact: String,
  providerIdentifiers: Array(String),
  effectiveStartDateOfProviderRole: Date,
  effectiveEndDateOfProviderRole: Date,
  
  }, { timestamps: true });
  
export interface HL7ProviderDataV5I extends Segment{
  providerRole: string[]
  providerName: string[]
  providerAddress: string[]
  providerLocation: string
  providerCommunicationInformation: string[]
  preferredMethodOfContact: string
  providerIdentifiers: string[]
  effectiveStartDateOfProviderRole: Date
  effectiveEndDateOfProviderRole: Date
  
  }
  export const HL7ProviderDataV5 = mongoose.model<HL7ProviderDataV5Document> ("HL7ProviderDataV5", HL7ProviderDataV5Schema);

