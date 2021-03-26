
// Generated typescript code of HL7v 2.8 MSH  (Message Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageHeaderV8Document = mongoose.Document & HL7MessageHeaderV8I

const HL7MessageHeaderV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fieldSeparator: String,
  encodingCharacters: String,
  sendingApplication: String,
  sendingFacility: String,
  receivingApplication: String,
  receivingFacility: String,
  dateTimeOfMessage: String,
  security: String,
  messageType: String,
  messageControlId: String,
  processingId: String,
  versionId: String,
  sequenceNumber: Number,
  continuationPointer: String,
  acceptAcknowledgmentType: String,
  applicationAcknowledgmentType: String,
  countryCode: String,
  characterSet: Array(String),
  principalLanguageOfMessage: String,
  alternateCharacterSetHandlingScheme: String,
  messageProfileIdentifier: Array(String),
  sendingResponsibleOrganization: String,
  receivingResponsibleOrganization: String,
  sendingNetworkAddress: String,
  receivingNetworkAddress: String,
  
  }, { timestamps: true });
  
export interface HL7MessageHeaderV8I extends Segment{
  fieldSeparator: string
  encodingCharacters: string
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  dateTimeOfMessage: string
  security: string
  messageType: string
  messageControlId: string
  processingId: string
  versionId: string
  sequenceNumber: number
  continuationPointer: string
  acceptAcknowledgmentType: string
  applicationAcknowledgmentType: string
  countryCode: string
  characterSet: string[]
  principalLanguageOfMessage: string
  alternateCharacterSetHandlingScheme: string
  messageProfileIdentifier: string[]
  sendingResponsibleOrganization: string
  receivingResponsibleOrganization: string
  sendingNetworkAddress: string
  receivingNetworkAddress: string
  
  }
  export const HL7MessageHeaderV8 = mongoose.model<HL7MessageHeaderV8Document> ("HL7MessageHeaderV8", HL7MessageHeaderV8Schema);

