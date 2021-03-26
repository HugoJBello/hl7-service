
// Generated typescript code of HL7v 2.2 RXD  (Pharmacy Dispense)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PharmacyDispenseV2Document = mongoose.Document & HL7PharmacyDispenseV2I

const HL7PharmacyDispenseV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  dispenseSubidCounter: Number,
  dispenseGiveCode: String,
  dateTimeDispensed: Date,
  actualDispenseAmount: Number,
  actualDispenseUnits: String,
  actualDosageForm: String,
  prescriptionNumber: Number,
  numberOfRefillsRemaining: Number,
  dispenseNotes: Array(String),
  dispensingProvider: String,
  substitutionStatus: String,
  totalDailyDose: Number,
  dispensetoLocation: String,
  needsHumanReview: String,
  pharmacySpecialDispensingInstructions: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PharmacyDispenseV2I extends Segment{
  dispenseSubidCounter: number
  dispenseGiveCode: string
  dateTimeDispensed: Date
  actualDispenseAmount: number
  actualDispenseUnits: string
  actualDosageForm: string
  prescriptionNumber: number
  numberOfRefillsRemaining: number
  dispenseNotes: string[]
  dispensingProvider: string
  substitutionStatus: string
  totalDailyDose: number
  dispensetoLocation: string
  needsHumanReview: string
  pharmacySpecialDispensingInstructions: string[]
  
  }
  export const HL7PharmacyDispenseV2 = mongoose.model<HL7PharmacyDispenseV2Document> ("HL7PharmacyDispenseV2", HL7PharmacyDispenseV2Schema);

