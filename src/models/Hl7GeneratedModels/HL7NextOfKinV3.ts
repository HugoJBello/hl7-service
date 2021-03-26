
// Generated typescript code of HL7v 2.3 NK1  (Next of kin)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NextOfKinV3Document = mongoose.Document & HL7NextOfKinV3I

const HL7NextOfKinV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDNextOfKin: String,
  nKName: Array(String),
  relationship: String,
  address: Array(String),
  phoneNumber: Array(String),
  businessPhoneNumber: Array(String),
  contactRole: String,
  startDate: String,
  endDate: String,
  nextOfKinAssociatedPartiesJobTitle: String,
  nextOfKinJobAssociatedPartiesCodeClass: String,
  nextOfKinAssociatedPartiesEmployeeNumber: String,
  organizationName: Array(String),
  maritalStatus: String,
  sex: String,
  dateOfBirth: Date,
  livingDependency: Array(String),
  ambulatoryStatus: Array(String),
  citizenship: Array(String),
  primaryLanguage: String,
  livingArrangement: String,
  publicityIndicator: String,
  protectionIndicator: String,
  studentIndicator: String,
  religion: String,
  motherSMaidenName: String,
  nationalityCode: String,
  ethnicGroup: String,
  contactReason: Array(String),
  contactPersonsName: Array(String),
  contactPersonSTelephoneNumber: Array(String),
  contactPersonSAddress: Array(String),
  nextOfKinassociatedPartyIdentifiers: Array(String),
  jobStatus: String,
  race: String,
  handicap: String,
  contactPersonSocialSecurityNumber: String,
  
  }, { timestamps: true });
  
export interface HL7NextOfKinV3I extends Segment{
  setIDNextOfKin: string
  nKName: string[]
  relationship: string
  address: string[]
  phoneNumber: string[]
  businessPhoneNumber: string[]
  contactRole: string
  startDate: string
  endDate: string
  nextOfKinAssociatedPartiesJobTitle: string
  nextOfKinJobAssociatedPartiesCodeClass: string
  nextOfKinAssociatedPartiesEmployeeNumber: string
  organizationName: string[]
  maritalStatus: string
  sex: string
  dateOfBirth: Date
  livingDependency: string[]
  ambulatoryStatus: string[]
  citizenship: string[]
  primaryLanguage: string
  livingArrangement: string
  publicityIndicator: string
  protectionIndicator: string
  studentIndicator: string
  religion: string
  motherSMaidenName: string
  nationalityCode: string
  ethnicGroup: string
  contactReason: string[]
  contactPersonsName: string[]
  contactPersonSTelephoneNumber: string[]
  contactPersonSAddress: string[]
  nextOfKinassociatedPartyIdentifiers: string[]
  jobStatus: string
  race: string
  handicap: string
  contactPersonSocialSecurityNumber: string
  
  }
  export const HL7NextOfKinV3 = mongoose.model<HL7NextOfKinV3Document> ("HL7NextOfKinV3", HL7NextOfKinV3Schema);

