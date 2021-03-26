
// Generated typescript code of HL7v 2.3 RXG  (Pharmacy give segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyGiveSegmentV3Document = mongoose.Document & HL7PharmacyGiveSegmentV3I

const HL7PharmacyGiveSegmentV3Schema = new mongoose.Schema({
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
  dispenseToLocation: String,
  needsHumanReview: String,
  pharmacySpecialAdministrationInstructions: Array(String),
  givePer: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: Number,
  giveStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: Array(String),
  indication: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacyGiveSegmentV3I extends Segment{
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
  dispenseToLocation: string
  needsHumanReview: string
  pharmacySpecialAdministrationInstructions: string[]
  givePer: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: number
  giveStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  indication: string[]
  
  }
  export const HL7PharmacyGiveSegmentV3 = mongoose.model<HL7PharmacyGiveSegmentV3Document> ("HL7PharmacyGiveSegmentV3", HL7PharmacyGiveSegmentV3Schema);

