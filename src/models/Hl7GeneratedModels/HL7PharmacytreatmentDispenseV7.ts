
// Generated typescript code of HL7v 2.7 RXD  (Pharmacy/treatment Dispense)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentDispenseV7Document = mongoose.Document & HL7PharmacytreatmentDispenseV7I

const HL7PharmacytreatmentDispenseV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dispenseSubidCounter: Number,
  dispenseGiveCode: String,
  dateTimeDispensed: String,
  actualDispenseAmount: Number,
  actualDispenseUnits: String,
  actualDosageForm: String,
  prescriptionNumber: String,
  numberOfRefillsRemaining: Number,
  dispenseNotes: Array(String),
  dispensingProvider: Array(String),
  substitutionStatus: String,
  totalDailyDose: String,
  dispensetoLocation: String,
  needsHumanReview: String,
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: Array(String),
  actualStrength: Number,
  actualStrengthUnit: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(String),
  substanceManufacturerName: Array(String),
  indication: Array(String),
  dispensePackageSize: Number,
  dispensePackageSizeUnit: String,
  dispensePackageMethod: String,
  supplementaryCode: Array(String),
  initiatingLocation: String,
  packagingAssemblyLocation: String,
  actualDrugStrengthVolume: Number,
  actualDrugStrengthVolumeUnits: String,
  dispenseToPharmacy: String,
  dispenseToPharmacyAddress: String,
  pharmacyOrderType: String,
  dispenseType: String,
  pharmacyPhoneNumber: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentDispenseV7I extends Segment{
  dispenseSubidCounter: number
  dispenseGiveCode: string
  dateTimeDispensed: string
  actualDispenseAmount: number
  actualDispenseUnits: string
  actualDosageForm: string
  prescriptionNumber: string
  numberOfRefillsRemaining: number
  dispenseNotes: string[]
  dispensingProvider: string[]
  substitutionStatus: string
  totalDailyDose: string
  dispensetoLocation: string
  needsHumanReview: string
  pharmacyTreatmentSuppliersSpecialDispensingInstructions: string[]
  actualStrength: number
  actualStrengthUnit: string
  substanceLotNumber: string[]
  substanceExpirationDate: string[]
  substanceManufacturerName: string[]
  indication: string[]
  dispensePackageSize: number
  dispensePackageSizeUnit: string
  dispensePackageMethod: string
  supplementaryCode: string[]
  initiatingLocation: string
  packagingAssemblyLocation: string
  actualDrugStrengthVolume: number
  actualDrugStrengthVolumeUnits: string
  dispenseToPharmacy: string
  dispenseToPharmacyAddress: string
  pharmacyOrderType: string
  dispenseType: string
  pharmacyPhoneNumber: string[]
  
  }
  export const HL7PharmacytreatmentDispenseV7 = mongoose.model<HL7PharmacytreatmentDispenseV7Document> ("HL7PharmacytreatmentDispenseV7", HL7PharmacytreatmentDispenseV7Schema);

