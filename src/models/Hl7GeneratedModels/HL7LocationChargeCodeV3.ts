
// Generated typescript code of HL7v 2.3 LCC  (Location Charge Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationChargeCodeV3Document = mongoose.Document & HL7LocationChargeCodeV3I

const HL7LocationChargeCodeV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValue: String,
  locationDepartment: String,
  accommodationType: Array(String),
  chargeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationChargeCodeV3I extends Segment{
  primaryKeyValue: string
  locationDepartment: string
  accommodationType: string[]
  chargeCode: string[]
  
  }
  export const HL7LocationChargeCodeV3 = mongoose.model<HL7LocationChargeCodeV3Document> ("HL7LocationChargeCodeV3", HL7LocationChargeCodeV3Schema);

