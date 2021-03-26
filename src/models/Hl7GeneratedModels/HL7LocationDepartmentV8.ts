
// Generated typescript code of HL7v 2.8 LDP  (Location Department)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationDepartmentV8Document = mongoose.Document & HL7LocationDepartmentV8I

const HL7LocationDepartmentV8Schema = new mongoose.Schema({
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
  
export interface HL7LocationDepartmentV8I extends Segment{
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
  export const HL7LocationDepartmentV8 = mongoose.model<HL7LocationDepartmentV8Document> ("HL7LocationDepartmentV8", HL7LocationDepartmentV8Schema);

