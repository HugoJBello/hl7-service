
// Generated typescript code of HL7v 2.5 PEO  (Product Experience Observation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceObservationV5Document = mongoose.Document & HL7ProductExperienceObservationV5I

const HL7ProductExperienceObservationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  eventIdentifiersUsed: Array(String),
  eventSymptomDiagnosisCode: Array(String),
  eventOnsetDateTime: Date,
  eventExacerbationDateTime: Date,
  eventImprovedDateTime: Date,
  eventEndedDataTime: Date,
  eventLocationOccurredAddress: Array(String),
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
  primaryObserverName: Array(String),
  primaryObserverAddress: Array(String),
  primaryObserverTelephone: Array(String),
  primaryObserversQualification: String,
  confirmationProvidedBy: String,
  primaryObserverAwareDateTime: Date,
  primaryObserversIdentityMayBeDivulged: String,
  
  }, { timestamps: true });
  
export interface HL7ProductExperienceObservationV5I extends Segment{
  eventIdentifiersUsed: string[]
  eventSymptomDiagnosisCode: string[]
  eventOnsetDateTime: Date
  eventExacerbationDateTime: Date
  eventImprovedDateTime: Date
  eventEndedDataTime: Date
  eventLocationOccurredAddress: string[]
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
  primaryObserverName: string[]
  primaryObserverAddress: string[]
  primaryObserverTelephone: string[]
  primaryObserversQualification: string
  confirmationProvidedBy: string
  primaryObserverAwareDateTime: Date
  primaryObserversIdentityMayBeDivulged: string
  
  }
  export const HL7ProductExperienceObservationV5 = mongoose.model<HL7ProductExperienceObservationV5Document> ("HL7ProductExperienceObservationV5", HL7ProductExperienceObservationV5Schema);

