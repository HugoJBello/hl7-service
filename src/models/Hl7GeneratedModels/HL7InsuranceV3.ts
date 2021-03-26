
// Generated typescript code of HL7v 2.3 IN1  (Insurance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceV3Document = mongoose.Document & HL7InsuranceV3I

const HL7InsuranceV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDInsurance: String,
  insurancePlanID: String,
  insuranceCompanyID: Array(String),
  insuranceCompanyName: Array(String),
  insuranceCompanyAddress: Array(String),
  insuranceCoContactPerson: Array(String),
  insuranceCoPhoneNumber: Array(String),
  groupNumber: String,
  groupName: Array(String),
  insuredsGroupEmployerID: Array(String),
  insuredsGroupEmpName: Array(String),
  planEffectiveDate: String,
  planExpirationDate: String,
  authorizationInformation: String,
  planType: String,
  nameOfInsured: Array(String),
  insuredsRelationshipToPatient: String,
  insuredsDateOfBirth: Date,
  insuredsAddress: Array(String),
  assignmentOfBenefits: String,
  coordinationOfBenefits: String,
  coordOfBenPriority: String,
  noticeOfAdmissionCode: String,
  noticeOfAdmissionDate: String,
  reportOfEigibilityCode: String,
  reportOfEligibilityDate: String,
  releaseInformationCode: String,
  preAdmitCert: String,
  verificationDateTime: Date,
  verificationBy: String,
  typeOfAgreementCode: String,
  billingStatus: String,
  lifetimeReserveDays: Number,
  delayBeforeLifetimeReserveDays: Number,
  companyPlanCode: String,
  policyNumber: String,
  policyDeductible: String,
  policyLimitAmount: String,
  policyLimitDays: Number,
  roomRateSemiPrivate: String,
  roomRatePrivate: String,
  insuredsEmploymentStatus: String,
  insuredsSex: String,
  insuredsEmployerAddress: Array(String),
  verificationStatus: String,
  priorInsurancePlanID: String,
  coverageType: String,
  handicap: String,
  insuredsIDNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InsuranceV3I extends Segment{
  setIDInsurance: string
  insurancePlanID: string
  insuranceCompanyID: string[]
  insuranceCompanyName: string[]
  insuranceCompanyAddress: string[]
  insuranceCoContactPerson: string[]
  insuranceCoPhoneNumber: string[]
  groupNumber: string
  groupName: string[]
  insuredsGroupEmployerID: string[]
  insuredsGroupEmpName: string[]
  planEffectiveDate: string
  planExpirationDate: string
  authorizationInformation: string
  planType: string
  nameOfInsured: string[]
  insuredsRelationshipToPatient: string
  insuredsDateOfBirth: Date
  insuredsAddress: string[]
  assignmentOfBenefits: string
  coordinationOfBenefits: string
  coordOfBenPriority: string
  noticeOfAdmissionCode: string
  noticeOfAdmissionDate: string
  reportOfEigibilityCode: string
  reportOfEligibilityDate: string
  releaseInformationCode: string
  preAdmitCert: string
  verificationDateTime: Date
  verificationBy: string
  typeOfAgreementCode: string
  billingStatus: string
  lifetimeReserveDays: number
  delayBeforeLifetimeReserveDays: number
  companyPlanCode: string
  policyNumber: string
  policyDeductible: string
  policyLimitAmount: string
  policyLimitDays: number
  roomRateSemiPrivate: string
  roomRatePrivate: string
  insuredsEmploymentStatus: string
  insuredsSex: string
  insuredsEmployerAddress: string[]
  verificationStatus: string
  priorInsurancePlanID: string
  coverageType: string
  handicap: string
  insuredsIDNumber: string[]
  
  }
  export const HL7InsuranceV3 = mongoose.model<HL7InsuranceV3Document> ("HL7InsuranceV3", HL7InsuranceV3Schema);

