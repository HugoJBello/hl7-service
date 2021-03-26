
// Generated typescript code of HL7v 2.8 PID  (Patient Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientIdentificationV8Document = mongoose.Document & HL7PatientIdentificationV8I

const HL7PatientIdentificationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPid: String,
  patientId: String,
  patientIdentifierList: Array(String),
  alternatePatientIdPid: String,
  patientName: Array(String),
  mothersMaidenName: Array(String),
  dateTimeOfBirth: String,
  administrativeSex: String,
  patientAlias: String,
  race: Array(String),
  patientAddress: Array(String),
  countyCode: String,
  phoneNumberHome: Array(String),
  phoneNumberBusiness: Array(String),
  primaryLanguage: String,
  maritalStatus: String,
  religion: String,
  patientAccountNumber: String,
  ssnNumberPatient: String,
  driversLicenseNumberPatient: String,
  mothersIdentifier: Array(String),
  ethnicGroup: Array(String),
  birthPlace: String,
  multipleBirthIndicator: String,
  birthOrder: Number,
  citizenship: Array(String),
  veteransMilitaryStatus: String,
  nationality: String,
  patientDeathDateAndTime: String,
  patientDeathIndicator: String,
  identityUnknownIndicator: String,
  identityReliabilityCode: Array(String),
  lastUpdateDateTime: String,
  lastUpdateFacility: String,
  taxonomicClassificationCode: String,
  breedCode: String,
  strain: String,
  productionClassCode: Array(String),
  tribalCitizenship: Array(String),
  patientTelecommunicationInformation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PatientIdentificationV8I extends Segment{
  setIdPid: string
  patientId: string
  patientIdentifierList: string[]
  alternatePatientIdPid: string
  patientName: string[]
  mothersMaidenName: string[]
  dateTimeOfBirth: string
  administrativeSex: string
  patientAlias: string
  race: string[]
  patientAddress: string[]
  countyCode: string
  phoneNumberHome: string[]
  phoneNumberBusiness: string[]
  primaryLanguage: string
  maritalStatus: string
  religion: string
  patientAccountNumber: string
  ssnNumberPatient: string
  driversLicenseNumberPatient: string
  mothersIdentifier: string[]
  ethnicGroup: string[]
  birthPlace: string
  multipleBirthIndicator: string
  birthOrder: number
  citizenship: string[]
  veteransMilitaryStatus: string
  nationality: string
  patientDeathDateAndTime: string
  patientDeathIndicator: string
  identityUnknownIndicator: string
  identityReliabilityCode: string[]
  lastUpdateDateTime: string
  lastUpdateFacility: string
  taxonomicClassificationCode: string
  breedCode: string
  strain: string
  productionClassCode: string[]
  tribalCitizenship: string[]
  patientTelecommunicationInformation: string[]
  
  }
  export const HL7PatientIdentificationV8 = mongoose.model<HL7PatientIdentificationV8Document> ("HL7PatientIdentificationV8", HL7PatientIdentificationV8Schema);

