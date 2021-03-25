import mongoose from "mongoose";
import { DecodedSegmentBase, Hl7Segment } from "./Segment";

export type HL7DecodedMessageHeaderDocument = mongoose.Document & HL7DecodedMessageHeaderV5I

const HL7DecodedMessageHeaderSchemaV5 = new mongoose.Schema({
  segment: String,
  id: String,
  hl7version: String,

  fieldSeparator: String,
  encodingCharacters: String,
  sendingApplication: String,
  sendingFacility: String,
  receivingApplication: String,
  receivingFacility: String,
  dateOfMessage: Date,
  security: String,
  messageType: String,
  messageControlId: String,
  processingId: String,
  versionId: String,
  sequenceNumber: String,
  continuationPointer: String,
  acceptAcknowledgmentType: String,
  applicationAcknowledgmentType: String,
  countryCode: String,
  characterSet: Array(String),
  principalLanguageMessage: String,
  alternateCharacterSetHandlingScheme: String,
}, { timestamps: true });

export interface HL7DecodedMessageHeaderV5I extends DecodedSegmentBase{
  fieldSeparator: string
  encodingCharacters: string
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  dateOfMessage: Date,
  security: string
  messageType: string
  messageControlId: string
  processingId: string
  versionId: string
  sequenceNumber: string
  continuationPointer: string
  acceptAcknowledgmentType: string
  applicationAcknowledgmentType: string
  countryCode: string
  characterSet: string[]
  principalLanguageMessage: string
  alternateCharacterSetHandlingScheme: string
}

export const HL7DecodedMessageHeaderV5 = mongoose.model<HL7DecodedMessageHeaderDocument>("HL7DecodedMessageHeader", HL7DecodedMessageHeaderSchemaV5);