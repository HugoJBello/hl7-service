
// Generated typescript code of HL7v 2.4 STF  (Staff Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StaffIdentificationV4Document = mongoose.Document & HL7StaffIdentificationV4I

const HL7StaffIdentificationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueSTF: String,
  staffIDCode: Array(String),
  staffName: Array(String),
  staffType: Array(String),
  administrativeSex: String,
  dateTimeOfBirth: Date,
  activeInactiveFlag: String,
  department: Array(String),
  hospitalService: Array(String),
  phone: Array(String),
  officeHomeAddress: Array(String),
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
  
  }, { timestamps: true });
  
export interface HL7StaffIdentificationV4I extends Segment{
  primaryKeyValueSTF: string
  staffIDCode: string[]
  staffName: string[]
  staffType: string[]
  administrativeSex: string
  dateTimeOfBirth: Date
  activeInactiveFlag: string
  department: string[]
  hospitalService: string[]
  phone: string[]
  officeHomeAddress: string[]
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
  
  }
  export const HL7StaffIdentificationV4 = mongoose.model<HL7StaffIdentificationV4Document> ("HL7StaffIdentificationV4", HL7StaffIdentificationV4Schema);

