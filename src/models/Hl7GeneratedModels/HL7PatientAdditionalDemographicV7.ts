
// Generated typescript code of HL7v 2.7 PD1  (Patient Additional Demographic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAdditionalDemographicV7Document = mongoose.Document & HL7PatientAdditionalDemographicV7I

const HL7PatientAdditionalDemographicV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  livingDependency: Array(String),
  livingArrangement: String,
  patientPrimaryFacility: Array(String),
  patientPrimaryCareProviderNameIdNo: String,
  studentIndicator: String,
  handicap: String,
  livingWillCode: String,
  organDonorCode: String,
  separateBill: String,
  duplicatePatient: Array(String),
  publicityCode: String,
  protectionIndicator: String,
  protectionIndicatorEffectiveDate: String,
  placeOfWorship: Array(String),
  advanceDirectiveCode: Array(String),
  immunizationRegistryStatus: String,
  immunizationRegistryStatusEffectiveDate: String,
  publicityCodeEffectiveDate: String,
  militaryBranch: String,
  militaryRankGrade: String,
  militaryStatus: String,
  advanceDirectiveLastVerifiedDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientAdditionalDemographicV7I extends Segment{
  livingDependency: string[]
  livingArrangement: string
  patientPrimaryFacility: string[]
  patientPrimaryCareProviderNameIdNo: string
  studentIndicator: string
  handicap: string
  livingWillCode: string
  organDonorCode: string
  separateBill: string
  duplicatePatient: string[]
  publicityCode: string
  protectionIndicator: string
  protectionIndicatorEffectiveDate: string
  placeOfWorship: string[]
  advanceDirectiveCode: string[]
  immunizationRegistryStatus: string
  immunizationRegistryStatusEffectiveDate: string
  publicityCodeEffectiveDate: string
  militaryBranch: string
  militaryRankGrade: string
  militaryStatus: string
  advanceDirectiveLastVerifiedDate: string
  
  }
  export const HL7PatientAdditionalDemographicV7 = mongoose.model<HL7PatientAdditionalDemographicV7Document> ("HL7PatientAdditionalDemographicV7", HL7PatientAdditionalDemographicV7Schema);

