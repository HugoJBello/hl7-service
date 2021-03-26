
// Generated typescript code of HL7v 2.3 RXO  (Pharmacy prescription order segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyPrescriptionOrderSegmentV3Document = mongoose.Document & HL7PharmacyPrescriptionOrderSegmentV3I

const HL7PharmacyPrescriptionOrderSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requestedGiveCode: String,
  requestedGiveAmountMinimum: Number,
  requestedGiveAmountMaximum: Number,
  requestedGiveUnits: String,
  requestedDosageForm: String,
  providersPharmacyInstructions: Array(String),
  providersAdministrationInstructions: Array(String),
  deliverToLocation: String,
  allowSubstitutions: String,
  requestedDispenseCode: String,
  requestedDispenseAmount: Number,
  requestedDispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDEANumber: String,
  pharmacistTreatmentSuppliersVerifierID: String,
  needsHumanReview: String,
  requestedGivePer: String,
  requestedGiveStrength: Number,
  requestedGiveStrengthUnits: String,
  indication: String,
  requestedGiveRateAmount: String,
  requestedGiveRateUnits: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyPrescriptionOrderSegmentV3I extends Segment{
  requestedGiveCode: string
  requestedGiveAmountMinimum: number
  requestedGiveAmountMaximum: number
  requestedGiveUnits: string
  requestedDosageForm: string
  providersPharmacyInstructions: string[]
  providersAdministrationInstructions: string[]
  deliverToLocation: string
  allowSubstitutions: string
  requestedDispenseCode: string
  requestedDispenseAmount: number
  requestedDispenseUnits: string
  numberOfRefills: number
  orderingProvidersDEANumber: string
  pharmacistTreatmentSuppliersVerifierID: string
  needsHumanReview: string
  requestedGivePer: string
  requestedGiveStrength: number
  requestedGiveStrengthUnits: string
  indication: string
  requestedGiveRateAmount: string
  requestedGiveRateUnits: string
  
  }
  export const HL7PharmacyPrescriptionOrderSegmentV3 = mongoose.model<HL7PharmacyPrescriptionOrderSegmentV3Document> ("HL7PharmacyPrescriptionOrderSegmentV3", HL7PharmacyPrescriptionOrderSegmentV3Schema);

