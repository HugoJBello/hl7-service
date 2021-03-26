
// Generated typescript code of HL7v 2.2 PID  (Patient Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientIdentificationV2Document = mongoose.Document & HL7PatientIdentificationV2I

const HL7PatientIdentificationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPatientId: String,
  patientIdExternalId: String,
  patientIdInternalId: Array(String),
  alternatePatientId: String,
  patientName: String,
  mothersMaidenName: String,
  dateOfBirth: Date,
  sex: String,
  patientAlias: Array(String),
  race: String,
  patientAddress: Array(String),
  countyCode: String,
  phoneNumberHome: Array(String),
  phoneNumberBusiness: Array(String),
  languagePatient: String,
  maritalStatus: String,
  religion: String,
  patientAccountNumber: String,
  socialSecurityNumberPatient: String,
  driversLicenseNumberPatient: String,
  mothersIdentifier: String,
  ethnicGroup: String,
  birthPlace: String,
  multipleBirthIndicator: String,
  birthOrder: Number,
  citizenship: Array(String),
  veteransMilitaryStatus: String,
  
  }, { timestamps: true });
  
export interface HL7PatientIdentificationV2I extends Segment{
  setIdPatientId: string
  patientIdExternalId: string
  patientIdInternalId: string[]
  alternatePatientId: string
  patientName: string
  mothersMaidenName: string
  dateOfBirth: Date
  sex: string
  patientAlias: string[]
  race: string
  patientAddress: string[]
  countyCode: string
  phoneNumberHome: string[]
  phoneNumberBusiness: string[]
  languagePatient: string
  maritalStatus: string
  religion: string
  patientAccountNumber: string
  socialSecurityNumberPatient: string
  driversLicenseNumberPatient: string
  mothersIdentifier: string
  ethnicGroup: string
  birthPlace: string
  multipleBirthIndicator: string
  birthOrder: number
  citizenship: string[]
  veteransMilitaryStatus: string
  
  }
  export const HL7PatientIdentificationV2 = mongoose.model<HL7PatientIdentificationV2Document> ("HL7PatientIdentificationV2", HL7PatientIdentificationV2Schema);

