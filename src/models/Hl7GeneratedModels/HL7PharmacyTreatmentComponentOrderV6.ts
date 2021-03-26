
// Generated typescript code of HL7v 2.6 RXC  (Pharmacy/Treatment Component Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentComponentOrderV6Document = mongoose.Document & HL7PharmacyTreatmentComponentOrderV6I

const HL7PharmacyTreatmentComponentOrderV6Schema = new mongoose.Schema({
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
  componentDrugStrengthVolume: Number,
  componentDrugStrengthVolumeUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentComponentOrderV6I extends Segment{
  rXComponentType: string
  componentCode: string
  componentAmount: number
  componentUnits: string
  componentStrength: number
  componentStrengthUnits: string
  supplementaryCode: string[]
  componentDrugStrengthVolume: number
  componentDrugStrengthVolumeUnits: string
  
  }
  export const HL7PharmacyTreatmentComponentOrderV6 = mongoose.model<HL7PharmacyTreatmentComponentOrderV6Document> ("HL7PharmacyTreatmentComponentOrderV6", HL7PharmacyTreatmentComponentOrderV6Schema);

