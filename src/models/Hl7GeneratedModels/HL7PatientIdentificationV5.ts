
// Generated typescript code of HL7v 2.5 PID  (Patient Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientIdentificationV5Document = mongoose.Document & HL7PatientIdentificationV5I

const HL7PatientIdentificationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPID: String,
  patientID: String,
  patientIdentifierList: Array(String),
  alternatePatientIDPID: Array(String),
  patientName: Array(String),
  mothersMaidenName: Array(String),
  dateTimeOfBirth: Date,
  administrativeSex: String,
  patientAlias: Array(String),
  race: Array(String),
  patientAddress: Array(String),
  countyCode: String,
  phoneNumberHome: Array(String),
  phoneNumberBusiness: Array(String),
  primaryLanguage: String,
  maritalStatus: String,
  religion: String,
  patientAccountNumber: String,
  sSNNumberPatient: String,
  driversLicenseNumberPatient: String,
  mothersIdentifier: Array(String),
  ethnicGroup: Array(String),
  birthPlace: String,
  multipleBirthIndicator: String,
  birthOrder: Number,
  citizenship: Array(String),
  veteransMilitaryStatus: String,
  nationality: String,
  patientDeathDateAndTime: Date,
  patientDeathIndicator: String,
  identityUnknownIndicator: String,
  identityReliabilityCode: Array(String),
  lastUpdateDateTime: Date,
  lastUpdateFacility: String,
  speciesCode: String,
  breedCode: String,
  strain: String,
  productionClassCode: Array(String),
  tribalCitizenship: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PatientIdentificationV5I extends Segment{
  setIDPID: string
  patientID: string
  patientIdentifierList: string[]
  alternatePatientIDPID: string[]
  patientName: string[]
  mothersMaidenName: string[]
  dateTimeOfBirth: Date
  administrativeSex: string
  patientAlias: string[]
  race: string[]
  patientAddress: string[]
  countyCode: string
  phoneNumberHome: string[]
  phoneNumberBusiness: string[]
  primaryLanguage: string
  maritalStatus: string
  religion: string
  patientAccountNumber: string
  sSNNumberPatient: string
  driversLicenseNumberPatient: string
  mothersIdentifier: string[]
  ethnicGroup: string[]
  birthPlace: string
  multipleBirthIndicator: string
  birthOrder: number
  citizenship: string[]
  veteransMilitaryStatus: string
  nationality: string
  patientDeathDateAndTime: Date
  patientDeathIndicator: string
  identityUnknownIndicator: string
  identityReliabilityCode: string[]
  lastUpdateDateTime: Date
  lastUpdateFacility: string
  speciesCode: string
  breedCode: string
  strain: string
  productionClassCode: string[]
  tribalCitizenship: string[]
  
  }
  export const HL7PatientIdentificationV5 = mongoose.model<HL7PatientIdentificationV5Document> ("HL7PatientIdentificationV5", HL7PatientIdentificationV5Schema);

