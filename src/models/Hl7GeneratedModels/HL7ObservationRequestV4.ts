
// Generated typescript code of HL7v 2.4 OBR  (Observation Request)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationRequestV4Document = mongoose.Document & HL7ObservationRequestV4I

const HL7ObservationRequestV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDOBR: String,
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
  relevantClinicalInfo: String,
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
  diagnosticServSectID: String,
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
  collectorsComment: Array(String),
  transportArrangementResponsibility: String,
  transportArranged: String,
  escortRequired: String,
  plannedPatientTransportComment: Array(String),
  procedureCode: String,
  procedureCodeModifier: Array(String),
  placerSupplementalServiceInformation: Array(String),
  fillerSupplementalServiceInformation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ObservationRequestV4I extends Segment{
  setIDOBR: string
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
  relevantClinicalInfo: string
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
  diagnosticServSectID: string
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
  collectorsComment: string[]
  transportArrangementResponsibility: string
  transportArranged: string
  escortRequired: string
  plannedPatientTransportComment: string[]
  procedureCode: string
  procedureCodeModifier: string[]
  placerSupplementalServiceInformation: string[]
  fillerSupplementalServiceInformation: string[]
  
  }
  export const HL7ObservationRequestV4 = mongoose.model<HL7ObservationRequestV4Document> ("HL7ObservationRequestV4", HL7ObservationRequestV4Schema);

