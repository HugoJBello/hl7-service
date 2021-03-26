
// Generated typescript code of HL7v 2.5 RXA  (Pharmacy/Treatment Administration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentAdministrationV5Document = mongoose.Document & HL7PharmacyTreatmentAdministrationV5I

const HL7PharmacyTreatmentAdministrationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  giveSubIDCounter: Number,
  administrationSubIDCounter: Number,
  dateTimeStartOfAdministration: Date,
  dateTimeEndOfAdministration: Date,
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
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: Array(String),
  substanceTreatmentRefusalReason: Array(String),
  indication: Array(String),
  completionStatus: String,
  actionCodeRXA: String,
  systemEntryDateTime: Date,
  administeredDrugStrengthVolume: Number,
  administeredDrugStrengthVolumeUnits: String,
  administeredBarcodeIdentifier: String,
  pharmacyOrderType: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentAdministrationV5I extends Segment{
  giveSubIDCounter: number
  administrationSubIDCounter: number
  dateTimeStartOfAdministration: Date
  dateTimeEndOfAdministration: Date
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
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  substanceTreatmentRefusalReason: string[]
  indication: string[]
  completionStatus: string
  actionCodeRXA: string
  systemEntryDateTime: Date
  administeredDrugStrengthVolume: number
  administeredDrugStrengthVolumeUnits: string
  administeredBarcodeIdentifier: string
  pharmacyOrderType: string
  
  }
  export const HL7PharmacyTreatmentAdministrationV5 = mongoose.model<HL7PharmacyTreatmentAdministrationV5Document> ("HL7PharmacyTreatmentAdministrationV5", HL7PharmacyTreatmentAdministrationV5Schema);

