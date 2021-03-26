
// Generated typescript code of HL7v 2.4 LDP  (Location Department)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationDepartmentV4Document = mongoose.Document & HL7LocationDepartmentV4I

const HL7LocationDepartmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLDP: String,
  locationDepartment: String,
  locationService: Array(String),
  specialtyType: Array(String),
  validPatientClasses: Array(String),
  activeInactiveFlag: String,
  activationDateLDP: Date,
  inactivationDateLDP: Date,
  inactivatedReason: String,
  visitingHours: Array(String),
  contactPhone: String,
  locationCostCenter: String,
  
  }, { timestamps: true });
  
export interface HL7LocationDepartmentV4I extends Segment{
  primaryKeyValueLDP: string
  locationDepartment: string
  locationService: string[]
  specialtyType: string[]
  validPatientClasses: string[]
  activeInactiveFlag: string
  activationDateLDP: Date
  inactivationDateLDP: Date
  inactivatedReason: string
  visitingHours: string[]
  contactPhone: string
  locationCostCenter: string
  
  }
  export const HL7LocationDepartmentV4 = mongoose.model<HL7LocationDepartmentV4Document> ("HL7LocationDepartmentV4", HL7LocationDepartmentV4Schema);

