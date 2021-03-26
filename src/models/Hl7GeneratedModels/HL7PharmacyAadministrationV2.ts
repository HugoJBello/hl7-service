
// Generated typescript code of HL7v 2.2 RXA  (Pharmacy Aadministration)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyAadministrationV2Document = mongoose.Document & HL7PharmacyAadministrationV2I

const HL7PharmacyAadministrationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  giveSubidCounter: Number,
  administrationSubidCounter: Number,
  dateTimeStartOfAdministration: Date,
  dateTimeEndOfAdministration: Date,
  administeredCode: String,
  administeredAmount: Number,
  administeredUnits: String,
  administeredDosageForm: String,
  administrationNotes: Array(String),
  administeringProvider: String,
  administeredatLocation: String,
  administeredPerTimeUnit: String,
  
  }, { timestamps: true });
  
export interface HL7PharmacyAadministrationV2I extends Segment{
  giveSubidCounter: number
  administrationSubidCounter: number
  dateTimeStartOfAdministration: Date
  dateTimeEndOfAdministration: Date
  administeredCode: string
  administeredAmount: number
  administeredUnits: string
  administeredDosageForm: string
  administrationNotes: string[]
  administeringProvider: string
  administeredatLocation: string
  administeredPerTimeUnit: string
  
  }
  export const HL7PharmacyAadministrationV2 = mongoose.model<HL7PharmacyAadministrationV2Document> ("HL7PharmacyAadministrationV2", HL7PharmacyAadministrationV2Schema);

