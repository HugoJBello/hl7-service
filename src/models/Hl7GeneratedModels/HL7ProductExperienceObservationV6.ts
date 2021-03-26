
// Generated typescript code of HL7v 2.6 PEO  (Product Experience Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceObservationV6Document = mongoose.Document & HL7ProductExperienceObservationV6I

const HL7ProductExperienceObservationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventIdentifiersUsed: Array(String),
  eventSymptomDiagnosisCode: Array(String),
  eventOnsetDateTime: String,
  eventExacerbationDateTime: String,
  eventImprovedDateTime: String,
  eventEndedDataTime: String,
  eventLocationOccurredAddress: Array(String),
  eventQualification: Array(String),
  eventSerious: String,
  eventExpected: String,
  eventOutcome: Array(String),
  patientOutcome: String,
  eventDescriptionFromOthers: Array(String),
  eventDescriptionFromOriginalReporter: Array(String),
  eventDescriptionFromPatient: Array(String),
  eventDescriptionFromPractitioner: Array(String),
  eventDescriptionFromAutopsy: Array(String),
  causeOfDeath: Array(String),
  primaryObserverName: Array(String),
  primaryObserverAddress: Array(String),
  primaryObserverTelephone: Array(String),
  primaryObserversQualification: String,
  confirmationProvidedBy: String,
  primaryObserverAwareDateTime: String,
  primaryObserversIdentityMayBeDivulged: String,
  
  }, { timestamps: true });
  
export interface HL7ProductExperienceObservationV6I extends Segment{
  eventIdentifiersUsed: string[]
  eventSymptomDiagnosisCode: string[]
  eventOnsetDateTime: string
  eventExacerbationDateTime: string
  eventImprovedDateTime: string
  eventEndedDataTime: string
  eventLocationOccurredAddress: string[]
  eventQualification: string[]
  eventSerious: string
  eventExpected: string
  eventOutcome: string[]
  patientOutcome: string
  eventDescriptionFromOthers: string[]
  eventDescriptionFromOriginalReporter: string[]
  eventDescriptionFromPatient: string[]
  eventDescriptionFromPractitioner: string[]
  eventDescriptionFromAutopsy: string[]
  causeOfDeath: string[]
  primaryObserverName: string[]
  primaryObserverAddress: string[]
  primaryObserverTelephone: string[]
  primaryObserversQualification: string
  confirmationProvidedBy: string
  primaryObserverAwareDateTime: string
  primaryObserversIdentityMayBeDivulged: string
  
  }
  export const HL7ProductExperienceObservationV6 = mongoose.model<HL7ProductExperienceObservationV6Document> ("HL7ProductExperienceObservationV6", HL7ProductExperienceObservationV6Schema);

