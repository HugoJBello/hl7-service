
// Generated typescript code of HL7v 2.3 STF  (Staff identification segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StaffIdentificationSegmentV3Document = mongoose.Document & HL7StaffIdentificationSegmentV3I

const HL7StaffIdentificationSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sTFPrimaryKeyValue: String,
  staffIDCode: Array(String),
  staffName: String,
  staffType: Array(String),
  sex: String,
  dateOfBirth: Date,
  activeInactiveFlag: String,
  department: Array(String),
  service: Array(String),
  phone: Array(String),
  officeHomeAddress: Array(String),
  activationDate: Array(String),
  inactivationDate: Array(String),
  backupPersonID: Array(String),
  emailAddress: Array(String),
  preferredMethodOfContact: String,
  maritalStatus: String,
  jobTitle: String,
  jobCodeClass: String,
  employmentStatus: String,
  additionalInsuredOnAuto: String,
  driversLicenseNumber: String,
  copyAutoIns: String,
  autoInsExpires: String,
  dateLastDMVReview: String,
  dateNextDMVReview: String,
  
  }, { timestamps: true });
  
export interface HL7StaffIdentificationSegmentV3I extends Segment{
  sTFPrimaryKeyValue: string
  staffIDCode: string[]
  staffName: string
  staffType: string[]
  sex: string
  dateOfBirth: Date
  activeInactiveFlag: string
  department: string[]
  service: string[]
  phone: string[]
  officeHomeAddress: string[]
  activationDate: string[]
  inactivationDate: string[]
  backupPersonID: string[]
  emailAddress: string[]
  preferredMethodOfContact: string
  maritalStatus: string
  jobTitle: string
  jobCodeClass: string
  employmentStatus: string
  additionalInsuredOnAuto: string
  driversLicenseNumber: string
  copyAutoIns: string
  autoInsExpires: string
  dateLastDMVReview: string
  dateNextDMVReview: string
  
  }
  export const HL7StaffIdentificationSegmentV3 = mongoose.model<HL7StaffIdentificationSegmentV3Document> ("HL7StaffIdentificationSegmentV3", HL7StaffIdentificationSegmentV3Schema);

