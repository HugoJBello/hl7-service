
// Generated typescript code of HL7v 2.6 MSH  (Message Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageHeaderV6Document = mongoose.Document & HL7MessageHeaderV6I

const HL7MessageHeaderV6Schema = new mongoose.Schema({
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
  messageControlID: String,
  processingID: String,
  versionID: String,
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
  
export interface HL7MessageHeaderV6I extends Segment{
  fieldSeparator: string
  encodingCharacters: string
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  dateTimeOfMessage: string
  security: string
  messageType: string
  messageControlID: string
  processingID: string
  versionID: string
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
  export const HL7MessageHeaderV6 = mongoose.model<HL7MessageHeaderV6Document> ("HL7MessageHeaderV6", HL7MessageHeaderV6Schema);

