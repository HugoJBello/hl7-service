
// Generated typescript code of HL7v 2.2 UB1  (Ub82 Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7Ub82DataV2Document = mongoose.Document & HL7Ub82DataV2I

const HL7Ub82DataV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdUb82: String,
  bloodDeductible43: Number,
  bloodFurnishedPintsOf40: Number,
  bloodReplacedPints41: Number,
  bloodNotReplacedPints42: Number,
  coinsuranceDays25: Number,
  conditionCode3539: Array(String),
  coveredDays23: Number,
  noncoveredDays24: Number,
  valueAmountAndCode4649: Array(String),
  numberOfGraceDays90: Number,
  specialProgramIndicator44: String,
  psroUrApprovalIndicator87: String,
  psroUrApprovedStayFrom88: String,
  psroUrApprovedStayTo89: String,
  occurrence2832: Array(String),
  occurrenceSpan33: String,
  occurrenceSpanStartDate33: String,
  occurrenceSpanEndDate33: String,
  ub82Locator2: String,
  ub82Locator9: String,
  ub82Locator27: String,
  ub82Locator45: String,
  
  }, { timestamps: true });
  
export interface HL7Ub82DataV2I extends Segment{
  setIdUb82: string
  bloodDeductible43: number
  bloodFurnishedPintsOf40: number
  bloodReplacedPints41: number
  bloodNotReplacedPints42: number
  coinsuranceDays25: number
  conditionCode3539: string[]
  coveredDays23: number
  noncoveredDays24: number
  valueAmountAndCode4649: string[]
  numberOfGraceDays90: number
  specialProgramIndicator44: string
  psroUrApprovalIndicator87: string
  psroUrApprovedStayFrom88: string
  psroUrApprovedStayTo89: string
  occurrence2832: string[]
  occurrenceSpan33: string
  occurrenceSpanStartDate33: string
  occurrenceSpanEndDate33: string
  ub82Locator2: string
  ub82Locator9: string
  ub82Locator27: string
  ub82Locator45: string
  
  }
  export const HL7Ub82DataV2 = mongoose.model<HL7Ub82DataV2Document> ("HL7Ub82DataV2", HL7Ub82DataV2Schema);

