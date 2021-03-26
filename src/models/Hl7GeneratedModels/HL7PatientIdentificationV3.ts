
// Generated typescript code of HL7v 2.3 PID  (Patient Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientIdentificationV3Document = mongoose.Document & HL7PatientIdentificationV3I

const HL7PatientIdentificationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPatientID: String,
  patientIDExternalID: String,
  patientIDInternalID: Array(String),
  alternatePatientID: Array(String),
  patientName: Array(String),
  mothersMaidenName: String,
  dateOfBirth: Date,
  sex: String,
  patientAlias: Array(String),
  race: String,
  patientAddress: Array(String),
  countyCode: String,
  phoneNumberHome: Array(String),
  phoneNumberBusiness: Array(String),
  primaryLanguage: String,
  maritalStatus: String,
  religion: String,
  patientAccountNumber: String,
  sSNNumberPatient: String,
  driversLicenseNumber: String,
  mothersIdentifier: Array(String),
  ethnicGroup: String,
  birthPlace: String,
  multipleBirthIndicator: String,
  birthOrder: Number,
  citizenship: Array(String),
  veteransMilitaryStatus: String,
  nationalityCode: String,
  patientDeathDateAndTime: Date,
  patientDeathIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PatientIdentificationV3I extends Segment{
  setIDPatientID: string
  patientIDExternalID: string
  patientIDInternalID: string[]
  alternatePatientID: string[]
  patientName: string[]
  mothersMaidenName: string
  dateOfBirth: Date
  sex: string
  patientAlias: string[]
  race: string
  patientAddress: string[]
  countyCode: string
  phoneNumberHome: string[]
  phoneNumberBusiness: string[]
  primaryLanguage: string
  maritalStatus: string
  religion: string
  patientAccountNumber: string
  sSNNumberPatient: string
  driversLicenseNumber: string
  mothersIdentifier: string[]
  ethnicGroup: string
  birthPlace: string
  multipleBirthIndicator: string
  birthOrder: number
  citizenship: string[]
  veteransMilitaryStatus: string
  nationalityCode: string
  patientDeathDateAndTime: Date
  patientDeathIndicator: string
  
  }
  export const HL7PatientIdentificationV3 = mongoose.model<HL7PatientIdentificationV3Document> ("HL7PatientIdentificationV3", HL7PatientIdentificationV3Schema);

