
// Generated typescript code of HL7v 2.3 LDP  (Location Department)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationDepartmentV3Document = mongoose.Document & HL7LocationDepartmentV3I

const HL7LocationDepartmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  lDPPrimaryKeyValue: String,
  locationDepartment: String,
  locationService: Array(String),
  specialityType: Array(String),
  validPatientClasses: Array(String),
  activeInactiveFlag: String,
  activationDate: Date,
  inactivationDateLDP: Date,
  inactivatedReason: String,
  visitingHours: Array(String),
  contactPhone: String,
  
  }, { timestamps: true });
  
export interface HL7LocationDepartmentV3I extends Segment{
  lDPPrimaryKeyValue: string
  locationDepartment: string
  locationService: string[]
  specialityType: string[]
  validPatientClasses: string[]
  activeInactiveFlag: string
  activationDate: Date
  inactivationDateLDP: Date
  inactivatedReason: string
  visitingHours: string[]
  contactPhone: string
  
  }
  export const HL7LocationDepartmentV3 = mongoose.model<HL7LocationDepartmentV3Document> ("HL7LocationDepartmentV3", HL7LocationDepartmentV3Schema);

