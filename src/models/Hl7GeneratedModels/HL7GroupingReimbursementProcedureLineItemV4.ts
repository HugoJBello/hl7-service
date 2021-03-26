
// Generated typescript code of HL7v 2.4 GP2  (Grouping/Reimbursement - Procedure Line Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingReimbursementProcedureLineItemV4Document = mongoose.Document & HL7GroupingReimbursementProcedureLineItemV4I

const HL7GroupingReimbursementProcedureLineItemV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  revenueCode: String,
  numberOfServiceUnits: Number,
  charge: String,
  reimbursementActionCode: String,
  denialOrRejectionCode: String,
  oCEEditCode: Array(String),
  ambulatoryPaymentClassificationCode: String,
  modifierEditCode: Array(String),
  paymentAdjustmentCode: String,
  packagingStatusCode: String,
  expectedHCFAPaymentAmount: String,
  reimbursementTypeCode: String,
  coPayAmount: String,
  payRatePerUnit: Number,
  
  }, { timestamps: true });
  
export interface HL7GroupingReimbursementProcedureLineItemV4I extends Segment{
  revenueCode: string
  numberOfServiceUnits: number
  charge: string
  reimbursementActionCode: string
  denialOrRejectionCode: string
  oCEEditCode: string[]
  ambulatoryPaymentClassificationCode: string
  modifierEditCode: string[]
  paymentAdjustmentCode: string
  packagingStatusCode: string
  expectedHCFAPaymentAmount: string
  reimbursementTypeCode: string
  coPayAmount: string
  payRatePerUnit: number
  
  }
  export const HL7GroupingReimbursementProcedureLineItemV4 = mongoose.model<HL7GroupingReimbursementProcedureLineItemV4Document> ("HL7GroupingReimbursementProcedureLineItemV4", HL7GroupingReimbursementProcedureLineItemV4Schema);

