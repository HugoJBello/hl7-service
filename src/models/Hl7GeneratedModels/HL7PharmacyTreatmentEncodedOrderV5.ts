
// Generated typescript code of HL7v 2.5 RXE  (Pharmacy/Treatment Encoded Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentEncodedOrderV5Document = mongoose.Document & HL7PharmacyTreatmentEncodedOrderV5I

const HL7PharmacyTreatmentEncodedOrderV5Schema = new mongoose.Schema({
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
  deliverToLocation: String,
  substitutionStatus: String,
  dispenseAmount: Number,
  dispenseUnits: String,
  numberOfRefills: Number,
  orderingProvidersDEANumber: Array(String),
  pharmacistTreatmentSuppliersVerifierID: Array(String),
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  numberOfRefillsDosesDispensed: Number,
  dTOfMostRecentRefillOrDoseDispensed: Date,
  totalDailyDose: String,
  needsHumanReview: String,
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: Array(String),
  givePerTimeUnits: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: Number,
  giveStrengthUnits: String,
  giveIndication: Array(String),
  dispensePackageSize: Number,
  dispensePackageSizeUnit: String,
  dispensePackageMethod: String,
  supplementaryCode: Array(String),
  originalOrderDateTime: Date,
  giveDrugStrengthVolume: Number,
  giveDrugStrengthVolumeUnits: String,
  controlledSubstanceSchedule: String,
  formularyStatus: String,
  pharmaceuticalSubstanceAlternative: Array(String),
  pharmacyOfMostRecentFill: String,
  initialDispenseAmount: Number,
  dispensingPharmacy: String,
  dispensingPharmacyAddress: String,
  delivertoPatientLocation: String,
  delivertoAddress: String,
  pharmacyOrderType: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentEncodedOrderV5I extends Segment{
  quantityTiming: string
  giveCode: string
  giveAmountMinimum: number
  giveAmountMaximum: number
  giveUnits: string
  giveDosageForm: string
  providersAdministrationInstructions: string[]
  deliverToLocation: string
  substitutionStatus: string
  dispenseAmount: number
  dispenseUnits: string
  numberOfRefills: number
  orderingProvidersDEANumber: string[]
  pharmacistTreatmentSuppliersVerifierID: string[]
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  numberOfRefillsDosesDispensed: number
  dTOfMostRecentRefillOrDoseDispensed: Date
  totalDailyDose: string
  needsHumanReview: string
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: string[]
  givePerTimeUnits: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: number
  giveStrengthUnits: string
  giveIndication: string[]
  dispensePackageSize: number
  dispensePackageSizeUnit: string
  dispensePackageMethod: string
  supplementaryCode: string[]
  originalOrderDateTime: Date
  giveDrugStrengthVolume: number
  giveDrugStrengthVolumeUnits: string
  controlledSubstanceSchedule: string
  formularyStatus: string
  pharmaceuticalSubstanceAlternative: string[]
  pharmacyOfMostRecentFill: string
  initialDispenseAmount: number
  dispensingPharmacy: string
  dispensingPharmacyAddress: string
  delivertoPatientLocation: string
  delivertoAddress: string
  pharmacyOrderType: string
  
  }
  export const HL7PharmacyTreatmentEncodedOrderV5 = mongoose.model<HL7PharmacyTreatmentEncodedOrderV5Document> ("HL7PharmacyTreatmentEncodedOrderV5", HL7PharmacyTreatmentEncodedOrderV5Schema);

