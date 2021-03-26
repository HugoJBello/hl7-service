
// Generated typescript code of HL7v 2.7 TXA  (Transcription Document Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TranscriptionDocumentHeaderV7Document = mongoose.Document & HL7TranscriptionDocumentHeaderV7I

const HL7TranscriptionDocumentHeaderV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdTxa: String,
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
  distributedCopiesCodeAndNameOfRecipients: Array(String),
  folderAssignment: Array(String),
  documentTitle: Array(String),
  agreedDueDateTime: String,
  
  }, { timestamps: true });
  
export interface HL7TranscriptionDocumentHeaderV7I extends Segment{
  setIdTxa: string
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
  distributedCopiesCodeAndNameOfRecipients: string[]
  folderAssignment: string[]
  documentTitle: string[]
  agreedDueDateTime: string
  
  }
  export const HL7TranscriptionDocumentHeaderV7 = mongoose.model<HL7TranscriptionDocumentHeaderV7Document> ("HL7TranscriptionDocumentHeaderV7", HL7TranscriptionDocumentHeaderV7Schema);

