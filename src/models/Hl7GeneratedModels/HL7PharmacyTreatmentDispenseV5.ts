
// Generated typescript code of HL7v 2.5 RXD  (Pharmacy/Treatment Dispense)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentDispenseV5Document = mongoose.Document & HL7PharmacyTreatmentDispenseV5I

const HL7PharmacyTreatmentDispenseV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dispenseSubIDCounter: Number,
  dispenseGiveCode: String,
  dateTimeDispensed: Date,
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
  substanceExpirationDate: Array(Date),
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
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentDispenseV5I extends Segment{
  dispenseSubIDCounter: number
  dispenseGiveCode: string
  dateTimeDispensed: Date
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
  substanceExpirationDate: Date[]
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
  
  }
  export const HL7PharmacyTreatmentDispenseV5 = mongoose.model<HL7PharmacyTreatmentDispenseV5Document> ("HL7PharmacyTreatmentDispenseV5", HL7PharmacyTreatmentDispenseV5Schema);

