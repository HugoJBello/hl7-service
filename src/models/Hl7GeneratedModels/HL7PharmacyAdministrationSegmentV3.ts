
// Generated typescript code of HL7v 2.3 RXA  (Pharmacy administration segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyAdministrationSegmentV3Document = mongoose.Document & HL7PharmacyAdministrationSegmentV3I

const HL7PharmacyAdministrationSegmentV3Schema = new mongoose.Schema({
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
  administeringProvider: String,
  administeredatLocation: String,
  administeredPer: String,
  administeredStrength: Number,
  administeredStrengthUnits: String,
  substanceLotNumber: Array(String),
  substanceExpirationDate: Array(Date),
  substanceManufacturerName: Array(String),
  substanceRefusalReason: Array(String),
  indication: Array(String),
  completionStatus: String,
  actionCodeRXA: String,
  systemEntryDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7PharmacyAdministrationSegmentV3I extends Segment{
  giveSubIDCounter: number
  administrationSubIDCounter: number
  dateTimeStartOfAdministration: Date
  dateTimeEndOfAdministration: Date
  administeredCode: string
  administeredAmount: number
  administeredUnits: string
  administeredDosageForm: string
  administrationNotes: string[]
  administeringProvider: string
  administeredatLocation: string
  administeredPer: string
  administeredStrength: number
  administeredStrengthUnits: string
  substanceLotNumber: string[]
  substanceExpirationDate: Date[]
  substanceManufacturerName: string[]
  substanceRefusalReason: string[]
  indication: string[]
  completionStatus: string
  actionCodeRXA: string
  systemEntryDateTime: Date
  
  }
  export const HL7PharmacyAdministrationSegmentV3 = mongoose.model<HL7PharmacyAdministrationSegmentV3Document> ("HL7PharmacyAdministrationSegmentV3", HL7PharmacyAdministrationSegmentV3Schema);

