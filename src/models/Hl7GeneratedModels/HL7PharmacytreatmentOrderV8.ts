
// Generated typescript code of HL7v 2.8 RXO  (Pharmacy/treatment Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentOrderV8Document = mongoose.Document & HL7PharmacytreatmentOrderV8I

const HL7PharmacytreatmentOrderV8Schema = new mongoose.Schema({
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
  delivertoLocation: String,
  allowSubstitutions: String,
  requestedDispenseCode: String,
  requestedDispenseAmount: Number,
  requestedDispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDeaNumber: Array(String),
  pharmacistTreatmentSuppliersVerifierId: Array(String),
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
  pharmacyPhoneNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentOrderV8I extends Segment{
  requestedGiveCode: string
  requestedGiveAmountMinimum: number
  requestedGiveAmountMaximum: number
  requestedGiveUnits: string
  requestedDosageForm: string
  providersPharmacyTreatmentInstructions: string[]
  providersAdministrationInstructions: string[]
  delivertoLocation: string
  allowSubstitutions: string
  requestedDispenseCode: string
  requestedDispenseAmount: number
  requestedDispenseUnits: string
  numberOfRefills: number
  orderingProvidersDeaNumber: string[]
  pharmacistTreatmentSuppliersVerifierId: string[]
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
  pharmacyPhoneNumber: string[]
  
  }
  export const HL7PharmacytreatmentOrderV8 = mongoose.model<HL7PharmacytreatmentOrderV8Document> ("HL7PharmacytreatmentOrderV8", HL7PharmacytreatmentOrderV8Schema);

