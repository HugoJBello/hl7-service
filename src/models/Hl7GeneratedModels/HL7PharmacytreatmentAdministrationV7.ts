
// Generated typescript code of HL7v 2.7 RXA  (Pharmacy/treatment Administration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentAdministrationV7Document = mongoose.Document & HL7PharmacytreatmentAdministrationV7I

const HL7PharmacytreatmentAdministrationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  giveSubidCounter: Number,
  administrationSubidCounter: Number,
  dateTimeStartOfAdministration: String,
  dateTimeEndOfAdministration: String,
  administeredCode: String,
  administeredAmount: Number,
  administeredUnits: String,
  administeredDosageForm: String,
  administrationNotes: Array(String),
  administeringProvider: Array(String),
  administeredatLocation: String,
  administeredPerTimeUnit: String,
  administeredStrength: Number,
  administeredStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(String),
  substanceManufacturerName: Array(String),
  substanceTreatmentRefusalReason: Array(String),
  indication: Array(String),
  completionStatus: String,
  actionCodeRxa: String,
  systemEntryDateTime: String,
  administeredDrugStrengthVolume: Number,
  administeredDrugStrengthVolumeUnits: String,
  administeredBarcodeIdentifier: String,
  pharmacyOrderType: String,
  administerat: String,
  administeredatAddress: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentAdministrationV7I extends Segment{
  giveSubidCounter: number
  administrationSubidCounter: number
  dateTimeStartOfAdministration: string
  dateTimeEndOfAdministration: string
  administeredCode: string
  administeredAmount: number
  administeredUnits: string
  administeredDosageForm: string
  administrationNotes: string[]
  administeringProvider: string[]
  administeredatLocation: string
  administeredPerTimeUnit: string
  administeredStrength: number
  administeredStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: string[]
  substanceManufacturerName: string[]
  substanceTreatmentRefusalReason: string[]
  indication: string[]
  completionStatus: string
  actionCodeRxa: string
  systemEntryDateTime: string
  administeredDrugStrengthVolume: number
  administeredDrugStrengthVolumeUnits: string
  administeredBarcodeIdentifier: string
  pharmacyOrderType: string
  administerat: string
  administeredatAddress: string
  
  }
  export const HL7PharmacytreatmentAdministrationV7 = mongoose.model<HL7PharmacytreatmentAdministrationV7Document> ("HL7PharmacytreatmentAdministrationV7", HL7PharmacytreatmentAdministrationV7Schema);

