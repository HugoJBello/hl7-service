
// Generated typescript code of HL7v 2.7 IN3  (Insurance Additional Information, Certification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInformationCertificationV7Document = mongoose.Document & HL7InsuranceAdditionalInformationCertificationV7I

const HL7InsuranceAdditionalInformationCertificationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdIn3: String,
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
  nonconcurCodeDescription: String,
  nonconcurEffectiveDateTime: String,
  physicianReviewer: Array(String),
  certificationContact: String,
  certificationContactPhoneNumber: Array(String),
  appealReason: String,
  certificationAgency: String,
  certificationAgencyPhoneNumber: Array(String),
  precertificationRequirement: Array(String),
  caseManager: String,
  secondOpinionDate: String,
  secondOpinionStatus: String,
  secondOpinionDocumentationReceived: Array(String),
  secondOpinionPhysician: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInformationCertificationV7I extends Segment{
  setIdIn3: string
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
  nonconcurCodeDescription: string
  nonconcurEffectiveDateTime: string
  physicianReviewer: string[]
  certificationContact: string
  certificationContactPhoneNumber: string[]
  appealReason: string
  certificationAgency: string
  certificationAgencyPhoneNumber: string[]
  precertificationRequirement: string[]
  caseManager: string
  secondOpinionDate: string
  secondOpinionStatus: string
  secondOpinionDocumentationReceived: string[]
  secondOpinionPhysician: string[]
  
  }
  export const HL7InsuranceAdditionalInformationCertificationV7 = mongoose.model<HL7InsuranceAdditionalInformationCertificationV7Document> ("HL7InsuranceAdditionalInformationCertificationV7", HL7InsuranceAdditionalInformationCertificationV7Schema);

