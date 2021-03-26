
// Generated typescript code of HL7v 2.4 OBX  (Observation/Result)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationResultV4Document = mongoose.Document & HL7ObservationResultV4I

const HL7ObservationResultV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDOBX: String,
  valueType: String,
  observationIdentifier: String,
  observationSubId: String,
  observationValue: Array(String),
  units: String,
  referencesRange: String,
  abnormalFlags: Array(String),
  probability: Number,
  natureOfAbnormalTest: Array(String),
  observationResultStatus: String,
  dateLastObservationNormalValue: Date,
  userDefinedAccessChecks: String,
  dateTimeOfTheObservation: Date,
  producersID: String,
  responsibleObserver: Array(String),
  observationMethod: Array(String),
  equipmentInstanceIdentifier: Array(String),
  dateTimeOfTheAnalysis: Date,
  
  }, { timestamps: true });
  
export interface HL7ObservationResultV4I extends Segment{
  setIDOBX: string
  valueType: string
  observationIdentifier: string
  observationSubId: string
  observationValue: string[]
  units: string
  referencesRange: string
  abnormalFlags: string[]
  probability: number
  natureOfAbnormalTest: string[]
  observationResultStatus: string
  dateLastObservationNormalValue: Date
  userDefinedAccessChecks: string
  dateTimeOfTheObservation: Date
  producersID: string
  responsibleObserver: string[]
  observationMethod: string[]
  equipmentInstanceIdentifier: string[]
  dateTimeOfTheAnalysis: Date
  
  }
  export const HL7ObservationResultV4 = mongoose.model<HL7ObservationResultV4Document> ("HL7ObservationResultV4", HL7ObservationResultV4Schema);

