
// Generated typescript code of HL7v 2.6 IN3  (Insurance Additional Information, Certification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInformationCertificationV6Document = mongoose.Document & HL7InsuranceAdditionalInformationCertificationV6I

const HL7InsuranceAdditionalInformationCertificationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDIN3: String,
  certificationNumber: String,
  certifiedBy: Array(String),
  certificationRequired: String,
  penalty: String,
  certificationDateTime: String,
  certificationModifyDateTime: String,
  operator: Array(String),
  certificationBeginDate: String,
  certificationEndDate: String,
  days: String,
  nonConcurCodeDescription: String,
  nonConcurEffectiveDateTime: String,
  physicianReviewer: Array(String),
  certificationContact: String,
  certificationContactPhoneNumber: Array(String),
  appealReason: String,
  certificationAgency: String,
  certificationAgencyPhoneNumber: Array(String),
  preCertificationRequirement: Array(String),
  caseManager: String,
  secondOpinionDate: String,
  secondOpinionStatus: String,
  secondOpinionDocumentationReceived: Array(String),
  secondOpinionPhysician: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInformationCertificationV6I extends Segment{
  setIDIN3: string
  certificationNumber: string
  certifiedBy: string[]
  certificationRequired: string
  penalty: string
  certificationDateTime: string
  certificationModifyDateTime: string
  operator: string[]
  certificationBeginDate: string
  certificationEndDate: string
  days: string
  nonConcurCodeDescription: string
  nonConcurEffectiveDateTime: string
  physicianReviewer: string[]
  certificationContact: string
  certificationContactPhoneNumber: string[]
  appealReason: string
  certificationAgency: string
  certificationAgencyPhoneNumber: string[]
  preCertificationRequirement: string[]
  caseManager: string
  secondOpinionDate: string
  secondOpinionStatus: string
  secondOpinionDocumentationReceived: string[]
  secondOpinionPhysician: string[]
  
  }
  export const HL7InsuranceAdditionalInformationCertificationV6 = mongoose.model<HL7InsuranceAdditionalInformationCertificationV6Document> ("HL7InsuranceAdditionalInformationCertificationV6", HL7InsuranceAdditionalInformationCertificationV6Schema);

