
// Generated typescript code of HL7v 2.5 STF  (Staff Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StaffIdentificationV5Document = mongoose.Document & HL7StaffIdentificationV5I

const HL7StaffIdentificationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueSTF: String,
  staffIdentifierList: Array(String),
  staffName: Array(String),
  staffType: Array(String),
  administrativeSex: String,
  dateTimeOfBirth: Date,
  activeInactiveFlag: String,
  department: Array(String),
  hospitalServiceSTF: Array(String),
  phone: Array(String),
  officeHomeAddressBirthplace: Array(String),
  institutionActivationDate: Array(String),
  institutionInactivationDate: Array(String),
  backupPersonID: Array(String),
  eMailAddress: Array(String),
  preferredMethodOfContact: String,
  maritalStatus: String,
  jobTitle: String,
  jobCodeClass: String,
  employmentStatusCode: String,
  additionalInsuredOnAuto: String,
  driversLicenseNumberStaff: String,
  copyAutoIns: String,
  autoInsExpires: String,
  dateLastDMVReview: String,
  dateNextDMVReview: String,
  race: String,
  ethnicGroup: String,
  reactivationApprovalIndicator: String,
  citizenship: Array(String),
  deathDateAndTime: Date,
  deathIndicator: String,
  institutionRelationshipTypeCode: String,
  institutionRelationshipPeriod: String,
  expectedReturnDate: String,
  costCenterCode: Array(String),
  genericClassificationIndicator: String,
  inactiveReasonCode: String,
  
  }, { timestamps: true });
  
export interface HL7StaffIdentificationV5I extends Segment{
  primaryKeyValueSTF: string
  staffIdentifierList: string[]
  staffName: string[]
  staffType: string[]
  administrativeSex: string
  dateTimeOfBirth: Date
  activeInactiveFlag: string
  department: string[]
  hospitalServiceSTF: string[]
  phone: string[]
  officeHomeAddressBirthplace: string[]
  institutionActivationDate: string[]
  institutionInactivationDate: string[]
  backupPersonID: string[]
  eMailAddress: string[]
  preferredMethodOfContact: string
  maritalStatus: string
  jobTitle: string
  jobCodeClass: string
  employmentStatusCode: string
  additionalInsuredOnAuto: string
  driversLicenseNumberStaff: string
  copyAutoIns: string
  autoInsExpires: string
  dateLastDMVReview: string
  dateNextDMVReview: string
  race: string
  ethnicGroup: string
  reactivationApprovalIndicator: string
  citizenship: string[]
  deathDateAndTime: Date
  deathIndicator: string
  institutionRelationshipTypeCode: string
  institutionRelationshipPeriod: string
  expectedReturnDate: string
  costCenterCode: string[]
  genericClassificationIndicator: string
  inactiveReasonCode: string
  
  }
  export const HL7StaffIdentificationV5 = mongoose.model<HL7StaffIdentificationV5Document> ("HL7StaffIdentificationV5", HL7StaffIdentificationV5Schema);

