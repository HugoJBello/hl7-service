
// Generated typescript code of HL7v 2.2 OBX  (Observation Result)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationResultV2Document = mongoose.Document & HL7ObservationResultV2I

const HL7ObservationResultV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdObservationalSimple: String,
  valueType: String,
  observationIdentifier: String,
  observationSubid: String,
  observationValue: String,
  units: String,
  referencesRange: String,
  abnormalFlags: Array(String),
  probability: Number,
  natureOfAbnormalTest: String,
  observationResultStatus: String,
  effectiveDateLastObservationNormalValues: Date,
  userDefinedAccessChecks: String,
  dateTimeOfTheObservation: Date,
  producersId: String,
  responsibleObserver: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationResultV2I extends Segment{
  setIdObservationalSimple: string
  valueType: string
  observationIdentifier: string
  observationSubid: string
  observationValue: string
  units: string
  referencesRange: string
  abnormalFlags: string[]
  probability: number
  natureOfAbnormalTest: string
  observationResultStatus: string
  effectiveDateLastObservationNormalValues: Date
  userDefinedAccessChecks: string
  dateTimeOfTheObservation: Date
  producersId: string
  responsibleObserver: string
  
  }
  export const HL7ObservationResultV2 = mongoose.model<HL7ObservationResultV2Document> ("HL7ObservationResultV2", HL7ObservationResultV2Schema);

