
// Generated typescript code of HL7v 2.7 PRD  (Provider Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProviderDataV7Document = mongoose.Document & HL7ProviderDataV7I

const HL7ProviderDataV7Schema = new mongoose.Schema({
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
  
export interface HL7ProviderDataV7I extends Segment{
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
  export const HL7ProviderDataV7 = mongoose.model<HL7ProviderDataV7Document> ("HL7ProviderDataV7", HL7ProviderDataV7Schema);

