
// Generated typescript code of HL7v 2.2 RXO  (Pharmacy Prescription Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyPrescriptionOrderV2Document = mongoose.Document & HL7PharmacyPrescriptionOrderV2I

const HL7PharmacyPrescriptionOrderV2Schema = new mongoose.Schema({
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
  delivertoLocation: String,
  allowSubstitutions: String,
  requestedDispenseCode: String,
  requestedDispenseAmount: Number,
  requestedDispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDeaNumber: String,
  pharmacistVerifierId: String,
  needsHumanReview: String,
  requestedGivePerTimeUnit: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyPrescriptionOrderV2I extends Segment{
  requestedGiveCode: string
  requestedGiveAmountMinimum: number
  requestedGiveAmountMaximum: number
  requestedGiveUnits: string
  requestedDosageForm: string
  providersPharmacyInstructions: string[]
  providersAdministrationInstructions: string[]
  delivertoLocation: string
  allowSubstitutions: string
  requestedDispenseCode: string
  requestedDispenseAmount: number
  requestedDispenseUnits: string
  numberOfRefills: number
  orderingProvidersDeaNumber: string
  pharmacistVerifierId: string
  needsHumanReview: string
  requestedGivePerTimeUnit: string
  
  }
  export const HL7PharmacyPrescriptionOrderV2 = mongoose.model<HL7PharmacyPrescriptionOrderV2Document> ("HL7PharmacyPrescriptionOrderV2", HL7PharmacyPrescriptionOrderV2Schema);

