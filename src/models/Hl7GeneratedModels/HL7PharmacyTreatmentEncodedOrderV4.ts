
// Generated typescript code of HL7v 2.4 RXE  (Pharmacy/Treatment Encoded Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentEncodedOrderV4Document = mongoose.Document & HL7PharmacyTreatmentEncodedOrderV4I

const HL7PharmacyTreatmentEncodedOrderV4Schema = new mongoose.Schema({
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
  orderingProvidersDEANumber: Array(String),
  pharmacistTreatmentSuppliersVerifierID: Array(String),
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  numberOfRefillsDosesDispensed: Number,
  dTOfMostRecentRefillOrDoseDispensed: Date,
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
  supplementaryCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentEncodedOrderV4I extends Segment{
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
  orderingProvidersDEANumber: string[]
  pharmacistTreatmentSuppliersVerifierID: string[]
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  numberOfRefillsDosesDispensed: number
  dTOfMostRecentRefillOrDoseDispensed: Date
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
  supplementaryCode: string[]
  
  }
  export const HL7PharmacyTreatmentEncodedOrderV4 = mongoose.model<HL7PharmacyTreatmentEncodedOrderV4Document> ("HL7PharmacyTreatmentEncodedOrderV4", HL7PharmacyTreatmentEncodedOrderV4Schema);

