
// Generated typescript code of HL7v 2.6 ROL  (Role)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RoleV6Document = mongoose.Document & HL7RoleV6I

const HL7RoleV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  roleInstanceID: String,
  actionCode: String,
  roleROL: String,
  rolePerson: Array(String),
  roleBeginDateTime: String,
  roleEndDateTime: String,
  roleDuration: String,
  roleActionReason: String,
  providerType: Array(String),
  organizationUnitType: String,
  officeHomeAddressBirthplace: Array(String),
  phone: Array(String),
  personsLocation: String,
  
  }, { timestamps: true });
  
export interface HL7RoleV6I extends Segment{
  roleInstanceID: string
  actionCode: string
  roleROL: string
  rolePerson: string[]
  roleBeginDateTime: string
  roleEndDateTime: string
  roleDuration: string
  roleActionReason: string
  providerType: string[]
  organizationUnitType: string
  officeHomeAddressBirthplace: string[]
  phone: string[]
  personsLocation: string
  
  }
  export const HL7RoleV6 = mongoose.model<HL7RoleV6Document> ("HL7RoleV6", HL7RoleV6Schema);

