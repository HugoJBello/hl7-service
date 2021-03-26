
// Generated typescript code of HL7v 2.7 NK1  (Next Of Kin / Associated Parties)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NextOfKinAssociatedPartiesV7Document = mongoose.Document & HL7NextOfKinAssociatedPartiesV7I

const HL7NextOfKinAssociatedPartiesV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdNk1: String,
  name: Array(String),
  relationship: String,
  address: Array(String),
  phoneNumber: Array(String),
  businessPhoneNumber: Array(String),
  contactRole: String,
  startDate: String,
  endDate: String,
  nextOfKinAssociatedPartiesJobTitle: String,
  nextOfKinAssociatedPartiesJobCodeClass: String,
  nextOfKinAssociatedPartiesEmployeeNumber: String,
  organizationNameNk1: Array(String),
  maritalStatus: String,
  administrativeSex: String,
  dateTimeOfBirth: String,
  livingDependency: Array(String),
  ambulatoryStatus: Array(String),
  citizenship: Array(String),
  primaryLanguage: String,
  livingArrangement: String,
  publicityCode: String,
  protectionIndicator: String,
  studentIndicator: String,
  religion: String,
  mothersMaidenName: Array(String),
  nationality: String,
  ethnicGroup: Array(String),
  contactReason: Array(String),
  contactPersonsName: Array(String),
  contactPersonsTelephoneNumber: Array(String),
  contactPersonsAddress: Array(String),
  nextOfKinAssociatedPartysIdentifiers: Array(String),
  jobStatus: String,
  race: Array(String),
  handicap: String,
  contactPersonSocialSecurityNumber: String,
  nextOfKinBirthPlace: String,
  vipIndicator: String,
  nextOfKinTelecommunicationInformation: String,
  contactPersonsTelecommunicationInformation: String,
  
  }, { timestamps: true });
  
export interface HL7NextOfKinAssociatedPartiesV7I extends Segment{
  setIdNk1: string
  name: string[]
  relationship: string
  address: string[]
  phoneNumber: string[]
  businessPhoneNumber: string[]
  contactRole: string
  startDate: string
  endDate: string
  nextOfKinAssociatedPartiesJobTitle: string
  nextOfKinAssociatedPartiesJobCodeClass: string
  nextOfKinAssociatedPartiesEmployeeNumber: string
  organizationNameNk1: string[]
  maritalStatus: string
  administrativeSex: string
  dateTimeOfBirth: string
  livingDependency: string[]
  ambulatoryStatus: string[]
  citizenship: string[]
  primaryLanguage: string
  livingArrangement: string
  publicityCode: string
  protectionIndicator: string
  studentIndicator: string
  religion: string
  mothersMaidenName: string[]
  nationality: string
  ethnicGroup: string[]
  contactReason: string[]
  contactPersonsName: string[]
  contactPersonsTelephoneNumber: string[]
  contactPersonsAddress: string[]
  nextOfKinAssociatedPartysIdentifiers: string[]
  jobStatus: string
  race: string[]
  handicap: string
  contactPersonSocialSecurityNumber: string
  nextOfKinBirthPlace: string
  vipIndicator: string
  nextOfKinTelecommunicationInformation: string
  contactPersonsTelecommunicationInformation: string
  
  }
  export const HL7NextOfKinAssociatedPartiesV7 = mongoose.model<HL7NextOfKinAssociatedPartiesV7Document> ("HL7NextOfKinAssociatedPartiesV7", HL7NextOfKinAssociatedPartiesV7Schema);

