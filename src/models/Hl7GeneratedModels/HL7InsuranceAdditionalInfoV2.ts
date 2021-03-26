
// Generated typescript code of HL7v 2.2 IN2  (Insurance Additional Info)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InsuranceAdditionalInfoV2Document = mongoose.Document & HL7InsuranceAdditionalInfoV2I

const HL7InsuranceAdditionalInfoV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  insuredsEmployeeId: String,
  insuredsSocialSecurityNumber: Number,
  insuredsEmployerName: String,
  employerInformationData: String,
  mailClaimParty: String,
  medicareHealthInsuranceCardNumber: Number,
  medicaidCaseName: String,
  medicaidCaseNumber: Number,
  champusSponsorName: String,
  champusIdNumber: Number,
  dependentOfChampusRecipient: String,
  champusOrganization: String,
  champusStation: String,
  champusService: String,
  champusRankGrade: String,
  champusStatus: String,
  champusRetireDate: String,
  champusNonavailabilityCertificationOnFile: String,
  babyCoverage: String,
  combineBabyBill: String,
  bloodDeductible: Number,
  specialCoverageApprovalName: String,
  specialCoverageApprovalTitle: String,
  noncoveredInsuranceCode: Array(String),
  payorId: String,
  payorSubscriberId: String,
  eligibilitySource: String,
  roomCoverageTypeAmount: Array(String),
  policyTypeAmount: Array(String),
  dailyDeductible: String,
  
  }, { timestamps: true });
  
export interface HL7InsuranceAdditionalInfoV2I extends Segment{
  insuredsEmployeeId: string
  insuredsSocialSecurityNumber: number
  insuredsEmployerName: string
  employerInformationData: string
  mailClaimParty: string
  medicareHealthInsuranceCardNumber: number
  medicaidCaseName: string
  medicaidCaseNumber: number
  champusSponsorName: string
  champusIdNumber: number
  dependentOfChampusRecipient: string
  champusOrganization: string
  champusStation: string
  champusService: string
  champusRankGrade: string
  champusStatus: string
  champusRetireDate: string
  champusNonavailabilityCertificationOnFile: string
  babyCoverage: string
  combineBabyBill: string
  bloodDeductible: number
  specialCoverageApprovalName: string
  specialCoverageApprovalTitle: string
  noncoveredInsuranceCode: string[]
  payorId: string
  payorSubscriberId: string
  eligibilitySource: string
  roomCoverageTypeAmount: string[]
  policyTypeAmount: string[]
  dailyDeductible: string
  
  }
  export const HL7InsuranceAdditionalInfoV2 = mongoose.model<HL7InsuranceAdditionalInfoV2Document> ("HL7InsuranceAdditionalInfoV2", HL7InsuranceAdditionalInfoV2Schema);

