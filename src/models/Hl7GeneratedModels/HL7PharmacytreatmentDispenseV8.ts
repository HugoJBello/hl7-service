
// Generated typescript code of HL7v 2.8 RXD  (Pharmacy/treatment Dispense)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentDispenseV8Document = mongoose.Document & HL7PharmacytreatmentDispenseV8I

const HL7PharmacytreatmentDispenseV8Schema = new mongoose.Schema({
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
  dispenseTagIdentifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentDispenseV8I extends Segment{
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
  dispenseTagIdentifier: string[]
  
  }
  export const HL7PharmacytreatmentDispenseV8 = mongoose.model<HL7PharmacytreatmentDispenseV8Document> ("HL7PharmacytreatmentDispenseV8", HL7PharmacytreatmentDispenseV8Schema);

