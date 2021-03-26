
// Generated typescript code of HL7v 2.2 NK1  (Next Of Kin)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7NextOfKinV2Document = mongoose.Document & HL7NextOfKinV2I

const HL7NextOfKinV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdNextOfKin: String,
  name: String,
  relationship: String,
  address: String,
  phoneNumber: Array(String),
  businessPhoneNumber: String,
  contactRole: String,
  startDate: String,
  endDate: String,
  nextOfKin: String,
  nextOfKinJobCodeClass: String,
  nextOfKinEmployeeNumber: String,
  organizationName: String,
  
  }, { timestamps: true });
  
export interface HL7NextOfKinV2I extends Segment{
  setIdNextOfKin: string
  name: string
  relationship: string
  address: string
  phoneNumber: string[]
  businessPhoneNumber: string
  contactRole: string
  startDate: string
  endDate: string
  nextOfKin: string
  nextOfKinJobCodeClass: string
  nextOfKinEmployeeNumber: string
  organizationName: string
  
  }
  export const HL7NextOfKinV2 = mongoose.model<HL7NextOfKinV2Document> ("HL7NextOfKinV2", HL7NextOfKinV2Schema);

