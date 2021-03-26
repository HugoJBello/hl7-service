
// Generated typescript code of HL7v 2.8 RXC  (Pharmacy/treatment Component Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentComponentOrderV8Document = mongoose.Document & HL7PharmacytreatmentComponentOrderV8I

const HL7PharmacytreatmentComponentOrderV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rxComponentType: String,
  componentCode: String,
  componentAmount: Number,
  componentUnits: String,
  componentStrength: Number,
  componentStrengthUnits: String,
  supplementaryCode: Array(String),
  componentDrugStrengthVolume: Number,
  componentDrugStrengthVolumeUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentComponentOrderV8I extends Segment{
  rxComponentType: string
  componentCode: string
  componentAmount: number
  componentUnits: string
  componentStrength: number
  componentStrengthUnits: string
  supplementaryCode: string[]
  componentDrugStrengthVolume: number
  componentDrugStrengthVolumeUnits: string
  
  }
  export const HL7PharmacytreatmentComponentOrderV8 = mongoose.model<HL7PharmacytreatmentComponentOrderV8Document> ("HL7PharmacytreatmentComponentOrderV8", HL7PharmacytreatmentComponentOrderV8Schema);

