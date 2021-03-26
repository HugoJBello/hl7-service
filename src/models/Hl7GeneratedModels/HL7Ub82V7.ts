
// Generated typescript code of HL7v 2.7 UB1  (Ub82)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7Ub82V7Document = mongoose.Document & HL7Ub82V7I

const HL7Ub82V7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdUb1: String,
  bloodDeductible: String,
  bloodFurnishedpints: String,
  bloodReplacedpints: String,
  bloodNotReplacedpints: String,
  coinsuranceDays: String,
  conditionCode: Array(String),
  coveredDays: String,
  nonCoveredDays: String,
  valueAmountCode: Array(String),
  numberOfGraceDays: String,
  specialProgramIndicator: String,
  psroUrApprovalIndicator: String,
  psroUrApprovedStayfm: String,
  psroUrApprovedStayto: String,
  occurrence: Array(String),
  occurrenceSpan: String,
  occurSpanStartDate: String,
  occurSpanEndDate: String,
  ub82Locator2: String,
  ub82Locator9: String,
  ub82Locator27: String,
  ub82Locator45: String,
  
  }, { timestamps: true });
  
export interface HL7Ub82V7I extends Segment{
  setIdUb1: string
  bloodDeductible: string
  bloodFurnishedpints: string
  bloodReplacedpints: string
  bloodNotReplacedpints: string
  coinsuranceDays: string
  conditionCode: string[]
  coveredDays: string
  nonCoveredDays: string
  valueAmountCode: string[]
  numberOfGraceDays: string
  specialProgramIndicator: string
  psroUrApprovalIndicator: string
  psroUrApprovedStayfm: string
  psroUrApprovedStayto: string
  occurrence: string[]
  occurrenceSpan: string
  occurSpanStartDate: string
  occurSpanEndDate: string
  ub82Locator2: string
  ub82Locator9: string
  ub82Locator27: string
  ub82Locator45: string
  
  }
  export const HL7Ub82V7 = mongoose.model<HL7Ub82V7Document> ("HL7Ub82V7", HL7Ub82V7Schema);

