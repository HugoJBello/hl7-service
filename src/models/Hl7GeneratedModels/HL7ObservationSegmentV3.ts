
// Generated typescript code of HL7v 2.3 OBX  (Observation segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationSegmentV3Document = mongoose.Document & HL7ObservationSegmentV3I

const HL7ObservationSegmentV3Schema = new mongoose.Schema({
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
  observResultStatus: String,
  dateLastObsNormalValues: Date,
  userDefinedAccessChecks: String,
  dateTimeOfTheObservation: Date,
  producersID: String,
  responsibleObserver: String,
  observationMethod: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ObservationSegmentV3I extends Segment{
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
  observResultStatus: string
  dateLastObsNormalValues: Date
  userDefinedAccessChecks: string
  dateTimeOfTheObservation: Date
  producersID: string
  responsibleObserver: string
  observationMethod: string[]
  
  }
  export const HL7ObservationSegmentV3 = mongoose.model<HL7ObservationSegmentV3Document> ("HL7ObservationSegmentV3", HL7ObservationSegmentV3Schema);

