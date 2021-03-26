
// Generated typescript code of HL7v 2.8 RXV  (Pharmacy/Treatment Infusion)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentInfusionV8Document = mongoose.Document & HL7PharmacyTreatmentInfusionV8I

const HL7PharmacyTreatmentInfusionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDRXV: String,
  bolusType: String,
  bolusDoseAmount: Number,
  bolusDoseAmountUnits: String,
  bolusDoseVolume: Number,
  bolusDoseVolumeUnits: String,
  pCAType: String,
  pCADoseAmount: Number,
  pCADoseAmountUnits: String,
  pCADoseAmountVolume: Number,
  pCADoseAmountVolumeUnits: String,
  maxDoseAmount: Number,
  maxDoseAmountUnits: String,
  maxDoseAmountVolume: Number,
  maxDoseAmountVolumeUnits: String,
  maxDosePerTime: String,
  lockoutInterval: String,
  syringeManufacturer: String,
  syringeModelNumber: String,
  syringeSize: Number,
  syringeSizeUnits: String,
  actionCode: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentInfusionV8I extends Segment{
  setIDRXV: string
  bolusType: string
  bolusDoseAmount: number
  bolusDoseAmountUnits: string
  bolusDoseVolume: number
  bolusDoseVolumeUnits: string
  pCAType: string
  pCADoseAmount: number
  pCADoseAmountUnits: string
  pCADoseAmountVolume: number
  pCADoseAmountVolumeUnits: string
  maxDoseAmount: number
  maxDoseAmountUnits: string
  maxDoseAmountVolume: number
  maxDoseAmountVolumeUnits: string
  maxDosePerTime: string
  lockoutInterval: string
  syringeManufacturer: string
  syringeModelNumber: string
  syringeSize: number
  syringeSizeUnits: string
  actionCode: string
  
  }
  export const HL7PharmacyTreatmentInfusionV8 = mongoose.model<HL7PharmacyTreatmentInfusionV8Document> ("HL7PharmacyTreatmentInfusionV8", HL7PharmacyTreatmentInfusionV8Schema);

