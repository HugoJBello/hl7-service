
// Generated typescript code of HL7v 2.8 RXA  (Pharmacy/treatment Administration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacytreatmentAdministrationV8Document = mongoose.Document & HL7PharmacytreatmentAdministrationV8I

const HL7PharmacytreatmentAdministrationV8Schema = new mongoose.Schema({
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
  administeredTagIdentifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacytreatmentAdministrationV8I extends Segment{
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
  administeredTagIdentifier: string[]
  
  }
  export const HL7PharmacytreatmentAdministrationV8 = mongoose.model<HL7PharmacytreatmentAdministrationV8Document> ("HL7PharmacytreatmentAdministrationV8", HL7PharmacytreatmentAdministrationV8Schema);

