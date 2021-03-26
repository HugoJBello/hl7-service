
// Generated typescript code of HL7v 2.4 FT1  (Financial Transaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FinancialTransactionV4Document = mongoose.Document & HL7FinancialTransactionV4I

const HL7FinancialTransactionV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDFT1: String,
  transactionID: String,
  transactionBatchID: String,
  transactionDate: Date,
  transactionPostingDate: Date,
  transactionType: String,
  transactionCode: String,
  transactionDescription: String,
  transactionDescriptionAlt: String,
  transactionQuantity: Number,
  transactionAmountExtended: String,
  transactionAmountUnit: String,
  departmentCode: String,
  insurancePlanID: String,
  insuranceAmount: String,
  assignedPatientLocation: String,
  feeSchedule: String,
  patientType: String,
  diagnosisCodeFT1: Array(String),
  performedByCode: Array(String),
  orderedByCode: Array(String),
  unitCost: String,
  fillerOrderNumber: String,
  enteredByCode: Array(String),
  procedureCode: String,
  procedureCodeModifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7FinancialTransactionV4I extends Segment{
  setIDFT1: string
  transactionID: string
  transactionBatchID: string
  transactionDate: Date
  transactionPostingDate: Date
  transactionType: string
  transactionCode: string
  transactionDescription: string
  transactionDescriptionAlt: string
  transactionQuantity: number
  transactionAmountExtended: string
  transactionAmountUnit: string
  departmentCode: string
  insurancePlanID: string
  insuranceAmount: string
  assignedPatientLocation: string
  feeSchedule: string
  patientType: string
  diagnosisCodeFT1: string[]
  performedByCode: string[]
  orderedByCode: string[]
  unitCost: string
  fillerOrderNumber: string
  enteredByCode: string[]
  procedureCode: string
  procedureCodeModifier: string[]
  
  }
  export const HL7FinancialTransactionV4 = mongoose.model<HL7FinancialTransactionV4Document> ("HL7FinancialTransactionV4", HL7FinancialTransactionV4Schema);

