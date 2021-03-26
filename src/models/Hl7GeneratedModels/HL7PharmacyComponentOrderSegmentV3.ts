
// Generated typescript code of HL7v 2.3 RXC  (Pharmacy component order segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyComponentOrderSegmentV3Document = mongoose.Document & HL7PharmacyComponentOrderSegmentV3I

const HL7PharmacyComponentOrderSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rXComponentType: String,
  componentCode: String,
  componentAmount: Number,
  componentUnits: String,
  componentStrength: Number,
  componentStrengthUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyComponentOrderSegmentV3I extends Segment{
  rXComponentType: string
  componentCode: string
  componentAmount: number
  componentUnits: string
  componentStrength: number
  componentStrengthUnits: string
  
  }
  export const HL7PharmacyComponentOrderSegmentV3 = mongoose.model<HL7PharmacyComponentOrderSegmentV3Document> ("HL7PharmacyComponentOrderSegmentV3", HL7PharmacyComponentOrderSegmentV3Schema);

