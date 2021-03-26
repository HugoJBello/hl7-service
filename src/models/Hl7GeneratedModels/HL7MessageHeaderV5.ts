
// Generated typescript code of HL7v 2.5 MSH  (Message Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageHeaderV5Document = mongoose.Document & HL7MessageHeaderV5I

const HL7MessageHeaderV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fieldSeparator: String,
  encodingCharacters: String,
  sendingApplication: String,
  sendingFacility: String,
  receivingApplication: String,
  receivingFacility: String,
  dateTimeOfMessage: Date,
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
  
  }, { timestamps: true });
  
export interface HL7MessageHeaderV5I extends Segment{
  fieldSeparator: string
  encodingCharacters: string
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  dateTimeOfMessage: Date
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
  
  }
  export const HL7MessageHeaderV5 = mongoose.model<HL7MessageHeaderV5Document> ("HL7MessageHeaderV5", HL7MessageHeaderV5Schema);

