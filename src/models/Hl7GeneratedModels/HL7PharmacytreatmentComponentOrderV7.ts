
// Generated typescript code of HL7v 2.7 RXC  (Pharmacy/treatment Component Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentComponentOrderV7Document = mongoose.Document & HL7PharmacytreatmentComponentOrderV7I

const HL7PharmacytreatmentComponentOrderV7Schema = new mongoose.Schema({
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
  
export interface HL7PharmacytreatmentComponentOrderV7I extends Segment{
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
  export const HL7PharmacytreatmentComponentOrderV7 = mongoose.model<HL7PharmacytreatmentComponentOrderV7Document> ("HL7PharmacytreatmentComponentOrderV7", HL7PharmacytreatmentComponentOrderV7Schema);

