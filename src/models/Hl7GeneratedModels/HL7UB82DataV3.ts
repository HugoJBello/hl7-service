
// Generated typescript code of HL7v 2.3 UB1  (UB82  data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UB82DataV3Document = mongoose.Document & HL7UB82DataV3I

const HL7UB82DataV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDUB1: String,
  bloodDeductible: Number,
  bloodFurnishedPintsOf: Number,
  bloodReplacedPints: Number,
  bloodNotReplacedPints: Number,
  coInsuranceDays: Number,
  conditionCode: Array(String),
  coveredDays: Number,
  nonCoveredDays: Number,
  valueAmountCode: Array(String),
  numberOfGraceDays: Number,
  specProgramIndicator: String,
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
  
export interface HL7UB82DataV3I extends Segment{
  setIDUB1: string
  bloodDeductible: number
  bloodFurnishedPintsOf: number
  bloodReplacedPints: number
  bloodNotReplacedPints: number
  coInsuranceDays: number
  conditionCode: string[]
  coveredDays: number
  nonCoveredDays: number
  valueAmountCode: string[]
  numberOfGraceDays: number
  specProgramIndicator: string
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
  export const HL7UB82DataV3 = mongoose.model<HL7UB82DataV3Document> ("HL7UB82DataV3", HL7UB82DataV3Schema);

