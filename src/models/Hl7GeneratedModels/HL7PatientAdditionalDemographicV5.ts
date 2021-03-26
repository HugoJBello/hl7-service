
// Generated typescript code of HL7v 2.5 PD1  (Patient Additional Demographic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAdditionalDemographicV5Document = mongoose.Document & HL7PatientAdditionalDemographicV5I

const HL7PatientAdditionalDemographicV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  livingDependency: Array(String),
  livingArrangement: String,
  patientPrimaryFacility: Array(String),
  patientPrimaryCareProviderNameAndIDNo: Array(String),
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
  
  }, { timestamps: true });
  
export interface HL7PatientAdditionalDemographicV5I extends Segment{
  livingDependency: string[]
  livingArrangement: string
  patientPrimaryFacility: string[]
  patientPrimaryCareProviderNameAndIDNo: string[]
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
  
  }
  export const HL7PatientAdditionalDemographicV5 = mongoose.model<HL7PatientAdditionalDemographicV5Document> ("HL7PatientAdditionalDemographicV5", HL7PatientAdditionalDemographicV5Schema);

