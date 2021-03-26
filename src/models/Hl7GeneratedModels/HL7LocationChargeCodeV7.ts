
// Generated typescript code of HL7v 2.7 LCC  (Location Charge Code)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationChargeCodeV7Document = mongoose.Document & HL7LocationChargeCodeV7I

const HL7LocationChargeCodeV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLcc: String,
  locationDepartment: String,
  accommodationType: Array(String),
  chargeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7LocationChargeCodeV7I extends Segment{
  primaryKeyValueLcc: string
  locationDepartment: string
  accommodationType: string[]
  chargeCode: string[]
  
  }
  export const HL7LocationChargeCodeV7 = mongoose.model<HL7LocationChargeCodeV7Document> ("HL7LocationChargeCodeV7", HL7LocationChargeCodeV7Schema);

