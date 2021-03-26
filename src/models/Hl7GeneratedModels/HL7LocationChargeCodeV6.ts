
// Generated typescript code of HL7v 2.6 LCC  (Location Charge Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationChargeCodeV6Document = mongoose.Document & HL7LocationChargeCodeV6I

const HL7LocationChargeCodeV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLCC: String,
  locationDepartment: String,
  accommodationType: Array(String),
  chargeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationChargeCodeV6I extends Segment{
  primaryKeyValueLCC: string
  locationDepartment: string
  accommodationType: string[]
  chargeCode: string[]
  
  }
  export const HL7LocationChargeCodeV6 = mongoose.model<HL7LocationChargeCodeV6Document> ("HL7LocationChargeCodeV6", HL7LocationChargeCodeV6Schema);

