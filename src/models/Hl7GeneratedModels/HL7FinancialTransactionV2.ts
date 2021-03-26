
// Generated typescript code of HL7v 2.2 FT1  (Financial Transaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FinancialTransactionV2Document = mongoose.Document & HL7FinancialTransactionV2I

const HL7FinancialTransactionV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdFinancialTransaction: String,
  transactionId: String,
  transactionBatchId: String,
  transactionDate: String,
  transactionPostingDate: String,
  transactionType: String,
  transactionCode: String,
  transactionDescription: String,
  transactionDescriptionAlternate: String,
  transactionQuantity: Number,
  transactionAmountExtended: Number,
  transactionAmountUnit: Number,
  departmentCode: String,
  insurancePlanId: String,
  insuranceAmount: Number,
  assignedPatientLocation: String,
  feeSchedule: String,
  patientType: String,
  diagnosisCode: Array(String),
  performedByCode: String,
  orderedByCode: String,
  unitCost: Number,
  fillerOrderNumber: String,
  
  }, { timestamps: true });
  
export interface HL7FinancialTransactionV2I extends Segment{
  setIdFinancialTransaction: string
  transactionId: string
  transactionBatchId: string
  transactionDate: string
  transactionPostingDate: string
  transactionType: string
  transactionCode: string
  transactionDescription: string
  transactionDescriptionAlternate: string
  transactionQuantity: number
  transactionAmountExtended: number
  transactionAmountUnit: number
  departmentCode: string
  insurancePlanId: string
  insuranceAmount: number
  assignedPatientLocation: string
  feeSchedule: string
  patientType: string
  diagnosisCode: string[]
  performedByCode: string
  orderedByCode: string
  unitCost: number
  fillerOrderNumber: string
  
  }
  export const HL7FinancialTransactionV2 = mongoose.model<HL7FinancialTransactionV2Document> ("HL7FinancialTransactionV2", HL7FinancialTransactionV2Schema);

