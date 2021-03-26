
// Generated typescript code of HL7v 2.3 IN3  (Insurance additional info - certification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInfoCertificationV3Document = mongoose.Document & HL7InsuranceAdditionalInfoCertificationV3I

const HL7InsuranceAdditionalInfoCertificationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDInsuranceCertification: String,
  certificationNumber: String,
  certifiedBy: Array(String),
  certificationRequired: String,
  penalty: String,
  certificationDateTime: Date,
  certificationModifyDateTime: Date,
  operator: Array(String),
  certificationBeginDate: String,
  certificationEndDate: String,
  days: String,
  nonConcurCodeDescription: String,
  nonConcurEffectiveDateTime: Date,
  physicianReviewer: Array(String),
  certificationContact: String,
  certificationContactPhoneNumber: Array(String),
  appealReason: String,
  certificationAgency: String,
  certificationAgencyPhoneNumber: Array(String),
  preCertificationRequiredWindow: Array(String),
  caseManager: String,
  secondOpinionDate: String,
  secondOpinionStatus: String,
  secondOpinionDocumentationReceived: Array(String),
  secondOpinionPhysician: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInfoCertificationV3I extends Segment{
  setIDInsuranceCertification: string
  certificationNumber: string
  certifiedBy: string[]
  certificationRequired: string
  penalty: string
  certificationDateTime: Date
  certificationModifyDateTime: Date
  operator: string[]
  certificationBeginDate: string
  certificationEndDate: string
  days: string
  nonConcurCodeDescription: string
  nonConcurEffectiveDateTime: Date
  physicianReviewer: string[]
  certificationContact: string
  certificationContactPhoneNumber: string[]
  appealReason: string
  certificationAgency: string
  certificationAgencyPhoneNumber: string[]
  preCertificationRequiredWindow: string[]
  caseManager: string
  secondOpinionDate: string
  secondOpinionStatus: string
  secondOpinionDocumentationReceived: string[]
  secondOpinionPhysician: string[]
  
  }
  export const HL7InsuranceAdditionalInfoCertificationV3 = mongoose.model<HL7InsuranceAdditionalInfoCertificationV3Document> ("HL7InsuranceAdditionalInfoCertificationV3", HL7InsuranceAdditionalInfoCertificationV3Schema);

