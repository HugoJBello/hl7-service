
// Generated typescript code of HL7v 2.6 LDP  (Location Department)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationDepartmentV6Document = mongoose.Document & HL7LocationDepartmentV6I

const HL7LocationDepartmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLDP: String,
  locationDepartment: String,
  locationService: Array(String),
  specialtyType: Array(String),
  validPatientClasses: Array(String),
  activeInactiveFlag: String,
  activationDateLDP: String,
  inactivationDateLDP: String,
  inactivatedReason: String,
  visitingHours: Array(String),
  contactPhone: String,
  locationCostCenter: String,
  
  }, { timestamps: true });
  
export interface HL7LocationDepartmentV6I extends Segment{
  primaryKeyValueLDP: string
  locationDepartment: string
  locationService: string[]
  specialtyType: string[]
  validPatientClasses: string[]
  activeInactiveFlag: string
  activationDateLDP: string
  inactivationDateLDP: string
  inactivatedReason: string
  visitingHours: string[]
  contactPhone: string
  locationCostCenter: string
  
  }
  export const HL7LocationDepartmentV6 = mongoose.model<HL7LocationDepartmentV6Document> ("HL7LocationDepartmentV6", HL7LocationDepartmentV6Schema);

