
// Generated typescript code of HL7v 2.2 RXE  (Pharmacy Encoded Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyEncodedOrderV2Document = mongoose.Document & HL7PharmacyEncodedOrderV2I

const HL7PharmacyEncodedOrderV2Schema = new mongoose.Schema({
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
  delivertoLocation: String,
  substitutionStatus: String,
  dispenseAmount: Number,
  dispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDeaNumber: String,
  pharmacistVerifierId: String,
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  numberOfRefillsDosesDispensed: Number,
  dateTimeOfMostRecentRefillOrDoseDispensed: Date,
  totalDailyDose: String,
  needsHumanReview: String,
  pharmacySpecialDispensingInstructions: Array(String),
  givePerTimeUnit: String,
  giveRateAmount: String,
  giveRateUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyEncodedOrderV2I extends Segment{
  quantityTiming: string
  giveCode: string
  giveAmountMinimum: number
  giveAmountMaximum: number
  giveUnits: string
  giveDosageForm: string
  providersAdministrationInstructions: string[]
  delivertoLocation: string
  substitutionStatus: string
  dispenseAmount: number
  dispenseUnits: string
  numberOfRefills: number
  orderingProvidersDeaNumber: string
  pharmacistVerifierId: string
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  numberOfRefillsDosesDispensed: number
  dateTimeOfMostRecentRefillOrDoseDispensed: Date
  totalDailyDose: string
  needsHumanReview: string
  pharmacySpecialDispensingInstructions: string[]
  givePerTimeUnit: string
  giveRateAmount: string
  giveRateUnits: string
  
  }
  export const HL7PharmacyEncodedOrderV2 = mongoose.model<HL7PharmacyEncodedOrderV2Document> ("HL7PharmacyEncodedOrderV2", HL7PharmacyEncodedOrderV2Schema);

