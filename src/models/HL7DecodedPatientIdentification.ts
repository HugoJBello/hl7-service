import mongoose from "mongoose";

export type HL7DecodedPatientIdentificationDocument = mongoose.Document & HL7DecodedPatientIdentificationI

const HL7DecodedPatientIdentificatorSchema = new mongoose.Schema({
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

export interface HL7DecodedPatientIdentificationI {
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

export const HL7DecodedPatientIdentification = mongoose.model<HL7DecodedPatientIdentificationDocument>("HL7DecodedPatientIdentification", HL7DecodedPatientIdentificatorSchema);