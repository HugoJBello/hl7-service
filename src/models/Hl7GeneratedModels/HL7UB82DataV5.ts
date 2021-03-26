
// Generated typescript code of HL7v 2.5 UB1  (UB82 Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UB82DataV5Document = mongoose.Document & HL7UB82DataV5I

const HL7UB82DataV5Schema = new mongoose.Schema({
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
  valueAmountAndCode4649: Array(String),
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
  
export interface HL7UB82DataV5I extends Segment{
  setIDUB1: string
  bloodDeductible43: number
  bloodFurnishedPintsOf40: number
  bloodReplacedPints41: number
  bloodNotReplacedPints42: number
  coInsuranceDays25: number
  conditionCode3539: string[]
  coveredDays23: number
  nonCoveredDays24: number
  valueAmountAndCode4649: string[]
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
  export const HL7UB82DataV5 = mongoose.model<HL7UB82DataV5Document> ("HL7UB82DataV5", HL7UB82DataV5Schema);

