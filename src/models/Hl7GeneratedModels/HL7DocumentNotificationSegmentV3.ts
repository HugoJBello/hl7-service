
// Generated typescript code of HL7v 2.3 TXA  (Document notification segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DocumentNotificationSegmentV3Document = mongoose.Document & HL7DocumentNotificationSegmentV3I

const HL7DocumentNotificationSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDTXA: String,
  documentType: String,
  documentContentPresentation: String,
  activityDateTime: Date,
  primaryActivityProviderCodeName: String,
  originationDateTime: Date,
  transcriptionDateTime: Date,
  editDateTime: Array(Date),
  originatorCodeName: String,
  assignedDocumentAuthenticator: Array(String),
  transcriptionistCodeName: String,
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
  distributedCopies: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DocumentNotificationSegmentV3I extends Segment{
  setIDTXA: string
  documentType: string
  documentContentPresentation: string
  activityDateTime: Date
  primaryActivityProviderCodeName: string
  originationDateTime: Date
  transcriptionDateTime: Date
  editDateTime: Date[]
  originatorCodeName: string
  assignedDocumentAuthenticator: string[]
  transcriptionistCodeName: string
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
  distributedCopies: string[]
  
  }
  export const HL7DocumentNotificationSegmentV3 = mongoose.model<HL7DocumentNotificationSegmentV3Document> ("HL7DocumentNotificationSegmentV3", HL7DocumentNotificationSegmentV3Schema);

