
// Generated typescript code of HL7v 2.4 ROL  (Role)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RoleV4Document = mongoose.Document & HL7RoleV4I

const HL7RoleV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  roleInstanceID: String,
  actionCode: String,
  roleROL: String,
  rolePerson: Array(String),
  roleBeginDateTime: Date,
  roleEndDateTime: Date,
  roleDuration: String,
  roleActionReason: String,
  providerType: Array(String),
  organizationUnitTypeROL: String,
  officeHomeAddress: Array(String),
  phone: Array(String),
  
  }, { timestamps: true });
  
export interface HL7RoleV4I extends Segment{
  roleInstanceID: string
  actionCode: string
  roleROL: string
  rolePerson: string[]
  roleBeginDateTime: Date
  roleEndDateTime: Date
  roleDuration: string
  roleActionReason: string
  providerType: string[]
  organizationUnitTypeROL: string
  officeHomeAddress: string[]
  phone: string[]
  
  }
  export const HL7RoleV4 = mongoose.model<HL7RoleV4Document> ("HL7RoleV4", HL7RoleV4Schema);

