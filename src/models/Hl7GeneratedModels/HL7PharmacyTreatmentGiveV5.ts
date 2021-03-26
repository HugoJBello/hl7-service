
// Generated typescript code of HL7v 2.5 RXG  (Pharmacy/Treatment Give)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentGiveV5Document = mongoose.Document & HL7PharmacyTreatmentGiveV5I

const HL7PharmacyTreatmentGiveV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  giveSubIDCounter: Number,
  dispenseSubIDCounter: Number,
  quantityTiming: String,
  giveCode: String,
  giveAmountMinimum: Number,
  giveAmountMaximum: Number,
  giveUnits: String,
  giveDosageForm: String,
  administrationNotes: Array(String),
  substitutionStatus: String,
  dispensetoLocation: String,
  needsHumanReview: String,
  pharmacyTreatmentSuppliersSpecialAdministrationInstructions: Array(String),
  givePerTimeUnit: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: Number,
  giveStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: Array(String),
  indication: Array(String),
  giveDrugStrengthVolume: Number,
  giveDrugStrengthVolumeUnits: String,
  giveBarcodeIdentifier: String,
  pharmacyOrderType: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentGiveV5I extends Segment{
  giveSubIDCounter: number
  dispenseSubIDCounter: number
  quantityTiming: string
  giveCode: string
  giveAmountMinimum: number
  giveAmountMaximum: number
  giveUnits: string
  giveDosageForm: string
  administrationNotes: string[]
  substitutionStatus: string
  dispensetoLocation: string
  needsHumanReview: string
  pharmacyTreatmentSuppliersSpecialAdministrationInstructions: string[]
  givePerTimeUnit: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: number
  giveStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  indication: string[]
  giveDrugStrengthVolume: number
  giveDrugStrengthVolumeUnits: string
  giveBarcodeIdentifier: string
  pharmacyOrderType: string
  
  }
  export const HL7PharmacyTreatmentGiveV5 = mongoose.model<HL7PharmacyTreatmentGiveV5Document> ("HL7PharmacyTreatmentGiveV5", HL7PharmacyTreatmentGiveV5Schema);

