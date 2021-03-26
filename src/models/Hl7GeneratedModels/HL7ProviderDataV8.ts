
// Generated typescript code of HL7v 2.8 PRD  (Provider Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProviderDataV8Document = mongoose.Document & HL7ProviderDataV8I

const HL7ProviderDataV8Schema = new mongoose.Schema({
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
  effectiveStartDateOfProviderRole: String,
  effectiveEndDateOfProviderRole: Array(String),
  providerOrganizationNameAndIdentifier: String,
  providerOrganizationAddress: Array(String),
  providerOrganizationLocationInformation: Array(String),
  providerOrganizationCommunicationInformation: Array(String),
  providerOrganizationMethodOfContact: String,
  
  }, { timestamps: true });
  
export interface HL7ProviderDataV8I extends Segment{
  providerRole: string[]
  providerName: string[]
  providerAddress: string[]
  providerLocation: string
  providerCommunicationInformation: string[]
  preferredMethodOfContact: string
  providerIdentifiers: string[]
  effectiveStartDateOfProviderRole: string
  effectiveEndDateOfProviderRole: string[]
  providerOrganizationNameAndIdentifier: string
  providerOrganizationAddress: string[]
  providerOrganizationLocationInformation: string[]
  providerOrganizationCommunicationInformation: string[]
  providerOrganizationMethodOfContact: string
  
  }
  export const HL7ProviderDataV8 = mongoose.model<HL7ProviderDataV8Document> ("HL7ProviderDataV8", HL7ProviderDataV8Schema);

