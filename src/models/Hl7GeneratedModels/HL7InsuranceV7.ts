
// Generated typescript code of HL7v 2.7 IN1  (Insurance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceV7Document = mongoose.Document & HL7InsuranceV7I

const HL7InsuranceV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdIn1: String,
  healthPlanId: String,
  insuranceCompanyId: Array(String),
  insuranceCompanyName: Array(String),
  insuranceCompanyAddress: Array(String),
  insuranceCoContactPerson: Array(String),
  insuranceCoPhoneNumber: Array(String),
  groupNumber: String,
  groupName: Array(String),
  insuredsGroupEmpId: Array(String),
  insuredsGroupEmpName: Array(String),
  planEffectiveDate: String,
  planExpirationDate: String,
  authorizationInformation: String,
  planType: String,
  nameOfInsured: Array(String),
  insuredsRelationshipToPatient: String,
  insuredsDateOfBirth: String,
  insuredsAddress: Array(String),
  assignmentOfBenefits: String,
  coordinationOfBenefits: String,
  coordOfBenPriority: String,
  noticeOfAdmissionFlag: String,
  noticeOfAdmissionDate: String,
  reportOfEligibilityFlag: String,
  reportOfEligibilityDate: String,
  releaseInformationCode: String,
  preadmitCertPac: String,
  verificationDateTime: String,
  verificationBy: Array(String),
  typeOfAgreementCode: String,
  billingStatus: String,
  lifetimeReserveDays: Number,
  delayBeforeLrDay: Number,
  companyPlanCode: String,
  policyNumber: String,
  policyDeductible: String,
  policyLimitAmount: String,
  policyLimitDays: Number,
  roomRateSemiprivate: String,
  roomRatePrivate: String,
  insuredsEmploymentStatus: String,
  insuredsAdministrativeSex: String,
  insuredsEmployersAddress: Array(String),
  verificationStatus: String,
  priorInsurancePlanId: String,
  coverageType: String,
  handicap: String,
  insuredsIdNumber: Array(String),
  signatureCode: String,
  signatureCodeDate: String,
  insuredsBirthPlace: String,
  vipIndicator: String,
  externalHealthPlanIdentifiers: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InsuranceV7I extends Segment{
  setIdIn1: string
  healthPlanId: string
  insuranceCompanyId: string[]
  insuranceCompanyName: string[]
  insuranceCompanyAddress: string[]
  insuranceCoContactPerson: string[]
  insuranceCoPhoneNumber: string[]
  groupNumber: string
  groupName: string[]
  insuredsGroupEmpId: string[]
  insuredsGroupEmpName: string[]
  planEffectiveDate: string
  planExpirationDate: string
  authorizationInformation: string
  planType: string
  nameOfInsured: string[]
  insuredsRelationshipToPatient: string
  insuredsDateOfBirth: string
  insuredsAddress: string[]
  assignmentOfBenefits: string
  coordinationOfBenefits: string
  coordOfBenPriority: string
  noticeOfAdmissionFlag: string
  noticeOfAdmissionDate: string
  reportOfEligibilityFlag: string
  reportOfEligibilityDate: string
  releaseInformationCode: string
  preadmitCertPac: string
  verificationDateTime: string
  verificationBy: string[]
  typeOfAgreementCode: string
  billingStatus: string
  lifetimeReserveDays: number
  delayBeforeLrDay: number
  companyPlanCode: string
  policyNumber: string
  policyDeductible: string
  policyLimitAmount: string
  policyLimitDays: number
  roomRateSemiprivate: string
  roomRatePrivate: string
  insuredsEmploymentStatus: string
  insuredsAdministrativeSex: string
  insuredsEmployersAddress: string[]
  verificationStatus: string
  priorInsurancePlanId: string
  coverageType: string
  handicap: string
  insuredsIdNumber: string[]
  signatureCode: string
  signatureCodeDate: string
  insuredsBirthPlace: string
  vipIndicator: string
  externalHealthPlanIdentifiers: string[]
  
  }
  export const HL7InsuranceV7 = mongoose.model<HL7InsuranceV7Document> ("HL7InsuranceV7", HL7InsuranceV7Schema);

