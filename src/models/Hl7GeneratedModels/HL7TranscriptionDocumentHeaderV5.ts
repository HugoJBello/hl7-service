
// Generated typescript code of HL7v 2.5 TXA  (Transcription Document Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TranscriptionDocumentHeaderV5Document = mongoose.Document & HL7TranscriptionDocumentHeaderV5I

const HL7TranscriptionDocumentHeaderV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDTXA: String,
  documentType: String,
  documentContentPresentation: String,
  activityDateTime: Date,
  primaryActivityProviderCodeName: Array(String),
  originationDateTime: Date,
  transcriptionDateTime: Date,
  editDateTime: Array(Date),
  originatorCodeName: Array(String),
  assignedDocumentAuthenticator: Array(String),
  transcriptionistCodeName: Array(String),
  uniqueDocumentNumber: String,
  parentDocumentNumber: String,
  placerOrderNumber: Array(String),
  fillerOrderNumber: String,
  uniqueDocumentFileName: String,
  documentCompletionStatus: String,
  documentConfidentialityStatus: String,
  documentAvailabilityStatus: String,
  documentStorageStatus: String,
  documentChangeReason: String,
  authenticationPersonTimeStamp: Array(String),
  distributedCopiesCodeAndNameOfRecipients: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TranscriptionDocumentHeaderV5I extends Segment{
  setIDTXA: string
  documentType: string
  documentContentPresentation: string
  activityDateTime: Date
  primaryActivityProviderCodeName: string[]
  originationDateTime: Date
  transcriptionDateTime: Date
  editDateTime: Date[]
  originatorCodeName: string[]
  assignedDocumentAuthenticator: string[]
  transcriptionistCodeName: string[]
  uniqueDocumentNumber: string
  parentDocumentNumber: string
  placerOrderNumber: string[]
  fillerOrderNumber: string
  uniqueDocumentFileName: string
  documentCompletionStatus: string
  documentConfidentialityStatus: string
  documentAvailabilityStatus: string
  documentStorageStatus: string
  documentChangeReason: string
  authenticationPersonTimeStamp: string[]
  distributedCopiesCodeAndNameOfRecipients: string[]
  
  }
  export const HL7TranscriptionDocumentHeaderV5 = mongoose.model<HL7TranscriptionDocumentHeaderV5Document> ("HL7TranscriptionDocumentHeaderV5", HL7TranscriptionDocumentHeaderV5Schema);

