
// Generated typescript code of HL7v 2.4 RXC  (Pharmacy/Treatment Component Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentComponentOrderV4Document = mongoose.Document & HL7PharmacyTreatmentComponentOrderV4I

const HL7PharmacyTreatmentComponentOrderV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rXComponentType: String,
  componentCode: String,
  componentAmount: Number,
  componentUnits: String,
  componentStrength: Number,
  componentStrengthUnits: String,
  supplementaryCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentComponentOrderV4I extends Segment{
  rXComponentType: string
  componentCode: string
  componentAmount: number
  componentUnits: string
  componentStrength: number
  componentStrengthUnits: string
  supplementaryCode: string[]
  
  }
  export const HL7PharmacyTreatmentComponentOrderV4 = mongoose.model<HL7PharmacyTreatmentComponentOrderV4Document> ("HL7PharmacyTreatmentComponentOrderV4", HL7PharmacyTreatmentComponentOrderV4Schema);

