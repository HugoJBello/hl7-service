import mongoose from "mongoose";

export type HL7DecodedMessageHeaderDocument = mongoose.Document & HL7DecodedMessageHeaderI

const HL7DecodedMessageHeaderSchema = new mongoose.Schema({
  id: String,
  setIdPatientId: String,
  patientIdExternalId: String,
  patientIdInternalId: String,
  alternatePatientId: String,
  patientName: String,
  motherMaidenName: String,
  dateOfBirth: Date,
  sex: String,
  patientAlias: String,
  race: String,
  patientAddress: String,
  countryCode: String,
  phoneNumberHome: String,
  phoneNumberBusiness: String,
  primaryLanguage: String,
  maritalStatus: String,
  religion: String,
  patientAccountNumber: Array(String),
  sSNNumberPatient: String,
  driverLicenseNumberPatient: String,
  motherIdentifier: String,
  ethnicGroup: String,
  birthPlace: String,
  multipleBirthIndicator: String,
  birthOrder: String,
  veteransMilitaryStatus: String,
  mationality: String,
  patientDeathDate: String,
  patientDeathIndicator: String,
}, { timestamps: true });

export interface HL7DecodedMessageHeaderI {
  id: string
  setIdPatientId: string
  patientIdExternalId: string
  patientIdInternalId: string
  alternatePatientId: string
  patientName: string
  motherMaidenName: string
  dateOfBirth: Date,
  sex: string
  patientAlias: string
  race: string
  patientAddress: string
  countryCode: string
  phoneNumberHome: string
  phoneNumberBusiness: string
  primaryLanguage: string
  maritalStatus: string
  religion: string
  patientAccountNumber: string
  sSNNumberPatient: string
  driverLicenseNumberPatient: string
  motherIdentifier: string
  ethnicGroup: string
  birthPlace: string
  multipleBirthIndicator: string
  birthOrder: string
  veteransMilitaryStatus: string
  mationality: string
  patientDeathDate: string
  patientDeathIndicator: string
}

export const HL7DecodedMessageHeader = mongoose.model<HL7DecodedMessageHeaderDocument>("HL7DecodedMessageHeader", HL7DecodedMessageHeaderSchema);