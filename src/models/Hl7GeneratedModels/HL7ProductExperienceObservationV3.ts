
// Generated typescript code of HL7v 2.3 PEO  (Product Experience Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceObservationV3Document = mongoose.Document & HL7ProductExperienceObservationV3I

const HL7ProductExperienceObservationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventIdentifiersUsed: Array(String),
  eventSymptomDiagnosisCode: Array(String),
  eventOnsetDateTime: Date,
  eventExacerbationDateTime: Date,
  eventImprovedDateTime: Date,
  eventEndedDataTime: Date,
  eventLocationOccurredAddress: String,
  eventQualification: Array(String),
  eventSerious: String,
  eventExpected: String,
  eventOutcome: Array(String),
  patientOutcome: String,
  eventDescriptionFromOthers: Array(String),
  eventFromOriginalReporter: Array(String),
  eventDescriptionFromPatient: Array(String),
  eventDescriptionFromPractitioner: Array(String),
  eventDescriptionFromAutopsy: Array(String),
  causeOfDeath: Array(String),
  primaryObserverName: String,
  primaryObserverAddress: Array(String),
  primaryObserverTelephone: Array(String),
  primaryObserverSQualification: String,
  confirmationProvidedBy: String,
  primaryObserverAwareDateTime: Date,
  primaryObserverSIdentityMayBeDivulged: String,
  
  }, { timestamps: true });
  
export interface HL7ProductExperienceObservationV3I extends Segment{
  eventIdentifiersUsed: string[]
  eventSymptomDiagnosisCode: string[]
  eventOnsetDateTime: Date
  eventExacerbationDateTime: Date
  eventImprovedDateTime: Date
  eventEndedDataTime: Date
  eventLocationOccurredAddress: string
  eventQualification: string[]
  eventSerious: string
  eventExpected: string
  eventOutcome: string[]
  patientOutcome: string
  eventDescriptionFromOthers: string[]
  eventFromOriginalReporter: string[]
  eventDescriptionFromPatient: string[]
  eventDescriptionFromPractitioner: string[]
  eventDescriptionFromAutopsy: string[]
  causeOfDeath: string[]
  primaryObserverName: string
  primaryObserverAddress: string[]
  primaryObserverTelephone: string[]
  primaryObserverSQualification: string
  confirmationProvidedBy: string
  primaryObserverAwareDateTime: Date
  primaryObserverSIdentityMayBeDivulged: string
  
  }
  export const HL7ProductExperienceObservationV3 = mongoose.model<HL7ProductExperienceObservationV3Document> ("HL7ProductExperienceObservationV3", HL7ProductExperienceObservationV3Schema);

