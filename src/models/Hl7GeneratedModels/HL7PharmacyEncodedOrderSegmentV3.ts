
// Generated typescript code of HL7v 2.3 RXE  (Pharmacy encoded order segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyEncodedOrderSegmentV3Document = mongoose.Document & HL7PharmacyEncodedOrderSegmentV3I

const HL7PharmacyEncodedOrderSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  quantityTiming: String,
  giveCode: String,
  giveAmountMinimum: Number,
  giveAmountMaximum: Number,
  giveUnits: String,
  giveDosageForm: String,
  providersAdministrationInstructions: Array(String),
  deliverToLocation: String,
  substitutionStatus: String,
  dispenseAmount: Number,
  dispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDEANumber: String,
  pharmacistTreatmentSuppliersVerifierID: String,
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  numberOfRefillsDosesDispensed: Number,
  dateTimeOfMostRecentRefillOrDoseDispensed: Date,
  totalDailyDose: String,
  needsHumanReview: String,
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: Array(String),
  givePer: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: Number,
  giveStrengthUnits: String,
  giveIndication: Array(String),
  dispensePackageSize: Number,
  dispensePackageSizeUnit: String,
  dispensePackageMethod: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyEncodedOrderSegmentV3I extends Segment{
  quantityTiming: string
  giveCode: string
  giveAmountMinimum: number
  giveAmountMaximum: number
  giveUnits: string
  giveDosageForm: string
  providersAdministrationInstructions: string[]
  deliverToLocation: string
  substitutionStatus: string
  dispenseAmount: number
  dispenseUnits: string
  numberOfRefills: number
  orderingProvidersDEANumber: string
  pharmacistTreatmentSuppliersVerifierID: string
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  numberOfRefillsDosesDispensed: number
  dateTimeOfMostRecentRefillOrDoseDispensed: Date
  totalDailyDose: string
  needsHumanReview: string
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: string[]
  givePer: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: number
  giveStrengthUnits: string
  giveIndication: string[]
  dispensePackageSize: number
  dispensePackageSizeUnit: string
  dispensePackageMethod: string
  
  }
  export const HL7PharmacyEncodedOrderSegmentV3 = mongoose.model<HL7PharmacyEncodedOrderSegmentV3Document> ("HL7PharmacyEncodedOrderSegmentV3", HL7PharmacyEncodedOrderSegmentV3Schema);

