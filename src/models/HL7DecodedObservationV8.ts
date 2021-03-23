import mongoose from "mongoose";
import { DecodedSegmentBase, Hl7Segment } from "./Segment";

export type HL7DecodedObservationDocument = mongoose.Document & HL7DecodedObservationV8I

const HL7DecodedObservationSchemaV8 = new mongoose.Schema({
  segment: String,
  id: String,
  hl7version: String,

  setId: String,
  valueType: String,
  observationIdentifier: String,
  observationSubId: String,
  observationValue: Array(String),
  units: String,
  referenceRange: String,
  abnormalFlags: Array(String),
  probability: String,
  natureAbnormalTest: Array(String),
  observationResultStatus: String,
  dataLastObsNormalValues: Date,
  userDefinedAccessChecks: String,
  dateOfObservation: Date,
  producerId: String,
  responsibleObserver: Array(String),
  observationMethod: Array(String),
  equipmentInstanceIdentifier: Array(String),
  dateOfAnalysis: Date,
  observationSite: Array(String),
  observationInstanceIdentifier: String,
}, { timestamps: true });

export interface HL7DecodedObservationV8I extends DecodedSegmentBase {
  setId: string
  valueType: string,
  observationIdentifier: string
  observationSubId: string
  observationValue: string[]
  units: string
  referenceRange: string
  abnormalFlags: string[]
  probability: string
  natureAbnormalTest: string[]
  observationResultStatus: string
  dataLastObsNormalValues: Date
  userDefinedAccessChecks: string
  dateObservation: string
  producerId: string
  responsibleObserver: string[]
  observationMethod: string[]
  equipmentInstanceIdentifier: string[]
  dateOfAnalysis: Date
  observationSite: string[]
  observationInstanceIdentifier: string
}

export const HL7DecodedObservationV8 = mongoose.model<HL7DecodedObservationDocument>("HL7DecodedObservation", HL7DecodedObservationSchemaV8);