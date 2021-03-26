
// Generated typescript code of HL7v 2.2 IN3  (Insurance Additional Info-certification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInfocertificationV2Document = mongoose.Document & HL7InsuranceAdditionalInfocertificationV2I

const HL7InsuranceAdditionalInfocertificationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdInsuranceCertification: String,
  certificationNumber: String,
  certifiedBy: String,
  certificationRequired: String,
  penalty: String,
  certificationDateTime: Date,
  certificationModifyDateTime: Date,
  operator: String,
  certificationBeginDate: String,
  certificationEndDate: String,
  days: String,
  nonconcurCodeDescription: String,
  nonconcurEffectiveDateTime: Date,
  physicianReviewer: String,
  certificationContact: String,
  certificationContactPhoneNumber: Array(String),
  appealReason: String,
  certificationAgency: String,
  certificationAgencyPhoneNumber: Array(String),
  precertificationRequiredWindow: Array(String),
  caseManager: String,
  secondOpinionDate: String,
  secondOpinionStatus: String,
  secondOpinionDocumentationReceived: String,
  secondOpinionPractitioner: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInfocertificationV2I extends Segment{
  setIdInsuranceCertification: string
  certificationNumber: string
  certifiedBy: string
  certificationRequired: string
  penalty: string
  certificationDateTime: Date
  certificationModifyDateTime: Date
  operator: string
  certificationBeginDate: string
  certificationEndDate: string
  days: string
  nonconcurCodeDescription: string
  nonconcurEffectiveDateTime: Date
  physicianReviewer: string
  certificationContact: string
  certificationContactPhoneNumber: string[]
  appealReason: string
  certificationAgency: string
  certificationAgencyPhoneNumber: string[]
  precertificationRequiredWindow: string[]
  caseManager: string
  secondOpinionDate: string
  secondOpinionStatus: string
  secondOpinionDocumentationReceived: string
  secondOpinionPractitioner: string
  
  }
  export const HL7InsuranceAdditionalInfocertificationV2 = mongoose.model<HL7InsuranceAdditionalInfocertificationV2Document> ("HL7InsuranceAdditionalInfocertificationV2", HL7InsuranceAdditionalInfocertificationV2Schema);

