
// Generated typescript code of HL7v 2.6 CSR  (Clinical Study Registration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyRegistrationV6Document = mongoose.Document & HL7ClinicalStudyRegistrationV6I

const HL7ClinicalStudyRegistrationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  alternateStudyID: String,
  institutionRegisteringThePatient: String,
  sponsorPatientID: String,
  alternatePatientIDCSR: String,
  dateTimeOfPatientStudyRegistration: String,
  personPerformingStudyRegistration: Array(String),
  studyAuthorizingProvider: Array(String),
  datetimePatientStudyConsentSigned: String,
  patientStudyEligibilityStatus: String,
  studyRandomizationDatetime: Array(String),
  randomizedStudyArm: Array(String),
  stratumForStudyRandomization: Array(String),
  patientEvaluabilityStatus: String,
  dateTimeEndedStudy: String,
  reasonEndedStudy: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyRegistrationV6I extends Segment{
  sponsorStudyID: string
  alternateStudyID: string
  institutionRegisteringThePatient: string
  sponsorPatientID: string
  alternatePatientIDCSR: string
  dateTimeOfPatientStudyRegistration: string
  personPerformingStudyRegistration: string[]
  studyAuthorizingProvider: string[]
  datetimePatientStudyConsentSigned: string
  patientStudyEligibilityStatus: string
  studyRandomizationDatetime: string[]
  randomizedStudyArm: string[]
  stratumForStudyRandomization: string[]
  patientEvaluabilityStatus: string
  dateTimeEndedStudy: string
  reasonEndedStudy: string
  
  }
  export const HL7ClinicalStudyRegistrationV6 = mongoose.model<HL7ClinicalStudyRegistrationV6Document> ("HL7ClinicalStudyRegistrationV6", HL7ClinicalStudyRegistrationV6Schema);

