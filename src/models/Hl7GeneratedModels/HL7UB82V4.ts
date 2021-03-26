
// Generated typescript code of HL7v 2.4 UB1  (UB82)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UB82V4Document = mongoose.Document & HL7UB82V4I

const HL7UB82V4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDUB1: String,
  bloodDeductible43: Number,
  bloodFurnishedPintsOf40: Number,
  bloodReplacedPints41: Number,
  bloodNotReplacedPints42: Number,
  coInsuranceDays25: Number,
  conditionCode3539: Array(String),
  coveredDays23: Number,
  nonCoveredDays24: Number,
  valueAmountCode4649: Array(String),
  numberOfGraceDays90: Number,
  specialProgramIndicator44: String,
  pSROURApprovalIndicator87: String,
  pSROURApprovedStayFm88: String,
  pSROURApprovedStayTo89: String,
  occurrence2832: Array(String),
  occurrenceSpan33: String,
  occurSpanStartDate33: String,
  occurSpanEndDate33: String,
  uB82Locator2: String,
  uB82Locator9: String,
  uB82Locator27: String,
  uB82Locator45: String,
  
  }, { timestamps: true });
  
export interface HL7UB82V4I extends Segment{
  setIDUB1: string
  bloodDeductible43: number
  bloodFurnishedPintsOf40: number
  bloodReplacedPints41: number
  bloodNotReplacedPints42: number
  coInsuranceDays25: number
  conditionCode3539: string[]
  coveredDays23: number
  nonCoveredDays24: number
  valueAmountCode4649: string[]
  numberOfGraceDays90: number
  specialProgramIndicator44: string
  pSROURApprovalIndicator87: string
  pSROURApprovedStayFm88: string
  pSROURApprovedStayTo89: string
  occurrence2832: string[]
  occurrenceSpan33: string
  occurSpanStartDate33: string
  occurSpanEndDate33: string
  uB82Locator2: string
  uB82Locator9: string
  uB82Locator27: string
  uB82Locator45: string
  
  }
  export const HL7UB82V4 = mongoose.model<HL7UB82V4Document> ("HL7UB82V4", HL7UB82V4Schema);

