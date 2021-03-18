import mongoose from "mongoose";

export type HL7DecodedMessageHeaderDocument = mongoose.Document & HL7DecodedMessageHeaderI

const HL7DecodedMessageHeaderSchema = new mongoose.Schema({
  id: String,
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
  characterSet: String,
  principalLanguageMessage: String,
  alternateCharacterSetHandlingScheme: String
}, { timestamps: true });

export interface HL7DecodedMessageHeaderI {
  id: string
  fieldSeparator: string
  encodingCharacters: string
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  dateOfMessage: Date
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
  characterSet: string
  principalLanguageMessage: string
  alternateCharacterSetHandlingScheme: string
}

export const HL7DecodedMessageHeader = mongoose.model<HL7DecodedMessageHeaderDocument>("HL7DecodedMessageHeader", HL7DecodedMessageHeaderSchema);