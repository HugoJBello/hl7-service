
// Generated typescript code of HL7v 2.4 LCC  (Location Charge Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationChargeCodeV4Document = mongoose.Document & HL7LocationChargeCodeV4I

const HL7LocationChargeCodeV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLCC: String,
  locationDepartment: String,
  accommodationType: Array(String),
  chargeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationChargeCodeV4I extends Segment{
  primaryKeyValueLCC: string
  locationDepartment: string
  accommodationType: string[]
  chargeCode: string[]
  
  }
  export const HL7LocationChargeCodeV4 = mongoose.model<HL7LocationChargeCodeV4Document> ("HL7LocationChargeCodeV4", HL7LocationChargeCodeV4Schema);

