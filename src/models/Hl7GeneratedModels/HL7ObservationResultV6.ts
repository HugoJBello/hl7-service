
// Generated typescript code of HL7v 2.6 OBX  (Observation/Result)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationResultV6Document = mongoose.Document & HL7ObservationResultV6I

const HL7ObservationResultV6Schema = new mongoose.Schema({
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
  effectiveDateOfReferenceRange: String,
  userDefinedAccessChecks: String,
  dateTimeOfTheObservation: String,
  producersID: String,
  responsibleObserver: Array(String),
  observationMethod: Array(String),
  equipmentInstanceIdentifier: Array(String),
  dateTimeOfTheAnalysis: String,
  observationSite: Array(String),
  observationInstanceIdentifier: String,
  moodCode: String,
  performingOrganizationName: String,
  performingOrganizationAddress: String,
  performingOrganizationMedicalDirector: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationResultV6I extends Segment{
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
  effectiveDateOfReferenceRange: string
  userDefinedAccessChecks: string
  dateTimeOfTheObservation: string
  producersID: string
  responsibleObserver: string[]
  observationMethod: string[]
  equipmentInstanceIdentifier: string[]
  dateTimeOfTheAnalysis: string
  observationSite: string[]
  observationInstanceIdentifier: string
  moodCode: string
  performingOrganizationName: string
  performingOrganizationAddress: string
  performingOrganizationMedicalDirector: string
  
  }
  export const HL7ObservationResultV6 = mongoose.model<HL7ObservationResultV6Document> ("HL7ObservationResultV6", HL7ObservationResultV6Schema);

