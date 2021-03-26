
// Generated typescript code of HL7v 2.2 RXG  (Pharmacy Give)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyGiveV2Document = mongoose.Document & HL7PharmacyGiveV2I

const HL7PharmacyGiveV2Schema = new mongoose.Schema({
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
  pharmacySpecialAdministrationInstructions: Array(String),
  givePerTimeUnit: String,
  giveRateAmount: String,
  giveRateUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyGiveV2I extends Segment{
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
  pharmacySpecialAdministrationInstructions: string[]
  givePerTimeUnit: string
  giveRateAmount: string
  giveRateUnits: string
  
  }
  export const HL7PharmacyGiveV2 = mongoose.model<HL7PharmacyGiveV2Document> ("HL7PharmacyGiveV2", HL7PharmacyGiveV2Schema);

