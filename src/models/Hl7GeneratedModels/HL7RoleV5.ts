
// Generated typescript code of HL7v 2.5 ROL  (Role)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RoleV5Document = mongoose.Document & HL7RoleV5I

const HL7RoleV5Schema = new mongoose.Schema({
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
  organizationUnitType: String,
  officeHomeAddressBirthplace: Array(String),
  phone: Array(String),
  
  }, { timestamps: true });
  
export interface HL7RoleV5I extends Segment{
  roleInstanceID: string
  actionCode: string
  roleROL: string
  rolePerson: string[]
  roleBeginDateTime: Date
  roleEndDateTime: Date
  roleDuration: string
  roleActionReason: string
  providerType: string[]
  organizationUnitType: string
  officeHomeAddressBirthplace: string[]
  phone: string[]
  
  }
  export const HL7RoleV5 = mongoose.model<HL7RoleV5Document> ("HL7RoleV5", HL7RoleV5Schema);

