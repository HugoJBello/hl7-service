
// Generated typescript code of HL7v 2.5 FT1  (Financial Transaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FinancialTransactionV5Document = mongoose.Document & HL7FinancialTransactionV5I

const HL7FinancialTransactionV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDFT1: String,
  transactionID: String,
  transactionBatchID: String,
  transactionDate: String,
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
  advancedBeneficiaryNoticeCode: String,
  medicallyNecessaryDuplicateProcedureReason: String,
  nDCCode: String,
  paymentReferenceID: String,
  transactionReferenceKey: Array(String),
  
  }, { timestamps: true });
  
export interface HL7FinancialTransactionV5I extends Segment{
  setIDFT1: string
  transactionID: string
  transactionBatchID: string
  transactionDate: string
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
  advancedBeneficiaryNoticeCode: string
  medicallyNecessaryDuplicateProcedureReason: string
  nDCCode: string
  paymentReferenceID: string
  transactionReferenceKey: string[]
  
  }
  export const HL7FinancialTransactionV5 = mongoose.model<HL7FinancialTransactionV5Document> ("HL7FinancialTransactionV5", HL7FinancialTransactionV5Schema);

