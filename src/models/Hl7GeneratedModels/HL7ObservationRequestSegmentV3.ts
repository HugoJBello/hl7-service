
// Generated typescript code of HL7v 2.3 OBR  (Observation request segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationRequestSegmentV3Document = mongoose.Document & HL7ObservationRequestSegmentV3I

const HL7ObservationRequestSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDObservationRequest: String,
  placerOrderNumber: String,
  fillerOrderNumber: String,
  universalServiceIdentifier: String,
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
  resultsRptStatusChngDateTime: Date,
  chargeToPractice: String,
  diagnosticServiceSectionID: String,
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
  numberOfSampleContainers: Number,
  transportLogisticsOfCollectedSample: Array(String),
  collectorSComment: Array(String),
  transportArrangementResponsibility: String,
  transportArranged: String,
  escortRequired: String,
  plannedPatientTransportComment: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ObservationRequestSegmentV3I extends Segment{
  setIDObservationRequest: string
  placerOrderNumber: string
  fillerOrderNumber: string
  universalServiceIdentifier: string
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
  resultsRptStatusChngDateTime: Date
  chargeToPractice: string
  diagnosticServiceSectionID: string
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
  numberOfSampleContainers: number
  transportLogisticsOfCollectedSample: string[]
  collectorSComment: string[]
  transportArrangementResponsibility: string
  transportArranged: string
  escortRequired: string
  plannedPatientTransportComment: string[]
  
  }
  export const HL7ObservationRequestSegmentV3 = mongoose.model<HL7ObservationRequestSegmentV3Document> ("HL7ObservationRequestSegmentV3", HL7ObservationRequestSegmentV3Schema);

