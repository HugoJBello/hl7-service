
// Generated typescript code of HL7v 2.6 RXO  (Pharmacy/Treatment Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentOrderV6Document = mongoose.Document & HL7PharmacyTreatmentOrderV6I

const HL7PharmacyTreatmentOrderV6Schema = new mongoose.Schema({
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
  requestedGivePerTimeUnit: String,
  requestedGiveStrength: Number,
  requestedGiveStrengthUnits: String,
  indication: Array(String),
  requestedGiveRateAmount: String,
  requestedGiveRateUnits: String,
  totalDailyDose: String,
  supplementaryCode: Array(String),
  requestedDrugStrengthVolume: Number,
  requestedDrugStrengthVolumeUnits: String,
  pharmacyOrderType: String,
  dispensingInterval: Number,
  medicationInstanceIdentifier: String,
  segmentInstanceIdentifier: String,
  moodCode: String,
  dispensingPharmacy: String,
  dispensingPharmacyAddress: String,
  delivertoPatientLocation: String,
  delivertoAddress: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentOrderV6I extends Segment{
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
  requestedGivePerTimeUnit: string
  requestedGiveStrength: number
  requestedGiveStrengthUnits: string
  indication: string[]
  requestedGiveRateAmount: string
  requestedGiveRateUnits: string
  totalDailyDose: string
  supplementaryCode: string[]
  requestedDrugStrengthVolume: number
  requestedDrugStrengthVolumeUnits: string
  pharmacyOrderType: string
  dispensingInterval: number
  medicationInstanceIdentifier: string
  segmentInstanceIdentifier: string
  moodCode: string
  dispensingPharmacy: string
  dispensingPharmacyAddress: string
  delivertoPatientLocation: string
  delivertoAddress: string
  
  }
  export const HL7PharmacyTreatmentOrderV6 = mongoose.model<HL7PharmacyTreatmentOrderV6Document> ("HL7PharmacyTreatmentOrderV6", HL7PharmacyTreatmentOrderV6Schema);

