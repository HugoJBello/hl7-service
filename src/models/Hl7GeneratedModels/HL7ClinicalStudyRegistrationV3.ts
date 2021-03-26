
// Generated typescript code of HL7v 2.3 CSR  (Clinical Study Registration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyRegistrationV3Document = mongoose.Document & HL7ClinicalStudyRegistrationV3I

const HL7ClinicalStudyRegistrationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  alternateStudyID: String,
  institutionRegisteringThePatient: String,
  sponsorPatientID: String,
  alternatePatientID: String,
  dateTimeOfPatientStudyRegistration: Date,
  personPerformingStudyRegistration: String,
  studyAuthorizingProvider: String,
  datetimePatientStudyConsentSigned: Date,
  patientStudyEligibilityStatus: String,
  studyRandomizationDatetime: Array(Date),
  studyRandomizedArm: Array(String),
  stratumForStudyRandomization: Array(String),
  patientEvaluabilityStatus: String,
  datetimeEndedStudy: Date,
  reasonEndedStudy: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyRegistrationV3I extends Segment{
  sponsorStudyID: string
  alternateStudyID: string
  institutionRegisteringThePatient: string
  sponsorPatientID: string
  alternatePatientID: string
  dateTimeOfPatientStudyRegistration: Date
  personPerformingStudyRegistration: string
  studyAuthorizingProvider: string
  datetimePatientStudyConsentSigned: Date
  patientStudyEligibilityStatus: string
  studyRandomizationDatetime: Date[]
  studyRandomizedArm: string[]
  stratumForStudyRandomization: string[]
  patientEvaluabilityStatus: string
  datetimeEndedStudy: Date
  reasonEndedStudy: string
  
  }
  export const HL7ClinicalStudyRegistrationV3 = mongoose.model<HL7ClinicalStudyRegistrationV3Document> ("HL7ClinicalStudyRegistrationV3", HL7ClinicalStudyRegistrationV3Schema);

