
// Generated typescript code of HL7v 2.4 UB2  (UB92 Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UB92DataV4Document = mongoose.Document & HL7UB92DataV4I

const HL7UB92DataV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDUB2: String,
  coInsuranceDays9: String,
  conditionCode2430: Array(String),
  coveredDays7: String,
  nonCoveredDays8: String,
  valueAmountCode3941: Array(String),
  occurrenceCodeDate3235: Array(String),
  occurrenceSpanCodeDates36: Array(String),
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
  
export interface HL7UB92DataV4I extends Segment{
  setIDUB2: string
  coInsuranceDays9: string
  conditionCode2430: string[]
  coveredDays7: string
  nonCoveredDays8: string
  valueAmountCode3941: string[]
  occurrenceCodeDate3235: string[]
  occurrenceSpanCodeDates36: string[]
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
  export const HL7UB92DataV4 = mongoose.model<HL7UB92DataV4Document> ("HL7UB92DataV4", HL7UB92DataV4Schema);

