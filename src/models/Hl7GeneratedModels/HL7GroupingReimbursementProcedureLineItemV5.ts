
// Generated typescript code of HL7v 2.5 GP2  (Grouping/Reimbursement - Procedure Line Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingReimbursementProcedureLineItemV5Document = mongoose.Document & HL7GroupingReimbursementProcedureLineItemV5I

const HL7GroupingReimbursementProcedureLineItemV5Schema = new mongoose.Schema({
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
  expectedCMSPaymentAmount: String,
  reimbursementTypeCode: String,
  coPayAmount: String,
  payRatePerServiceUnit: Number,
  
  }, { timestamps: true });
  
export interface HL7GroupingReimbursementProcedureLineItemV5I extends Segment{
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
  expectedCMSPaymentAmount: string
  reimbursementTypeCode: string
  coPayAmount: string
  payRatePerServiceUnit: number
  
  }
  export const HL7GroupingReimbursementProcedureLineItemV5 = mongoose.model<HL7GroupingReimbursementProcedureLineItemV5Document> ("HL7GroupingReimbursementProcedureLineItemV5", HL7GroupingReimbursementProcedureLineItemV5Schema);

