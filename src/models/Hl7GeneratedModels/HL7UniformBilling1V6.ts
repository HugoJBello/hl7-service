
// Generated typescript code of HL7v 2.6 UB1  (Uniform Billing 1)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UniformBilling1V6Document = mongoose.Document & HL7UniformBilling1V6I

const HL7UniformBilling1V6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDUB1: String,
  bloodDeductible: String,
  bloodFurnishedPints: Number,
  bloodReplacedPints: Number,
  bloodNotReplacedPints: Number,
  coInsuranceDays: Number,
  conditionCode: Array(String),
  coveredDays: Number,
  nonCoveredDays: Number,
  valueAmountCode: Array(String),
  numberOfGraceDays: Number,
  specialProgramIndicator: String,
  pSROURApprovalIndicator: String,
  pSROURApprovedStayFm: String,
  pSROURApprovedStayTo: String,
  occurrence: Array(String),
  occurrenceSpan: String,
  occurSpanStartDate: String,
  occurSpanEndDate: String,
  uB82Locator2: String,
  uB82Locator9: String,
  uB82Locator27: String,
  uB82Locator45: String,
  
  }, { timestamps: true });
  
export interface HL7UniformBilling1V6I extends Segment{
  setIDUB1: string
  bloodDeductible: string
  bloodFurnishedPints: number
  bloodReplacedPints: number
  bloodNotReplacedPints: number
  coInsuranceDays: number
  conditionCode: string[]
  coveredDays: number
  nonCoveredDays: number
  valueAmountCode: string[]
  numberOfGraceDays: number
  specialProgramIndicator: string
  pSROURApprovalIndicator: string
  pSROURApprovedStayFm: string
  pSROURApprovedStayTo: string
  occurrence: string[]
  occurrenceSpan: string
  occurSpanStartDate: string
  occurSpanEndDate: string
  uB82Locator2: string
  uB82Locator9: string
  uB82Locator27: string
  uB82Locator45: string
  
  }
  export const HL7UniformBilling1V6 = mongoose.model<HL7UniformBilling1V6Document> ("HL7UniformBilling1V6", HL7UniformBilling1V6Schema);

