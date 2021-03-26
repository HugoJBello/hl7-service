
// Generated typescript code of HL7v 2.4 MSH  (Message Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageHeaderV4Document = mongoose.Document & HL7MessageHeaderV4I

const HL7MessageHeaderV4Schema = new mongoose.Schema({
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
  conformanceStatementID: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MessageHeaderV4I extends Segment{
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
  conformanceStatementID: string[]
  
  }
  export const HL7MessageHeaderV4 = mongoose.model<HL7MessageHeaderV4Document> ("HL7MessageHeaderV4", HL7MessageHeaderV4Schema);

