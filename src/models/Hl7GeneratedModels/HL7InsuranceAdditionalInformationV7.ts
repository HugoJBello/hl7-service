
// Generated typescript code of HL7v 2.7 IN2  (Insurance Additional Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInformationV7Document = mongoose.Document & HL7InsuranceAdditionalInformationV7I

const HL7InsuranceAdditionalInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  insuredsEmployeeId: Array(String),
  insuredsSocialSecurityNumber: String,
  insuredsEmployersNameAndId: Array(String),
  employerInformationData: String,
  mailClaimParty: Array(String),
  medicareHealthInsCardNumber: String,
  medicaidCaseName: Array(String),
  medicaidCaseNumber: String,
  militarySponsorName: Array(String),
  militaryIdNumber: String,
  dependentOfMilitaryRecipient: String,
  militaryOrganization: String,
  militaryStation: String,
  militaryService: String,
  militaryRankGrade: String,
  militaryStatus: String,
  militaryRetireDate: String,
  militaryNonavailCertOnFile: String,
  babyCoverage: String,
  combineBabyBill: String,
  bloodDeductible: String,
  specialCoverageApprovalName: Array(String),
  specialCoverageApprovalTitle: String,
  noncoveredInsuranceCode: Array(String),
  payorId: Array(String),
  payorSubscriberId: Array(String),
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
  insuranceCoContactPhoneNumber: Array(String),
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
  insuredOrganizationNameAndId: Array(String),
  insuredEmployerOrganizationNameAndId: Array(String),
  race: Array(String),
  patientsRelationshipToInsured: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInformationV7I extends Segment{
  insuredsEmployeeId: string[]
  insuredsSocialSecurityNumber: string
  insuredsEmployersNameAndId: string[]
  employerInformationData: string
  mailClaimParty: string[]
  medicareHealthInsCardNumber: string
  medicaidCaseName: string[]
  medicaidCaseNumber: string
  militarySponsorName: string[]
  militaryIdNumber: string
  dependentOfMilitaryRecipient: string
  militaryOrganization: string
  militaryStation: string
  militaryService: string
  militaryRankGrade: string
  militaryStatus: string
  militaryRetireDate: string
  militaryNonavailCertOnFile: string
  babyCoverage: string
  combineBabyBill: string
  bloodDeductible: string
  specialCoverageApprovalName: string[]
  specialCoverageApprovalTitle: string
  noncoveredInsuranceCode: string[]
  payorId: string[]
  payorSubscriberId: string[]
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
  insuranceCoContactPhoneNumber: string[]
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
  insuredOrganizationNameAndId: string[]
  insuredEmployerOrganizationNameAndId: string[]
  race: string[]
  patientsRelationshipToInsured: string
  
  }
  export const HL7InsuranceAdditionalInformationV7 = mongoose.model<HL7InsuranceAdditionalInformationV7Document> ("HL7InsuranceAdditionalInformationV7", HL7InsuranceAdditionalInformationV7Schema);

