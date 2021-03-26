
// Generated typescript code of HL7v 2.8 STF  (Staff Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StaffIdentificationV8Document = mongoose.Document & HL7StaffIdentificationV8I

const HL7StaffIdentificationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueStf: String,
  staffIdentifierList: Array(String),
  staffName: Array(String),
  staffType: Array(String),
  administrativeSex: String,
  dateTimeOfBirth: String,
  activeInactiveFlag: String,
  department: Array(String),
  hospitalServiceStf: Array(String),
  phone: Array(String),
  officeHomeAddressBirthplace: Array(String),
  institutionActivationDate: Array(String),
  institutionInactivationDate: Array(String),
  backupPersonId: Array(String),
  emailAddress: Array(String),
  preferredMethodOfContact: String,
  maritalStatus: String,
  jobTitle: String,
  jobCodeClass: String,
  employmentStatusCode: String,
  additionalInsuredOnAuto: String,
  driversLicenseNumberStaff: String,
  copyAutoIns: String,
  autoInsExpires: String,
  dateLastDmvReview: String,
  dateNextDmvReview: String,
  race: String,
  ethnicGroup: String,
  reactivationApprovalIndicator: String,
  citizenship: Array(String),
  dateTimeOfDeath: String,
  deathIndicator: String,
  institutionRelationshipTypeCode: String,
  institutionRelationshipPeriod: String,
  expectedReturnDate: String,
  costCenterCode: Array(String),
  genericClassificationIndicator: String,
  inactiveReasonCode: String,
  genericResourceTypeOrCategory: Array(String),
  religion: String,
  signature: String,
  
  }, { timestamps: true });
  
export interface HL7StaffIdentificationV8I extends Segment{
  primaryKeyValueStf: string
  staffIdentifierList: string[]
  staffName: string[]
  staffType: string[]
  administrativeSex: string
  dateTimeOfBirth: string
  activeInactiveFlag: string
  department: string[]
  hospitalServiceStf: string[]
  phone: string[]
  officeHomeAddressBirthplace: string[]
  institutionActivationDate: string[]
  institutionInactivationDate: string[]
  backupPersonId: string[]
  emailAddress: string[]
  preferredMethodOfContact: string
  maritalStatus: string
  jobTitle: string
  jobCodeClass: string
  employmentStatusCode: string
  additionalInsuredOnAuto: string
  driversLicenseNumberStaff: string
  copyAutoIns: string
  autoInsExpires: string
  dateLastDmvReview: string
  dateNextDmvReview: string
  race: string
  ethnicGroup: string
  reactivationApprovalIndicator: string
  citizenship: string[]
  dateTimeOfDeath: string
  deathIndicator: string
  institutionRelationshipTypeCode: string
  institutionRelationshipPeriod: string
  expectedReturnDate: string
  costCenterCode: string[]
  genericClassificationIndicator: string
  inactiveReasonCode: string
  genericResourceTypeOrCategory: string[]
  religion: string
  signature: string
  
  }
  export const HL7StaffIdentificationV8 = mongoose.model<HL7StaffIdentificationV8Document> ("HL7StaffIdentificationV8", HL7StaffIdentificationV8Schema);

