
// Generated typescript code of HL7v 2.3 MSH  (Message header segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageHeaderSegmentV3Document = mongoose.Document & HL7MessageHeaderSegmentV3I

const HL7MessageHeaderSegmentV3Schema = new mongoose.Schema({
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
  acceptAcknowledgementType: String,
  applicationAcknowledgementType: String,
  countryCode: String,
  characterSet: Array(String),
  principalLanguageOfMessage: String,
  
  }, { timestamps: true });
  
export interface HL7MessageHeaderSegmentV3I extends Segment{
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
  acceptAcknowledgementType: string
  applicationAcknowledgementType: string
  countryCode: string
  characterSet: string[]
  principalLanguageOfMessage: string
  
  }
  export const HL7MessageHeaderSegmentV3 = mongoose.model<HL7MessageHeaderSegmentV3Document> ("HL7MessageHeaderSegmentV3", HL7MessageHeaderSegmentV3Schema);

