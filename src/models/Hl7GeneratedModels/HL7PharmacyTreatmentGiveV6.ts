
// Generated typescript code of HL7v 2.6 RXG  (Pharmacy/Treatment Give)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentGiveV6Document = mongoose.Document & HL7PharmacyTreatmentGiveV6I

const HL7PharmacyTreatmentGiveV6Schema = new mongoose.Schema({
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
  givePerTImeUnit: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: Number,
  giveStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(String),
  substanceManufacturerName: Array(String),
  indication: Array(String),
  giveDrugStrengthVolume: Number,
  giveDrugStrengthVolumeUnits: String,
  giveBarcodeIdentifier: String,
  pharmacyOrderType: String,
  dispenseToPharmacy: String,
  dispenseToPharmacyAddress: String,
  delivertoPatientLocation: String,
  delivertoAddress: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentGiveV6I extends Segment{
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
  givePerTImeUnit: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: number
  giveStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: string[]
  substanceManufacturerName: string[]
  indication: string[]
  giveDrugStrengthVolume: number
  giveDrugStrengthVolumeUnits: string
  giveBarcodeIdentifier: string
  pharmacyOrderType: string
  dispenseToPharmacy: string
  dispenseToPharmacyAddress: string
  delivertoPatientLocation: string
  delivertoAddress: string
  
  }
  export const HL7PharmacyTreatmentGiveV6 = mongoose.model<HL7PharmacyTreatmentGiveV6Document> ("HL7PharmacyTreatmentGiveV6", HL7PharmacyTreatmentGiveV6Schema);

