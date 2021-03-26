
// Generated typescript code of HL7v 2.5 LCC  (Location Charge Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationChargeCodeV5Document = mongoose.Document & HL7LocationChargeCodeV5I

const HL7LocationChargeCodeV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLCC: String,
  locationDepartment: String,
  accommodationType: Array(String),
  chargeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationChargeCodeV5I extends Segment{
  primaryKeyValueLCC: string
  locationDepartment: string
  accommodationType: string[]
  chargeCode: string[]
  
  }
  export const HL7LocationChargeCodeV5 = mongoose.model<HL7LocationChargeCodeV5Document> ("HL7LocationChargeCodeV5", HL7LocationChargeCodeV5Schema);

