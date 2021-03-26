
// Generated typescript code of HL7v 2.3 RXD  (Pharmacy dispense segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyDispenseSegmentV3Document = mongoose.Document & HL7PharmacyDispenseSegmentV3I

const HL7PharmacyDispenseSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dispenseSubIDCounter: Number,
  dispenseGiveCode: String,
  dateTimeDispensed: Date,
  actualDispenseAmount: Number,
  actualDispenseUnits: String,
  actualDosageForm: String,
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  dispenseNotes: Array(String),
  dispensingProvider: String,
  substitutionStatus: String,
  totalDailyDose: Number,
  dispenseToLocation: String,
  needsHumanReview: String,
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: Array(String),
  actualStrength: Number,
  actualStrengthUnit: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: Array(String),
  indication: Array(String),
  dispensePackageSize: Number,
  dispensePackageSizeUnit: String,
  dispensePackageMethod: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyDispenseSegmentV3I extends Segment{
  dispenseSubIDCounter: number
  dispenseGiveCode: string
  dateTimeDispensed: Date
  actualDispenseAmount: number
  actualDispenseUnits: string
  actualDosageForm: string
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  dispenseNotes: string[]
  dispensingProvider: string
  substitutionStatus: string
  totalDailyDose: number
  dispenseToLocation: string
  needsHumanReview: string
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: string[]
  actualStrength: number
  actualStrengthUnit: string
  substanceLotNumber: string[]
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  indication: string[]
  dispensePackageSize: number
  dispensePackageSizeUnit: string
  dispensePackageMethod: string
  
  }
  export const HL7PharmacyDispenseSegmentV3 = mongoose.model<HL7PharmacyDispenseSegmentV3Document> ("HL7PharmacyDispenseSegmentV3", HL7PharmacyDispenseSegmentV3Schema);

