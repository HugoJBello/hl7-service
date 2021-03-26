
// Generated typescript code of HL7v 2.2 MSH  (Message Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageHeaderV2Document = mongoose.Document & HL7MessageHeaderV2I

const HL7MessageHeaderV2Schema = new mongoose.Schema({
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
  messageControlId: String,
  processingId: String,
  versionId: String,
  sequenceNumber: Number,
  continuationPointer: String,
  acceptAcknowledgementType: String,
  applicationAcknowledgementType: String,
  countryCode: String,
  
  }, { timestamps: true });
  
export interface HL7MessageHeaderV2I extends Segment{
  fieldSeparator: string
  encodingCharacters: string
  sendingApplication: string
  sendingFacility: string
  receivingApplication: string
  receivingFacility: string
  dateTimeOfMessage: Date
  security: string
  messageType: string
  messageControlId: string
  processingId: string
  versionId: string
  sequenceNumber: number
  continuationPointer: string
  acceptAcknowledgementType: string
  applicationAcknowledgementType: string
  countryCode: string
  
  }
  export const HL7MessageHeaderV2 = mongoose.model<HL7MessageHeaderV2Document> ("HL7MessageHeaderV2", HL7MessageHeaderV2Schema);

