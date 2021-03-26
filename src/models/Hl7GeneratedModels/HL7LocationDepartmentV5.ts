
// Generated typescript code of HL7v 2.5 LDP  (Location Department)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationDepartmentV5Document = mongoose.Document & HL7LocationDepartmentV5I

const HL7LocationDepartmentV5Schema = new mongoose.Schema({
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
  
export interface HL7LocationDepartmentV5I extends Segment{
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
  export const HL7LocationDepartmentV5 = mongoose.model<HL7LocationDepartmentV5Document> ("HL7LocationDepartmentV5", HL7LocationDepartmentV5Schema);

