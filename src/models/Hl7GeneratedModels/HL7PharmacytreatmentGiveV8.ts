
// Generated typescript code of HL7v 2.8 RXG  (Pharmacy/treatment Give)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentGiveV8Document = mongoose.Document & HL7PharmacytreatmentGiveV8I

const HL7PharmacytreatmentGiveV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  giveSubidCounter: Number,
  dispenseSubidCounter: Number,
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
  giveTagIdentifier: Array(String),
  dispenseAmount: Number,
  dispenseUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentGiveV8I extends Segment{
  giveSubidCounter: number
  dispenseSubidCounter: number
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
  giveTagIdentifier: string[]
  dispenseAmount: number
  dispenseUnits: string
  
  }
  export const HL7PharmacytreatmentGiveV8 = mongoose.model<HL7PharmacytreatmentGiveV8Document> ("HL7PharmacytreatmentGiveV8", HL7PharmacytreatmentGiveV8Schema);

