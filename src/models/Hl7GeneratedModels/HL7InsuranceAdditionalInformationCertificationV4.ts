
// Generated typescript code of HL7v 2.4 IN3  (Insurance Additional Information, Certification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInformationCertificationV4Document = mongoose.Document & HL7InsuranceAdditionalInformationCertificationV4I

const HL7InsuranceAdditionalInformationCertificationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDIN3: String,
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
  preCertificationReqWindow: Array(String),
  caseManager: String,
  secondOpinionDate: String,
  secondOpinionStatus: String,
  secondOpinionDocumentationReceived: Array(String),
  secondOpinionPhysician: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInformationCertificationV4I extends Segment{
  setIDIN3: string
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
  preCertificationReqWindow: string[]
  caseManager: string
  secondOpinionDate: string
  secondOpinionStatus: string
  secondOpinionDocumentationReceived: string[]
  secondOpinionPhysician: string[]
  
  }
  export const HL7InsuranceAdditionalInformationCertificationV4 = mongoose.model<HL7InsuranceAdditionalInformationCertificationV4Document> ("HL7InsuranceAdditionalInformationCertificationV4", HL7InsuranceAdditionalInformationCertificationV4Schema);

