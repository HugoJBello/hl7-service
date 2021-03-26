
// Generated typescript code of HL7v 2.6 TXA  (Transcription Document Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TranscriptionDocumentHeaderV6Document = mongoose.Document & HL7TranscriptionDocumentHeaderV6I

const HL7TranscriptionDocumentHeaderV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDTXA: String,
  documentType: String,
  documentContentPresentation: String,
  activityDateTime: String,
  primaryActivityProviderCodeName: Array(String),
  originationDateTime: String,
  transcriptionDateTime: String,
  editDateTime: Array(String),
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
  authenticationPersonTimeStampSet: Array(String),
  distributedCopiesCodeAndNameOfRecipientss: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TranscriptionDocumentHeaderV6I extends Segment{
  setIDTXA: string
  documentType: string
  documentContentPresentation: string
  activityDateTime: string
  primaryActivityProviderCodeName: string[]
  originationDateTime: string
  transcriptionDateTime: string
  editDateTime: string[]
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
  authenticationPersonTimeStampSet: string[]
  distributedCopiesCodeAndNameOfRecipientss: string[]
  
  }
  export const HL7TranscriptionDocumentHeaderV6 = mongoose.model<HL7TranscriptionDocumentHeaderV6Document> ("HL7TranscriptionDocumentHeaderV6", HL7TranscriptionDocumentHeaderV6Schema);

