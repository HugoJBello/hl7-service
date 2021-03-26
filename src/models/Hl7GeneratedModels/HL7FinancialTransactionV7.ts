
// Generated typescript code of HL7v 2.7 FT1  (Financial Transaction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FinancialTransactionV7Document = mongoose.Document & HL7FinancialTransactionV7I

const HL7FinancialTransactionV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdFt1: String,
  transactionId: String,
  transactionBatchId: String,
  transactionDate: String,
  transactionPostingDate: String,
  transactionType: String,
  transactionCode: String,
  transactionDescription: String,
  transactionDescriptionAlt: String,
  transactionQuantity: Number,
  transactionAmountExtended: String,
  transactionAmountUnit: String,
  departmentCode: String,
  healthPlanId: String,
  insuranceAmount: String,
  assignedPatientLocation: String,
  feeSchedule: String,
  patientType: String,
  diagnosisCodeFt1: Array(String),
  performedByCode: Array(String),
  orderedByCode: Array(String),
  unitCost: String,
  fillerOrderNumber: String,
  enteredByCode: Array(String),
  procedureCode: String,
  procedureCodeModifier: Array(String),
  advancedBeneficiaryNoticeCode: String,
  medicallyNecessaryDuplicateProcedureReason: String,
  ndcCode: String,
  paymentReferenceId: String,
  transactionReferenceKey: Array(String),
  performingFacility: Array(String),
  orderingFacility: String,
  itemNumber: String,
  modelNumber: String,
  specialProcessingCode: Array(String),
  clinicCode: String,
  referralNumber: String,
  authorizationNumber: String,
  serviceProviderTaxonomyCode: String,
  revenueCode: String,
  prescriptionNumber: String,
  ndcQtyAndUom: String,
  
  }, { timestamps: true });
  
export interface HL7FinancialTransactionV7I extends Segment{
  setIdFt1: string
  transactionId: string
  transactionBatchId: string
  transactionDate: string
  transactionPostingDate: string
  transactionType: string
  transactionCode: string
  transactionDescription: string
  transactionDescriptionAlt: string
  transactionQuantity: number
  transactionAmountExtended: string
  transactionAmountUnit: string
  departmentCode: string
  healthPlanId: string
  insuranceAmount: string
  assignedPatientLocation: string
  feeSchedule: string
  patientType: string
  diagnosisCodeFt1: string[]
  performedByCode: string[]
  orderedByCode: string[]
  unitCost: string
  fillerOrderNumber: string
  enteredByCode: string[]
  procedureCode: string
  procedureCodeModifier: string[]
  advancedBeneficiaryNoticeCode: string
  medicallyNecessaryDuplicateProcedureReason: string
  ndcCode: string
  paymentReferenceId: string
  transactionReferenceKey: string[]
  performingFacility: string[]
  orderingFacility: string
  itemNumber: string
  modelNumber: string
  specialProcessingCode: string[]
  clinicCode: string
  referralNumber: string
  authorizationNumber: string
  serviceProviderTaxonomyCode: string
  revenueCode: string
  prescriptionNumber: string
  ndcQtyAndUom: string
  
  }
  export const HL7FinancialTransactionV7 = mongoose.model<HL7FinancialTransactionV7Document> ("HL7FinancialTransactionV7", HL7FinancialTransactionV7Schema);

