
// Generated typescript code of HL7v 2.3 ROL  (Role)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RoleV3Document = mongoose.Document & HL7RoleV3I

const HL7RoleV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  roleInstanceID: String,
  actionCode: String,
  role: String,
  rolePerson: String,
  roleBeginDateTime: Date,
  roleEndDateTime: Date,
  roleDuration: String,
  roleAction: String,
  
  }, { timestamps: true });
  
export interface HL7RoleV3I extends Segment{
  roleInstanceID: string
  actionCode: string
  role: string
  rolePerson: string
  roleBeginDateTime: Date
  roleEndDateTime: Date
  roleDuration: string
  roleAction: string
  
  }
  export const HL7RoleV3 = mongoose.model<HL7RoleV3Document> ("HL7RoleV3", HL7RoleV3Schema);

