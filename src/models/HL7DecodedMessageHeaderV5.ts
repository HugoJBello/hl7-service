import mongoose from "mongoose";
import { DecodedSegmentBase, Hl7Segment } from "./Segment";

export type HL7DecodedMessageHeaderDocument = mongoose.Document & HL7DecodedMessageHeaderV5I

const HL7DecodedMessageHeaderSchemaV5 = new mongoose.Schema({
  segment: String,
  id: String,
  hl7version: String,

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

export interface HL7DecodedMessageHeaderV5I extends DecodedSegmentBase{
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

export const HL7DecodedMessageHeaderV5 = mongoose.model<HL7DecodedMessageHeaderDocument>("HL7DecodedMessageHeader", HL7DecodedMessageHeaderSchemaV5);