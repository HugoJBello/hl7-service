
// Generated typescript code of HL7v 2.4 RXO  (Pharmacy/Treatment Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentOrderV4Document = mongoose.Document & HL7PharmacyTreatmentOrderV4I

const HL7PharmacyTreatmentOrderV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requestedGiveCode: String,
  requestedGiveAmountMinimum: Number,
  requestedGiveAmountMaximum: Number,
  requestedGiveUnits: String,
  requestedDosageForm: String,
  providersPharmacyTreatmentInstructions: Array(String),
  providersAdministrationInstructions: Array(String),
  deliverToLocation: String,
  allowSubstitutions: String,
  requestedDispenseCode: String,
  requestedDispenseAmount: Number,
  requestedDispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDEANumber: Array(String),
  pharmacistTreatmentSuppliersVerifierID: Array(String),
  needsHumanReview: String,
  requestedGivePer: String,
  requestedGiveStrength: Number,
  requestedGiveStrengthUnits: String,
  indication: Array(String),
  requestedGiveRateAmount: String,
  requestedGiveRateUnits: String,
  totalDailyDose: String,
  supplementaryCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentOrderV4I extends Segment{
  requestedGiveCode: string
  requestedGiveAmountMinimum: number
  requestedGiveAmountMaximum: number
  requestedGiveUnits: string
  requestedDosageForm: string
  providersPharmacyTreatmentInstructions: string[]
  providersAdministrationInstructions: string[]
  deliverToLocation: string
  allowSubstitutions: string
  requestedDispenseCode: string
  requestedDispenseAmount: number
  requestedDispenseUnits: string
  numberOfRefills: number
  orderingProvidersDEANumber: string[]
  pharmacistTreatmentSuppliersVerifierID: string[]
  needsHumanReview: string
  requestedGivePer: string
  requestedGiveStrength: number
  requestedGiveStrengthUnits: string
  indication: string[]
  requestedGiveRateAmount: string
  requestedGiveRateUnits: string
  totalDailyDose: string
  supplementaryCode: string[]
  
  }
  export const HL7PharmacyTreatmentOrderV4 = mongoose.model<HL7PharmacyTreatmentOrderV4Document> ("HL7PharmacyTreatmentOrderV4", HL7PharmacyTreatmentOrderV4Schema);

