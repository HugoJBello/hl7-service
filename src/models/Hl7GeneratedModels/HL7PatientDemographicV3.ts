
// Generated typescript code of HL7v 2.3 PD1  (Patient Demographic)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientDemographicV3Document = mongoose.Document & HL7PatientDemographicV3I

const HL7PatientDemographicV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  livingDependency: Array(String),
  livingArrangement: String,
  patientPrimaryFacility: Array(String),
  patientPrimaryCareProviderNameIDNo: Array(String),
  studentIndicator: String,
  handicap: String,
  livingWill: String,
  organDonor: String,
  separateBill: String,
  duplicatePatient: Array(String),
  publicityIndicator: String,
  protectionIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PatientDemographicV3I extends Segment{
  livingDependency: string[]
  livingArrangement: string
  patientPrimaryFacility: string[]
  patientPrimaryCareProviderNameIDNo: string[]
  studentIndicator: string
  handicap: string
  livingWill: string
  organDonor: string
  separateBill: string
  duplicatePatient: string[]
  publicityIndicator: string
  protectionIndicator: string
  
  }
  export const HL7PatientDemographicV3 = mongoose.model<HL7PatientDemographicV3Document> ("HL7PatientDemographicV3", HL7PatientDemographicV3Schema);

