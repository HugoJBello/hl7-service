
// Generated typescript code of HL7v 2.5 IN1  (Insurance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceV5Document = mongoose.Document & HL7InsuranceV5I

const HL7InsuranceV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDIN1: String,
  insurancePlanID: String,
  insuranceCompanyID: Array(String),
  insuranceCompanyName: Array(String),
  insuranceCompanyAddress: Array(String),
  insuranceCoContactPerson: Array(String),
  insuranceCoPhoneNumber: Array(String),
  groupNumber: String,
  groupName: Array(String),
  insuredsGroupEmpID: Array(String),
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
  noticeOfAdmissionFlag: String,
  noticeOfAdmissionDate: String,
  reportOfEligibilityFlag: String,
  reportOfEligibilityDate: String,
  releaseInformationCode: String,
  preAdmitCertPAC: String,
  verificationDateTime: Date,
  verificationBy: Array(String),
  typeOfAgreementCode: String,
  billingStatus: String,
  lifetimeReserveDays: Number,
  delayBeforeLRDay: Number,
  companyPlanCode: String,
  policyNumber: String,
  policyDeductible: String,
  policyLimitAmount: String,
  policyLimitDays: Number,
  roomRateSemiPrivate: String,
  roomRatePrivate: String,
  insuredsEmploymentStatus: String,
  insuredsAdministrativeSex: String,
  insuredsEmployersAddress: Array(String),
  verificationStatus: String,
  priorInsurancePlanID: String,
  coverageType: String,
  handicap: String,
  insuredsIDNumber: Array(String),
  signatureCode: String,
  signatureCodeDate: String,
  insuredsBirthPlace: String,
  vIPIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceV5I extends Segment{
  setIDIN1: string
  insurancePlanID: string
  insuranceCompanyID: string[]
  insuranceCompanyName: string[]
  insuranceCompanyAddress: string[]
  insuranceCoContactPerson: string[]
  insuranceCoPhoneNumber: string[]
  groupNumber: string
  groupName: string[]
  insuredsGroupEmpID: string[]
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
  noticeOfAdmissionFlag: string
  noticeOfAdmissionDate: string
  reportOfEligibilityFlag: string
  reportOfEligibilityDate: string
  releaseInformationCode: string
  preAdmitCertPAC: string
  verificationDateTime: Date
  verificationBy: string[]
  typeOfAgreementCode: string
  billingStatus: string
  lifetimeReserveDays: number
  delayBeforeLRDay: number
  companyPlanCode: string
  policyNumber: string
  policyDeductible: string
  policyLimitAmount: string
  policyLimitDays: number
  roomRateSemiPrivate: string
  roomRatePrivate: string
  insuredsEmploymentStatus: string
  insuredsAdministrativeSex: string
  insuredsEmployersAddress: string[]
  verificationStatus: string
  priorInsurancePlanID: string
  coverageType: string
  handicap: string
  insuredsIDNumber: string[]
  signatureCode: string
  signatureCodeDate: string
  insuredsBirthPlace: string
  vIPIndicator: string
  
  }
  export const HL7InsuranceV5 = mongoose.model<HL7InsuranceV5Document> ("HL7InsuranceV5", HL7InsuranceV5Schema);

