
// Generated typescript code of HL7v 2.8 OBX  (Observation/result)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationresultV8Document = mongoose.Document & HL7ObservationresultV8I

const HL7ObservationresultV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdObx: String,
  valueType: String,
  observationIdentifier: String,
  observationSubid: String,
  observationValue: Array(String),
  units: String,
  referencesRange: String,
  interpretationCodes: Array(String),
  probability: Number,
  natureOfAbnormalTest: Array(String),
  observationResultStatus: String,
  effectiveDateOfReferenceRange: String,
  userDefinedAccessChecks: String,
  dateTimeOfTheObservation: String,
  producersId: String,
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
  patientResultsReleaseCategory: String,
  rootCause: String,
  localProcessControl: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ObservationresultV8I extends Segment{
  setIdObx: string
  valueType: string
  observationIdentifier: string
  observationSubid: string
  observationValue: string[]
  units: string
  referencesRange: string
  interpretationCodes: string[]
  probability: number
  natureOfAbnormalTest: string[]
  observationResultStatus: string
  effectiveDateOfReferenceRange: string
  userDefinedAccessChecks: string
  dateTimeOfTheObservation: string
  producersId: string
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
  patientResultsReleaseCategory: string
  rootCause: string
  localProcessControl: string[]
  
  }
  export const HL7ObservationresultV8 = mongoose.model<HL7ObservationresultV8Document> ("HL7ObservationresultV8", HL7ObservationresultV8Schema);

