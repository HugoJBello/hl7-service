
// Generated typescript code of HL7v 2.5 GT1  (Guarantor)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GuarantorV5Document = mongoose.Document & HL7GuarantorV5I

const HL7GuarantorV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDGT1: String,
  guarantorNumber: Array(String),
  guarantorName: Array(String),
  guarantorSpouseName: Array(String),
  guarantorAddress: Array(String),
  guarantorPhNumHome: Array(String),
  guarantorPhNumBusiness: Array(String),
  guarantorDateTimeOfBirth: Date,
  guarantorAdministrativeSex: String,
  guarantorType: String,
  guarantorRelationship: String,
  guarantorSSN: String,
  guarantorDateBegin: String,
  guarantorDateEnd: String,
  guarantorPriority: Number,
  guarantorEmployerName: Array(String),
  guarantorEmployerAddress: Array(String),
  guarantorEmployerPhoneNumber: Array(String),
  guarantorEmployeeIDNumber: Array(String),
  guarantorEmploymentStatus: String,
  guarantorOrganizationName: Array(String),
  guarantorBillingHoldFlag: String,
  guarantorCreditRatingCode: String,
  guarantorDeathDateAndTime: Date,
  guarantorDeathFlag: String,
  guarantorChargeAdjustmentCode: String,
  guarantorHouseholdAnnualIncome: String,
  guarantorHouseholdSize: Number,
  guarantorEmployerIDNumber: Array(String),
  guarantorMaritalStatusCode: String,
  guarantorHireEffectiveDate: String,
  employmentStopDate: String,
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
  contactPersonsName: Array(String),
  contactPersonsTelephoneNumber: Array(String),
  contactReason: String,
  contactRelationship: String,
  jobTitle: String,
  jobCodeClass: String,
  guarantorEmployersOrganizationName: Array(String),
  handicap: String,
  jobStatus: String,
  guarantorFinancialClass: String,
  guarantorRace: Array(String),
  guarantorBirthPlace: String,
  vIPIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7GuarantorV5I extends Segment{
  setIDGT1: string
  guarantorNumber: string[]
  guarantorName: string[]
  guarantorSpouseName: string[]
  guarantorAddress: string[]
  guarantorPhNumHome: string[]
  guarantorPhNumBusiness: string[]
  guarantorDateTimeOfBirth: Date
  guarantorAdministrativeSex: string
  guarantorType: string
  guarantorRelationship: string
  guarantorSSN: string
  guarantorDateBegin: string
  guarantorDateEnd: string
  guarantorPriority: number
  guarantorEmployerName: string[]
  guarantorEmployerAddress: string[]
  guarantorEmployerPhoneNumber: string[]
  guarantorEmployeeIDNumber: string[]
  guarantorEmploymentStatus: string
  guarantorOrganizationName: string[]
  guarantorBillingHoldFlag: string
  guarantorCreditRatingCode: string
  guarantorDeathDateAndTime: Date
  guarantorDeathFlag: string
  guarantorChargeAdjustmentCode: string
  guarantorHouseholdAnnualIncome: string
  guarantorHouseholdSize: number
  guarantorEmployerIDNumber: string[]
  guarantorMaritalStatusCode: string
  guarantorHireEffectiveDate: string
  employmentStopDate: string
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
  contactPersonsName: string[]
  contactPersonsTelephoneNumber: string[]
  contactReason: string
  contactRelationship: string
  jobTitle: string
  jobCodeClass: string
  guarantorEmployersOrganizationName: string[]
  handicap: string
  jobStatus: string
  guarantorFinancialClass: string
  guarantorRace: string[]
  guarantorBirthPlace: string
  vIPIndicator: string
  
  }
  export const HL7GuarantorV5 = mongoose.model<HL7GuarantorV5Document> ("HL7GuarantorV5", HL7GuarantorV5Schema);

