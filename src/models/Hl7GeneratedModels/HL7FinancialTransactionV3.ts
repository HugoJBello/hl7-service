
// Generated typescript code of HL7v 2.3 FT1  (Financial transaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FinancialTransactionV3Document = mongoose.Document & HL7FinancialTransactionV3I

const HL7FinancialTransactionV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDFinancialTransaction: String,
  transactionID: String,
  transactionBatchID: String,
  transactionDate: Date,
  transactionPostingDate: Date,
  transactionType: String,
  transactionCode: String,
  transactionDescription: String,
  transactionDescriptionAlternate: String,
  transactionQuantity: Number,
  transactionAmountExtended: String,
  transactionAmountUnit: String,
  departmentCode: String,
  insurancePlanID: String,
  insuranceAmount: String,
  assignedPatientLocation: String,
  feeSchedule: String,
  patientType: String,
  diagnosisCode: Array(String),
  performedByCode: String,
  orderedByCode: String,
  unitCost: String,
  fillerOrderNumber: String,
  enteredByCode: String,
  procedureCode: String,
  
  }, { timestamps: true });
  
export interface HL7FinancialTransactionV3I extends Segment{
  setIDFinancialTransaction: string
  transactionID: string
  transactionBatchID: string
  transactionDate: Date
  transactionPostingDate: Date
  transactionType: string
  transactionCode: string
  transactionDescription: string
  transactionDescriptionAlternate: string
  transactionQuantity: number
  transactionAmountExtended: string
  transactionAmountUnit: string
  departmentCode: string
  insurancePlanID: string
  insuranceAmount: string
  assignedPatientLocation: string
  feeSchedule: string
  patientType: string
  diagnosisCode: string[]
  performedByCode: string
  orderedByCode: string
  unitCost: string
  fillerOrderNumber: string
  enteredByCode: string
  procedureCode: string
  
  }
  export const HL7FinancialTransactionV3 = mongoose.model<HL7FinancialTransactionV3Document> ("HL7FinancialTransactionV3", HL7FinancialTransactionV3Schema);

