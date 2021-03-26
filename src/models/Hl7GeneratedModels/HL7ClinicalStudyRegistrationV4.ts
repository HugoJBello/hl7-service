
// Generated typescript code of HL7v 2.4 CSR  (Clinical Study Registration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyRegistrationV4Document = mongoose.Document & HL7ClinicalStudyRegistrationV4I

const HL7ClinicalStudyRegistrationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  alternateStudyID: String,
  institutionRegisteringThePatient: String,
  sponsorPatientID: String,
  alternatePatientIDCSR: String,
  dateTimeOfPatientStudyRegistration: Date,
  personPerformingStudyRegistration: Array(String),
  studyAuthorizingProvider: Array(String),
  datetimePatientStudyConsentSigned: Date,
  patientStudyEligibilityStatus: String,
  studyRandomizationDatetime: Array(Date),
  randomizedStudyArm: Array(String),
  stratumForStudyRandomization: Array(String),
  patientEvaluabilityStatus: String,
  datetimeEndedStudy: Date,
  reasonEndedStudy: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyRegistrationV4I extends Segment{
  sponsorStudyID: string
  alternateStudyID: string
  institutionRegisteringThePatient: string
  sponsorPatientID: string
  alternatePatientIDCSR: string
  dateTimeOfPatientStudyRegistration: Date
  personPerformingStudyRegistration: string[]
  studyAuthorizingProvider: string[]
  datetimePatientStudyConsentSigned: Date
  patientStudyEligibilityStatus: string
  studyRandomizationDatetime: Date[]
  randomizedStudyArm: string[]
  stratumForStudyRandomization: string[]
  patientEvaluabilityStatus: string
  datetimeEndedStudy: Date
  reasonEndedStudy: string
  
  }
  export const HL7ClinicalStudyRegistrationV4 = mongoose.model<HL7ClinicalStudyRegistrationV4Document> ("HL7ClinicalStudyRegistrationV4", HL7ClinicalStudyRegistrationV4Schema);

