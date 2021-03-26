
// Generated typescript code of HL7v 2.4 NK1  (Next of kin / associated parties)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NextOfKinAssociatedPartiesV4Document = mongoose.Document & HL7NextOfKinAssociatedPartiesV4I

const HL7NextOfKinAssociatedPartiesV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDNK1: String,
  nKName: Array(String),
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
  organizationNameNK1: Array(String),
  maritalStatus: String,
  administrativeSex: String,
  dateTimeOfBirth: Date,
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
  
  }, { timestamps: true });
  
export interface HL7NextOfKinAssociatedPartiesV4I extends Segment{
  setIDNK1: string
  nKName: string[]
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
  organizationNameNK1: string[]
  maritalStatus: string
  administrativeSex: string
  dateTimeOfBirth: Date
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
  
  }
  export const HL7NextOfKinAssociatedPartiesV4 = mongoose.model<HL7NextOfKinAssociatedPartiesV4Document> ("HL7NextOfKinAssociatedPartiesV4", HL7NextOfKinAssociatedPartiesV4Schema);

