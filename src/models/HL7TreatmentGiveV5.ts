import mongoose from "mongoose";
import { DecodedSegmentBase, Hl7Segment } from "./Segment";

export type HL7DecodedTreatmentGiveDocument = mongoose.Document & HL7DecodedTreatmentGiveV5I

const HL7DecodedTreatmentGiveSchemaV5 = new mongoose.Schema({
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
  characterSet: String,
  principalLanguageMessage: String,
  alternateCharacterSetHandlingScheme: String
}, { timestamps: true });

export interface HL7DecodedTreatmentGiveV5I extends DecodedSegmentBase{
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

export const HL7DecodedTreatmentGiveV5 = mongoose.model<HL7DecodedTreatmentGiveDocument>("HL7DecodedTreatmentGive", HL7DecodedTreatmentGiveSchemaV5);