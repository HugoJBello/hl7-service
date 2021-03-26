
// Generated typescript code of HL7v 2.8 IN3  (Insurance Additional Information, Certification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInformationCertificationV8Document = mongoose.Document & HL7InsuranceAdditionalInformationCertificationV8I

const HL7InsuranceAdditionalInformationCertificationV8Schema = new mongoose.Schema({
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
  certificationType: String,
  certificationCategory: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInformationCertificationV8I extends Segment{
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
  certificationType: string
  certificationCategory: string
  
  }
  export const HL7InsuranceAdditionalInformationCertificationV8 = mongoose.model<HL7InsuranceAdditionalInformationCertificationV8Document> ("HL7InsuranceAdditionalInformationCertificationV8", HL7InsuranceAdditionalInformationCertificationV8Schema);

