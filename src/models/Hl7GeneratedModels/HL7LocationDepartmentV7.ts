
// Generated typescript code of HL7v 2.7 LDP  (Location Department)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationDepartmentV7Document = mongoose.Document & HL7LocationDepartmentV7I

const HL7LocationDepartmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLdp: String,
  locationDepartment: String,
  locationService: Array(String),
  specialtyType: Array(String),
  validPatientClasses: Array(String),
  activeInactiveFlag: String,
  activationDateLdp: String,
  inactivationDateLdp: String,
  inactivatedReason: String,
  visitingHours: Array(String),
  contactPhone: String,
  locationCostCenter: String,
  
  }, { timestamps: true });
  
export interface HL7LocationDepartmentV7I extends Segment{
  primaryKeyValueLdp: string
  locationDepartment: string
  locationService: string[]
  specialtyType: string[]
  validPatientClasses: string[]
  activeInactiveFlag: string
  activationDateLdp: string
  inactivationDateLdp: string
  inactivatedReason: string
  visitingHours: string[]
  contactPhone: string
  locationCostCenter: string
  
  }
  export const HL7LocationDepartmentV7 = mongoose.model<HL7LocationDepartmentV7Document> ("HL7LocationDepartmentV7", HL7LocationDepartmentV7Schema);

