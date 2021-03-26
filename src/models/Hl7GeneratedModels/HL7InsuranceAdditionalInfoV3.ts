
// Generated typescript code of HL7v 2.3 IN2  (Insurance additional info)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInfoV3Document = mongoose.Document & HL7InsuranceAdditionalInfoV3I

const HL7InsuranceAdditionalInfoV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  insuredsEmployeeID: Array(String),
  insuredsSocialSecurityNumber: String,
  insuredsEmployerName: Array(String),
  employerInformationData: String,
  mailClaimParty: Array(String),
  medicareHealthInsCardNumber: String,
  medicaidCaseName: Array(String),
  medicaidCaseNumber: String,
  champusSponsorName: Array(String),
  champusIDNumber: String,
  dependentOfChampusRecipient: String,
  champusOrganization: String,
  champusStation: String,
  champusService: String,
  champusRankGrade: String,
  champusStatus: String,
  champusRetireDate: String,
  champusNonAvailCertOnFile: String,
  babyCoverage: String,
  combineBabyBill: String,
  bloodDeductible: String,
  specialCoverageApprovalName: Array(String),
  specialCoverageApprovalTitle: String,
  nonCoveredInsuranceCode: Array(String),
  payorID: Array(String),
  payorSubscriberID: Array(String),
  eligibilitySource: String,
  roomCoverageTypeAmount: Array(String),
  policyTypeAmount: Array(String),
  dailyDeductible: String,
  livingDependency: String,
  ambulatoryStatus: String,
  citizenship: String,
  primaryLanguage: String,
  livingArrangement: String,
  publicityIndicator: String,
  protectionIndicator: String,
  studentIndicator: String,
  religion: String,
  motherSMaidenName: String,
  nationalityCode: String,
  ethnicGroup: String,
  maritalStatus: Array(String),
  employmentStartDate: String,
  employmentStopDate: String,
  jobTitle: String,
  jobCodeClass: String,
  jobStatus: String,
  employerContactPersonName: Array(String),
  employerContactPersonPhoneNumber: Array(String),
  employerContactReason: String,
  insuredsContactPersonName: Array(String),
  insuredSContactPersonTelephoneNumber: Array(String),
  insuredSContactPersonReason: Array(String),
  relationshipToThePatientStartDate: String,
  relationshipToThePatientStopDate: Array(String),
  insuranceCompanyContactReason: String,
  insuranceCompanyContactPhoneNumber: String,
  policyScope: String,
  policySource: String,
  patientMemberNumber: String,
  guarantorsRelationshipToInsured: String,
  insuredsTelephoneNumberHome: Array(String),
  insuredsEmployerTelephoneNumber: Array(String),
  militaryHandicappedProgram: String,
  suspendFlag: String,
  copayLimitFlag: String,
  stoplossLimitFlag: String,
  insuredOrganizationNameAndID: Array(String),
  insuredEmployerOrganizationNameAndID: Array(String),
  race: String,
  patientRelationshipToInsured: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInfoV3I extends Segment{
  insuredsEmployeeID: string[]
  insuredsSocialSecurityNumber: string
  insuredsEmployerName: string[]
  employerInformationData: string
  mailClaimParty: string[]
  medicareHealthInsCardNumber: string
  medicaidCaseName: string[]
  medicaidCaseNumber: string
  champusSponsorName: string[]
  champusIDNumber: string
  dependentOfChampusRecipient: string
  champusOrganization: string
  champusStation: string
  champusService: string
  champusRankGrade: string
  champusStatus: string
  champusRetireDate: string
  champusNonAvailCertOnFile: string
  babyCoverage: string
  combineBabyBill: string
  bloodDeductible: string
  specialCoverageApprovalName: string[]
  specialCoverageApprovalTitle: string
  nonCoveredInsuranceCode: string[]
  payorID: string[]
  payorSubscriberID: string[]
  eligibilitySource: string
  roomCoverageTypeAmount: string[]
  policyTypeAmount: string[]
  dailyDeductible: string
  livingDependency: string
  ambulatoryStatus: string
  citizenship: string
  primaryLanguage: string
  livingArrangement: string
  publicityIndicator: string
  protectionIndicator: string
  studentIndicator: string
  religion: string
  motherSMaidenName: string
  nationalityCode: string
  ethnicGroup: string
  maritalStatus: string[]
  employmentStartDate: string
  employmentStopDate: string
  jobTitle: string
  jobCodeClass: string
  jobStatus: string
  employerContactPersonName: string[]
  employerContactPersonPhoneNumber: string[]
  employerContactReason: string
  insuredsContactPersonName: string[]
  insuredSContactPersonTelephoneNumber: string[]
  insuredSContactPersonReason: string[]
  relationshipToThePatientStartDate: string
  relationshipToThePatientStopDate: string[]
  insuranceCompanyContactReason: string
  insuranceCompanyContactPhoneNumber: string
  policyScope: string
  policySource: string
  patientMemberNumber: string
  guarantorsRelationshipToInsured: string
  insuredsTelephoneNumberHome: string[]
  insuredsEmployerTelephoneNumber: string[]
  militaryHandicappedProgram: string
  suspendFlag: string
  copayLimitFlag: string
  stoplossLimitFlag: string
  insuredOrganizationNameAndID: string[]
  insuredEmployerOrganizationNameAndID: string[]
  race: string
  patientRelationshipToInsured: string
  
  }
  export const HL7InsuranceAdditionalInfoV3 = mongoose.model<HL7InsuranceAdditionalInfoV3Document> ("HL7InsuranceAdditionalInfoV3", HL7InsuranceAdditionalInfoV3Schema);

