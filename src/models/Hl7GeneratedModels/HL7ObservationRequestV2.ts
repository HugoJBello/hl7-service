
// Generated typescript code of HL7v 2.2 OBR  (Observation Request)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationRequestV2Document = mongoose.Document & HL7ObservationRequestV2I

const HL7ObservationRequestV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdObservationRequest: String,
  placerOrderNumber: String,
  fillerOrderNumber: String,
  universalServiceId: String,
  priority: String,
  requestedDateTime: Date,
  observationDateTime: Date,
  observationEndDateTime: Date,
  collectionVolume: String,
  collectorIdentifier: Array(String),
  specimenActionCode: String,
  dangerCode: String,
  relevantClinicalInformation: String,
  specimenReceivedDateTime: Date,
  specimenSource: String,
  orderingProvider: Array(String),
  orderCallbackPhoneNumber: Array(String),
  placerField1: String,
  placerField2: String,
  fillerField1: String,
  fillerField2: String,
  resultsReportStatusChangeDateTime: Date,
  chargeToPractice: String,
  diagnosticServiceSectionId: String,
  resultStatus: String,
  parentResult: String,
  quantityTiming: Array(String),
  resultCopiesTo: Array(String),
  parentNumber: String,
  transportationMode: String,
  reasonForStudy: Array(String),
  principalResultInterpreter: String,
  assistantResultInterpreter: Array(String),
  technician: Array(String),
  transcriptionist: Array(String),
  scheduledDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7ObservationRequestV2I extends Segment{
  setIdObservationRequest: string
  placerOrderNumber: string
  fillerOrderNumber: string
  universalServiceId: string
  priority: string
  requestedDateTime: Date
  observationDateTime: Date
  observationEndDateTime: Date
  collectionVolume: string
  collectorIdentifier: string[]
  specimenActionCode: string
  dangerCode: string
  relevantClinicalInformation: string
  specimenReceivedDateTime: Date
  specimenSource: string
  orderingProvider: string[]
  orderCallbackPhoneNumber: string[]
  placerField1: string
  placerField2: string
  fillerField1: string
  fillerField2: string
  resultsReportStatusChangeDateTime: Date
  chargeToPractice: string
  diagnosticServiceSectionId: string
  resultStatus: string
  parentResult: string
  quantityTiming: string[]
  resultCopiesTo: string[]
  parentNumber: string
  transportationMode: string
  reasonForStudy: string[]
  principalResultInterpreter: string
  assistantResultInterpreter: string[]
  technician: string[]
  transcriptionist: string[]
  scheduledDateTime: Date
  
  }
  export const HL7ObservationRequestV2 = mongoose.model<HL7ObservationRequestV2Document> ("HL7ObservationRequestV2", HL7ObservationRequestV2Schema);

