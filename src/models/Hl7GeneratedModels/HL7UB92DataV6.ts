
// Generated typescript code of HL7v 2.6 UB2  (UB92 Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UB92DataV6Document = mongoose.Document & HL7UB92DataV6I

const HL7UB92DataV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDUB2: String,
  coInsuranceDays: String,
  conditionCode: Array(String),
  coveredDays: String,
  nonCoveredDays: String,
  valueAmountAndCode: Array(String),
  occurrenceCodeAndDate: Array(String),
  occurrenceSpanCodeDates: Array(String),
  uB92Locator2State: Array(String),
  uB92Locator11State: Array(String),
  uB92Locator31National: String,
  documentControlNumber: Array(String),
  uB92Locator49National: Array(String),
  uB92Locator56State: Array(String),
  uB92Locator57National: String,
  uB92Locator78State: Array(String),
  specialVisitCount: Number,
  
  }, { timestamps: true });
  
export interface HL7UB92DataV6I extends Segment{
  setIDUB2: string
  coInsuranceDays: string
  conditionCode: string[]
  coveredDays: string
  nonCoveredDays: string
  valueAmountAndCode: string[]
  occurrenceCodeAndDate: string[]
  occurrenceSpanCodeDates: string[]
  uB92Locator2State: string[]
  uB92Locator11State: string[]
  uB92Locator31National: string
  documentControlNumber: string[]
  uB92Locator49National: string[]
  uB92Locator56State: string[]
  uB92Locator57National: string
  uB92Locator78State: string[]
  specialVisitCount: number
  
  }
  export const HL7UB92DataV6 = mongoose.model<HL7UB92DataV6Document> ("HL7UB92DataV6", HL7UB92DataV6Schema);

