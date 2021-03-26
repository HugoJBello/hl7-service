
// Generated typescript code of HL7v 2.5 OBR  (Observation Request)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationRequestV5Document = mongoose.Document & HL7ObservationRequestV5I

const HL7ObservationRequestV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDOBR: String,
  placerOrderNumber: String,
  fillerOrderNumber: String,
  universalServiceIdentifier: String,
  priorityOBR: String,
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
  diagnosticServSectID: String,
  resultStatus: String,
  parentResult: String,
  quantityTiming: Array(String),
  resultCopiesTo: Array(String),
  parent: String,
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
  medicallyNecessaryDuplicateProcedureReason: String,
  resultHandling: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationRequestV5I extends Segment{
  setIDOBR: string
  placerOrderNumber: string
  fillerOrderNumber: string
  universalServiceIdentifier: string
  priorityOBR: string
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
  diagnosticServSectID: string
  resultStatus: string
  parentResult: string
  quantityTiming: string[]
  resultCopiesTo: string[]
  parent: string
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
  medicallyNecessaryDuplicateProcedureReason: string
  resultHandling: string
  
  }
  export const HL7ObservationRequestV5 = mongoose.model<HL7ObservationRequestV5Document> ("HL7ObservationRequestV5", HL7ObservationRequestV5Schema);

