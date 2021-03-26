
// Generated typescript code of HL7v 2.5 OBX  (Observation/Result)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationResultV5Document = mongoose.Document & HL7ObservationResultV5I

const HL7ObservationResultV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDOBX: String,
  valueType: String,
  observationIdentifier: String,
  observationSubID: String,
  observationValue: Array(String),
  units: String,
  referencesRange: String,
  abnormalFlags: Array(String),
  probability: Number,
  natureOfAbnormalTest: Array(String),
  observationResultStatus: String,
  effectiveDateOfReferenceRange: Date,
  userDefinedAccessChecks: String,
  dateTimeOfTheObservation: Date,
  producersID: String,
  responsibleObserver: Array(String),
  observationMethod: Array(String),
  equipmentInstanceIdentifier: Array(String),
  dateTimeOfTheAnalysis: Date,
  
  }, { timestamps: true });
  
export interface HL7ObservationResultV5I extends Segment{
  setIDOBX: string
  valueType: string
  observationIdentifier: string
  observationSubID: string
  observationValue: string[]
  units: string
  referencesRange: string
  abnormalFlags: string[]
  probability: number
  natureOfAbnormalTest: string[]
  observationResultStatus: string
  effectiveDateOfReferenceRange: Date
  userDefinedAccessChecks: string
  dateTimeOfTheObservation: Date
  producersID: string
  responsibleObserver: string[]
  observationMethod: string[]
  equipmentInstanceIdentifier: string[]
  dateTimeOfTheAnalysis: Date
  
  }
  export const HL7ObservationResultV5 = mongoose.model<HL7ObservationResultV5Document> ("HL7ObservationResultV5", HL7ObservationResultV5Schema);

