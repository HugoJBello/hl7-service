
// Generated typescript code of HL7v 2.7 RXE  (Pharmacy/treatment Encoded Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentEncodedOrderV7Document = mongoose.Document & HL7PharmacytreatmentEncodedOrderV7I

const HL7PharmacytreatmentEncodedOrderV7Schema = new mongoose.Schema({
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
  orderingProvidersDeaNumber: Array(String),
  pharmacistTreatmentSuppliersVerifierId: Array(String),
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  numberOfRefillsDosesDispensed: Number,
  dTOfMostRecentRefillOrDoseDispensed: String,
  totalDailyDose: String,
  needsHumanReview: String,
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: Array(String),
  givePerTimeUnit: String,
  giveRateAmount: String,
  giveRateUnits: String,
  giveStrength: Number,
  giveStrengthUnits: String,
  giveIndication: Array(String),
  dispensePackageSize: Number,
  dispensePackageSizeUnit: String,
  dispensePackageMethod: String,
  supplementaryCode: Array(String),
  originalOrderDateTime: String,
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
  pharmacyPhoneNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentEncodedOrderV7I extends Segment{
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
  orderingProvidersDeaNumber: string[]
  pharmacistTreatmentSuppliersVerifierId: string[]
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  numberOfRefillsDosesDispensed: number
  dTOfMostRecentRefillOrDoseDispensed: string
  totalDailyDose: string
  needsHumanReview: string
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: string[]
  givePerTimeUnit: string
  giveRateAmount: string
  giveRateUnits: string
  giveStrength: number
  giveStrengthUnits: string
  giveIndication: string[]
  dispensePackageSize: number
  dispensePackageSizeUnit: string
  dispensePackageMethod: string
  supplementaryCode: string[]
  originalOrderDateTime: string
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
  pharmacyPhoneNumber: string[]
  
  }
  export const HL7PharmacytreatmentEncodedOrderV7 = mongoose.model<HL7PharmacytreatmentEncodedOrderV7Document> ("HL7PharmacytreatmentEncodedOrderV7", HL7PharmacytreatmentEncodedOrderV7Schema);

