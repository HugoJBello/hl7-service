
// Generated typescript code of HL7v 2.7 OBX  (Observation/result)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationresultV7Document = mongoose.Document & HL7ObservationresultV7I

const HL7ObservationresultV7Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7ObservationresultV7I extends Segment{
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
  
  }
  export const HL7ObservationresultV7 = mongoose.model<HL7ObservationresultV7Document> ("HL7ObservationresultV7", HL7ObservationresultV7Schema);

