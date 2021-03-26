
// Generated typescript code of HL7v 2.5 CSR  (Clinical Study Registration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyRegistrationV5Document = mongoose.Document & HL7ClinicalStudyRegistrationV5I

const HL7ClinicalStudyRegistrationV5Schema = new mongoose.Schema({
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
  
export interface HL7ClinicalStudyRegistrationV5I extends Segment{
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
  export const HL7ClinicalStudyRegistrationV5 = mongoose.model<HL7ClinicalStudyRegistrationV5Document> ("HL7ClinicalStudyRegistrationV5", HL7ClinicalStudyRegistrationV5Schema);

