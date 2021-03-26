
// Generated typescript code of HL7v 2.6 RXA  (Pharmacy/Treatment Administration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentAdministrationV6Document = mongoose.Document & HL7PharmacyTreatmentAdministrationV6I

const HL7PharmacyTreatmentAdministrationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  giveSubIDCounter: Number,
  administrationSubIDCounter: Number,
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
  actionCodeRXA: String,
  systemEntryDateTime: String,
  administeredDrugStrengthVolume: Number,
  administeredDrugStrengthVolumeUnits: String,
  administeredBarcodeIdentifier: String,
  pharmacyOrderType: String,
  administerat: String,
  administeredatAddress: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentAdministrationV6I extends Segment{
  giveSubIDCounter: number
  administrationSubIDCounter: number
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
  actionCodeRXA: string
  systemEntryDateTime: string
  administeredDrugStrengthVolume: number
  administeredDrugStrengthVolumeUnits: string
  administeredBarcodeIdentifier: string
  pharmacyOrderType: string
  administerat: string
  administeredatAddress: string
  
  }
  export const HL7PharmacyTreatmentAdministrationV6 = mongoose.model<HL7PharmacyTreatmentAdministrationV6Document> ("HL7PharmacyTreatmentAdministrationV6", HL7PharmacyTreatmentAdministrationV6Schema);

