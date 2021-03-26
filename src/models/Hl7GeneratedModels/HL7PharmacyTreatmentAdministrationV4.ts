
// Generated typescript code of HL7v 2.4 RXA  (Pharmacy/Treatment Administration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyTreatmentAdministrationV4Document = mongoose.Document & HL7PharmacyTreatmentAdministrationV4I

const HL7PharmacyTreatmentAdministrationV4Schema = new mongoose.Schema({
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
  administeredPer: String,
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
  
  }, { timestamps: true });
  
export interface HL7PharmacyTreatmentAdministrationV4I extends Segment{
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
  administeredPer: string
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
  
  }
  export const HL7PharmacyTreatmentAdministrationV4 = mongoose.model<HL7PharmacyTreatmentAdministrationV4Document> ("HL7PharmacyTreatmentAdministrationV4", HL7PharmacyTreatmentAdministrationV4Schema);

