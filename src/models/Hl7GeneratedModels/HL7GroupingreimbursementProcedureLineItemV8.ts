
// Generated typescript code of HL7v 2.8 GP2  (Grouping/reimbursement - Procedure Line Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingreimbursementProcedureLineItemV8Document = mongoose.Document & HL7GroupingreimbursementProcedureLineItemV8I

const HL7GroupingreimbursementProcedureLineItemV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  revenueCode: String,
  numberOfServiceUnits: Number,
  charge: String,
  reimbursementActionCode: String,
  denialOrRejectionCode: String,
  oceEditCode: Array(String),
  ambulatoryPaymentClassificationCode: String,
  modifierEditCode: Array(String),
  paymentAdjustmentCode: String,
  packagingStatusCode: String,
  expectedCmsPaymentAmount: String,
  reimbursementTypeCode: String,
  copayAmount: String,
  payRatePerServiceUnit: Number,
  
  }, { timestamps: true });
  
export interface HL7GroupingreimbursementProcedureLineItemV8I extends Segment{
  revenueCode: string
  numberOfServiceUnits: number
  charge: string
  reimbursementActionCode: string
  denialOrRejectionCode: string
  oceEditCode: string[]
  ambulatoryPaymentClassificationCode: string
  modifierEditCode: string[]
  paymentAdjustmentCode: string
  packagingStatusCode: string
  expectedCmsPaymentAmount: string
  reimbursementTypeCode: string
  copayAmount: string
  payRatePerServiceUnit: number
  
  }
  export const HL7GroupingreimbursementProcedureLineItemV8 = mongoose.model<HL7GroupingreimbursementProcedureLineItemV8Document> ("HL7GroupingreimbursementProcedureLineItemV8", HL7GroupingreimbursementProcedureLineItemV8Schema);

