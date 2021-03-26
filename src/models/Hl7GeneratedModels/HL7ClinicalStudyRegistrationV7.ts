
// Generated typescript code of HL7v 2.7 CSR  (Clinical Study Registration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyRegistrationV7Document = mongoose.Document & HL7ClinicalStudyRegistrationV7I

const HL7ClinicalStudyRegistrationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyId: String,
  alternateStudyId: String,
  institutionRegisteringThePatient: String,
  sponsorPatientId: String,
  alternatePatientIdCsr: String,
  dateTimeOfPatientStudyRegistration: String,
  personPerformingStudyRegistration: Array(String),
  studyAuthorizingProvider: Array(String),
  dateTimePatientStudyConsentSigned: String,
  patientStudyEligibilityStatus: String,
  studyRandomizationDateTime: Array(String),
  randomizedStudyArm: Array(String),
  stratumForStudyRandomization: Array(String),
  patientEvaluabilityStatus: String,
  dateTimeEndedStudy: String,
  reasonEndedStudy: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyRegistrationV7I extends Segment{
  sponsorStudyId: string
  alternateStudyId: string
  institutionRegisteringThePatient: string
  sponsorPatientId: string
  alternatePatientIdCsr: string
  dateTimeOfPatientStudyRegistration: string
  personPerformingStudyRegistration: string[]
  studyAuthorizingProvider: string[]
  dateTimePatientStudyConsentSigned: string
  patientStudyEligibilityStatus: string
  studyRandomizationDateTime: string[]
  randomizedStudyArm: string[]
  stratumForStudyRandomization: string[]
  patientEvaluabilityStatus: string
  dateTimeEndedStudy: string
  reasonEndedStudy: string
  
  }
  export const HL7ClinicalStudyRegistrationV7 = mongoose.model<HL7ClinicalStudyRegistrationV7Document> ("HL7ClinicalStudyRegistrationV7", HL7ClinicalStudyRegistrationV7Schema);

