
// Generated typescript code of HL7v 2.5 IN2  (Insurance Additional Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInformationV5Document = mongoose.Document & HL7InsuranceAdditionalInformationV5I

const HL7InsuranceAdditionalInformationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  insuredsEmployeeID: Array(String),
  insuredsSocialSecurityNumber: String,
  insuredsEmployersNameAndID: Array(String),
  employerInformationData: String,
  mailClaimParty: Array(String),
  medicareHealthInsCardNumber: String,
  medicaidCaseName: Array(String),
  medicaidCaseNumber: String,
  militarySponsorName: Array(String),
  militaryIDNumber: String,
  dependentOfMilitaryRecipient: String,
  militaryOrganization: String,
  militaryStation: String,
  militaryService: String,
  militaryRankGrade: String,
  militaryStatus: String,
  militaryRetireDate: String,
  militaryNonAvailCertOnFile: String,
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
  ambulatoryStatus: Array(String),
  citizenship: Array(String),
  primaryLanguage: String,
  livingArrangement: String,
  publicityCode: String,
  protectionIndicator: String,
  studentIndicator: String,
  religion: String,
  mothersMaidenName: Array(String),
  nationality: String,
  ethnicGroup: Array(String),
  maritalStatus: Array(String),
  insuredsEmploymentStartDate: String,
  employmentStopDate: String,
  jobTitle: String,
  jobCodeClass: String,
  jobStatus: String,
  employerContactPersonName: Array(String),
  employerContactPersonPhoneNumber: Array(String),
  employerContactReason: String,
  insuredsContactPersonsName: Array(String),
  insuredsContactPersonPhoneNumber: Array(String),
  insuredsContactPersonReason: Array(String),
  relationshipToThePatientStartDate: String,
  relationshipToThePatientStopDate: Array(String),
  insuranceCoContactReason: String,
  insuranceCoContactPhoneNumber: String,
  policyScope: String,
  policySource: String,
  patientMemberNumber: String,
  guarantorsRelationshipToInsured: String,
  insuredsPhoneNumberHome: Array(String),
  insuredsEmployerPhoneNumber: Array(String),
  militaryHandicappedProgram: String,
  suspendFlag: String,
  copayLimitFlag: String,
  stoplossLimitFlag: String,
  insuredOrganizationNameAndID: Array(String),
  insuredEmployerOrganizationNameAndID: Array(String),
  race: Array(String),
  cMSPatientsRelationshipToInsured: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInformationV5I extends Segment{
  insuredsEmployeeID: string[]
  insuredsSocialSecurityNumber: string
  insuredsEmployersNameAndID: string[]
  employerInformationData: string
  mailClaimParty: string[]
  medicareHealthInsCardNumber: string
  medicaidCaseName: string[]
  medicaidCaseNumber: string
  militarySponsorName: string[]
  militaryIDNumber: string
  dependentOfMilitaryRecipient: string
  militaryOrganization: string
  militaryStation: string
  militaryService: string
  militaryRankGrade: string
  militaryStatus: string
  militaryRetireDate: string
  militaryNonAvailCertOnFile: string
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
  ambulatoryStatus: string[]
  citizenship: string[]
  primaryLanguage: string
  livingArrangement: string
  publicityCode: string
  protectionIndicator: string
  studentIndicator: string
  religion: string
  mothersMaidenName: string[]
  nationality: string
  ethnicGroup: string[]
  maritalStatus: string[]
  insuredsEmploymentStartDate: string
  employmentStopDate: string
  jobTitle: string
  jobCodeClass: string
  jobStatus: string
  employerContactPersonName: string[]
  employerContactPersonPhoneNumber: string[]
  employerContactReason: string
  insuredsContactPersonsName: string[]
  insuredsContactPersonPhoneNumber: string[]
  insuredsContactPersonReason: string[]
  relationshipToThePatientStartDate: string
  relationshipToThePatientStopDate: string[]
  insuranceCoContactReason: string
  insuranceCoContactPhoneNumber: string
  policyScope: string
  policySource: string
  patientMemberNumber: string
  guarantorsRelationshipToInsured: string
  insuredsPhoneNumberHome: string[]
  insuredsEmployerPhoneNumber: string[]
  militaryHandicappedProgram: string
  suspendFlag: string
  copayLimitFlag: string
  stoplossLimitFlag: string
  insuredOrganizationNameAndID: string[]
  insuredEmployerOrganizationNameAndID: string[]
  race: string[]
  cMSPatientsRelationshipToInsured: string
  
  }
  export const HL7InsuranceAdditionalInformationV5 = mongoose.model<HL7InsuranceAdditionalInformationV5Document> ("HL7InsuranceAdditionalInformationV5", HL7InsuranceAdditionalInformationV5Schema);

