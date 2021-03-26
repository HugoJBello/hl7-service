
// Generated typescript code of HL7v 2.3 GT1  (Guarantor)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GuarantorV3Document = mongoose.Document & HL7GuarantorV3I

const HL7GuarantorV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDGuarantor: String,
  guarantorNumber: Array(String),
  guarantorName: Array(String),
  guarantorSpouseName: Array(String),
  guarantorAddress: Array(String),
  guarantorPhNumHome: Array(String),
  guarantorPhNumBusiness: Array(String),
  guarantorDateTimeOfBirth: Date,
  guarantorSex: String,
  guarantorType: String,
  guarantorRelationship: String,
  guarantorSSN: String,
  guarantorDateBegin: String,
  guarantorDateEnd: String,
  guarantorPriority: Number,
  guarantorEmployerName: Array(String),
  guarantorEmployerAddress: Array(String),
  guarantorEmployPhoneNumber: Array(String),
  guarantorEmployeeIDNumber: Array(String),
  guarantorEmploymentStatus: String,
  guarantorOrganization: Array(String),
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
  ambulatoryStatusCode: String,
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
  contactPersonsName: Array(String),
  contactPersonSTelephoneNumber: Array(String),
  contactReason: String,
  contactRelationshipCode: String,
  jobTitle: String,
  jobCodeClass: String,
  guarantorEmployersOrganizationName: Array(String),
  handicap: String,
  jobStatus: String,
  guarantorFinancialClass: String,
  guarantorRace: String,
  
  }, { timestamps: true });
  
export interface HL7GuarantorV3I extends Segment{
  setIDGuarantor: string
  guarantorNumber: string[]
  guarantorName: string[]
  guarantorSpouseName: string[]
  guarantorAddress: string[]
  guarantorPhNumHome: string[]
  guarantorPhNumBusiness: string[]
  guarantorDateTimeOfBirth: Date
  guarantorSex: string
  guarantorType: string
  guarantorRelationship: string
  guarantorSSN: string
  guarantorDateBegin: string
  guarantorDateEnd: string
  guarantorPriority: number
  guarantorEmployerName: string[]
  guarantorEmployerAddress: string[]
  guarantorEmployPhoneNumber: string[]
  guarantorEmployeeIDNumber: string[]
  guarantorEmploymentStatus: string
  guarantorOrganization: string[]
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
  ambulatoryStatusCode: string
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
  contactPersonsName: string[]
  contactPersonSTelephoneNumber: string[]
  contactReason: string
  contactRelationshipCode: string
  jobTitle: string
  jobCodeClass: string
  guarantorEmployersOrganizationName: string[]
  handicap: string
  jobStatus: string
  guarantorFinancialClass: string
  guarantorRace: string
  
  }
  export const HL7GuarantorV3 = mongoose.model<HL7GuarantorV3Document> ("HL7GuarantorV3", HL7GuarantorV3Schema);

