
// Generated typescript code of HL7v 2.8 UB2  (Uniform Billing Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7UniformBillingDataV8Document = mongoose.Document & HL7UniformBillingDataV8I

const HL7UniformBillingDataV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdUb2: String,
  coinsuranceDays9: String,
  conditionCode2430: Array(String),
  coveredDays7: String,
  noncoveredDays8: String,
  valueAmountCode: Array(String),
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
  
export interface HL7UniformBillingDataV8I extends Segment{
  setIdUb2: string
  coinsuranceDays9: string
  conditionCode2430: string[]
  coveredDays7: string
  noncoveredDays8: string
  valueAmountCode: string[]
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
  export const HL7UniformBillingDataV8 = mongoose.model<HL7UniformBillingDataV8Document> ("HL7UniformBillingDataV8", HL7UniformBillingDataV8Schema);

