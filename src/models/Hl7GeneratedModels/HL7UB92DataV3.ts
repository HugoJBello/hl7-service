
// Generated typescript code of HL7v 2.3 UB2  (UB92 data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UB92DataV3Document = mongoose.Document & HL7UB92DataV3I

const HL7UB92DataV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDUB2: String,
  coInsuranceDays: String,
  conditionCode: Array(String),
  coveredDays: String,
  nonCoveredDays: String,
  valueAmountCode: Array(String),
  occurrenceCodeDate: Array(String),
  occurrenceSpanCodeDates: Array(String),
  uB92Locator2: Array(String),
  uB92Locator11: Array(String),
  uB92Locator31: String,
  documentControlNumber: Array(String),
  uB92Locator49: Array(String),
  uB92Locator56: Array(String),
  uB92Locator57: String,
  uB92Locator78: Array(String),
  specialVisitCount: Number,
  
  }, { timestamps: true });
  
export interface HL7UB92DataV3I extends Segment{
  setIDUB2: string
  coInsuranceDays: string
  conditionCode: string[]
  coveredDays: string
  nonCoveredDays: string
  valueAmountCode: string[]
  occurrenceCodeDate: string[]
  occurrenceSpanCodeDates: string[]
  uB92Locator2: string[]
  uB92Locator11: string[]
  uB92Locator31: string
  documentControlNumber: string[]
  uB92Locator49: string[]
  uB92Locator56: string[]
  uB92Locator57: string
  uB92Locator78: string[]
  specialVisitCount: number
  
  }
  export const HL7UB92DataV3 = mongoose.model<HL7UB92DataV3Document> ("HL7UB92DataV3", HL7UB92DataV3Schema);

