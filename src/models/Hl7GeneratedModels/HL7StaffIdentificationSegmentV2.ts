
// Generated typescript code of HL7v 2.2 STF  (Staff Identification Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StaffIdentificationSegmentV2Document = mongoose.Document & HL7StaffIdentificationSegmentV2I

const HL7StaffIdentificationSegmentV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  stfPrimaryKeyValue: String,
  staffIdCode: Array(String),
  staffName: String,
  staffType: Array(String),
  sex: String,
  dateOfBirth: Date,
  activeInactive: String,
  department: Array(String),
  service: Array(String),
  phone: Array(String),
  officeHomeAddress: Array(String),
  activationDate: Array(String),
  inactivationDate: Array(String),
  backupPersonId: Array(String),
  emailAddress: Array(String),
  preferredMethodOfContact: String,
  
  }, { timestamps: true });
  
export interface HL7StaffIdentificationSegmentV2I extends Segment{
  stfPrimaryKeyValue: string
  staffIdCode: string[]
  staffName: string
  staffType: string[]
  sex: string
  dateOfBirth: Date
  activeInactive: string
  department: string[]
  service: string[]
  phone: string[]
  officeHomeAddress: string[]
  activationDate: string[]
  inactivationDate: string[]
  backupPersonId: string[]
  emailAddress: string[]
  preferredMethodOfContact: string
  
  }
  export const HL7StaffIdentificationSegmentV2 = mongoose.model<HL7StaffIdentificationSegmentV2Document> ("HL7StaffIdentificationSegmentV2", HL7StaffIdentificationSegmentV2Schema);

