
// Generated typescript code of HL7v 2.7 ROL  (Role)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RoleV7Document = mongoose.Document & HL7RoleV7I

const HL7RoleV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  roleInstanceId: String,
  actionCode: String,
  rolerol: String,
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
  organization: String,
  
  }, { timestamps: true });
  
export interface HL7RoleV7I extends Segment{
  roleInstanceId: string
  actionCode: string
  rolerol: string
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
  organization: string
  
  }
  export const HL7RoleV7 = mongoose.model<HL7RoleV7Document> ("HL7RoleV7", HL7RoleV7Schema);

