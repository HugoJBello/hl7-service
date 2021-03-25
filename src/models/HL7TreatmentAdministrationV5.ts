import mongoose from "mongoose";
import { DecodedSegmentBase, Hl7Segment } from "./Segment";

export type HL7DecodedTreatmentAdminstrationDocument = mongoose.Document & HL7DecodedTreatmentAdministrationV5I

const HL7DecodedTreatmentAdministrationSchemaV5 = new mongoose.Schema({
  segment: String,
  id: String,
  hl7version: String,

  giveSubIdCounter: String,
  administrationSubIdCounter: String,
  dateStartAdministration: Date,
  dateEndAdministration: Date,
  administratedCode: String,
  administratedAmount: String,
  administratedUnits: String,
  administratedDosageForm: String,
  administrationNotes: Array(String),
  administeringProvider: Array(String),
  administeredAtLocation: String,
  administeredStrength: String,
  administeredStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: Array(String),
  substanceTreatmentRefusalReaction: Array(String),
  indication: Array(String),
  completionStatus: String,
  actionCode: String,
  systemEntryDate: Date,
  adminsiteredDrugStrengthVolume: String,
  adminsiteredDrugStrengthVolumeUnits: String,
  pharmacyOrderType: String
}, { timestamps: true });

export interface HL7DecodedTreatmentAdministrationV5I extends DecodedSegmentBase{
  giveSubIdCounter: string
  administrationSubIdCounter: string
  dateStartAdministration: Date
  dateEndAdministration: Date
  administratedCode: string
  administratedAmount: string
  administratedUnits: string
  administratedDosageForm: string
  administrationNotes: string[]
  administeringProvider: string[]
  administeredAtLocation: string
  administeredStrength: string
  administeredStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  substanceTreatmentRefusalReaction: string[]
  indication: string[]
  completionStatus: string
  actionCode: string
  systemEntryDate: Date
  adminsiteredDrugStrengthVolume: string
  adminsiteredDrugStrengthVolumeUnits: string
  pharmacyOrderType: string
}

export const HL7DecodedTreatmentAdministrationV5 = mongoose.model<HL7DecodedTreatmentAdminstrationDocument>("HL7DecodedTreatmentAdministration", HL7DecodedTreatmentAdministrationSchemaV5);