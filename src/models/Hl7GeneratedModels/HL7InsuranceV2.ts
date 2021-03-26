
// Generated typescript code of HL7v 2.2 IN1  (Insurance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceV2Document = mongoose.Document & HL7InsuranceV2I

const HL7InsuranceV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdInsurance: String,
  insurancePlanId: String,
  insuranceCompanyId: String,
  insuranceCompanyName: String,
  insuranceCompanyAddress: String,
  insuranceCompanyContactPers: String,
  insuranceCompanyPhoneNumber: Array(String),
  groupNumber: String,
  groupName: String,
  insuredsGroupEmployerId: String,
  insuredsGroupEmployerName: String,
  planEffectiveDate: String,
  planExpirationDate: String,
  authorizationInformation: String,
  planType: String,
  nameOfInsured: String,
  insuredsRelationshipToPatient: String,
  insuredsDateOfBirth: String,
  insuredsAddress: String,
  assignmentOfBenefits: String,
  coordinationOfBenefits: String,
  coordinationOfBenefitsPriority: String,
  noticeOfAdmissionCode: String,
  noticeOfAdmissionDate: String,
  reportOfEligibilityCode: String,
  reportOfEligibilityDate: String,
  releaseInformationCode: String,
  preadmitCertificationPac: String,
  verificationDateTime: Date,
  verificationBy: String,
  typeOfAgreementCode: String,
  billingStatus: String,
  lifetimeReserveDays: Number,
  delayBeforeLifetimeReserveDays: Number,
  companyPlanCode: String,
  policyNumber: String,
  policyDeductible: Number,
  policyLimitAmount: Number,
  policyLimitDays: Number,
  roomRateSemiprivate: Number,
  roomRatePrivate: Number,
  insuredsEmploymentStatus: String,
  insuredsSex: String,
  insuredsEmployerAddress: String,
  verificationStatus: String,
  priorInsurancePlanId: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceV2I extends Segment{
  setIdInsurance: string
  insurancePlanId: string
  insuranceCompanyId: string
  insuranceCompanyName: string
  insuranceCompanyAddress: string
  insuranceCompanyContactPers: string
  insuranceCompanyPhoneNumber: string[]
  groupNumber: string
  groupName: string
  insuredsGroupEmployerId: string
  insuredsGroupEmployerName: string
  planEffectiveDate: string
  planExpirationDate: string
  authorizationInformation: string
  planType: string
  nameOfInsured: string
  insuredsRelationshipToPatient: string
  insuredsDateOfBirth: string
  insuredsAddress: string
  assignmentOfBenefits: string
  coordinationOfBenefits: string
  coordinationOfBenefitsPriority: string
  noticeOfAdmissionCode: string
  noticeOfAdmissionDate: string
  reportOfEligibilityCode: string
  reportOfEligibilityDate: string
  releaseInformationCode: string
  preadmitCertificationPac: string
  verificationDateTime: Date
  verificationBy: string
  typeOfAgreementCode: string
  billingStatus: string
  lifetimeReserveDays: number
  delayBeforeLifetimeReserveDays: number
  companyPlanCode: string
  policyNumber: string
  policyDeductible: number
  policyLimitAmount: number
  policyLimitDays: number
  roomRateSemiprivate: number
  roomRatePrivate: number
  insuredsEmploymentStatus: string
  insuredsSex: string
  insuredsEmployerAddress: string
  verificationStatus: string
  priorInsurancePlanId: string
  
  }
  export const HL7InsuranceV2 = mongoose.model<HL7InsuranceV2Document> ("HL7InsuranceV2", HL7InsuranceV2Schema);

