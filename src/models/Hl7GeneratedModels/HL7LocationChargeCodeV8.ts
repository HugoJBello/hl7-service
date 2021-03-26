
// Generated typescript code of HL7v 2.8 LCC  (Location Charge Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationChargeCodeV8Document = mongoose.Document & HL7LocationChargeCodeV8I

const HL7LocationChargeCodeV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLcc: String,
  locationDepartment: String,
  accommodationType: Array(String),
  chargeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationChargeCodeV8I extends Segment{
  primaryKeyValueLcc: string
  locationDepartment: string
  accommodationType: string[]
  chargeCode: string[]
  
  }
  export const HL7LocationChargeCodeV8 = mongoose.model<HL7LocationChargeCodeV8Document> ("HL7LocationChargeCodeV8", HL7LocationChargeCodeV8Schema);

