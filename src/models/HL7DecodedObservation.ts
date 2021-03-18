import mongoose from "mongoose";

export type HL7DecodedObservationDocument = mongoose.Document & HL7DecodedObservationI

const HL7DecodedObservationSchema = new mongoose.Schema({
  id: String,
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
  observationMethod: Array(String)
}, { timestamps: true });

export interface HL7DecodedObservationI {
  id: string
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
  dateOfObservation: string
  producerId: string
  responsibleObserver: string[]
  observationMethod: string[]
}

export const HL7DecodedObservation = mongoose.model<HL7DecodedObservationDocument>("HL7DecodedObservation", HL7DecodedObservationSchema);