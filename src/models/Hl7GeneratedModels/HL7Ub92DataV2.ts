
// Generated typescript code of HL7v 2.2 UB2  (Ub92 Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7Ub92DataV2Document = mongoose.Document & HL7Ub92DataV2I

const HL7Ub92DataV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdUb92: String,
  coinsuranceDays9: String,
  conditionCode2430: Array(String),
  coveredDays7: String,
  noncoveredDays8: String,
  valueAmountAndCode3941: Array(String),
  occurrenceCodeAndDate3235: Array(String),
  occurrenceSpanCodeDates36: Array(String),
  ub92Locator2State: Array(String),
  ub92Locator11State: Array(String),
  ub92Locator31National: String,
  documentControlNumber37: Array(String),
  ub92Locator49National: Array(String),
  ub92Locator56State: Array(String),
  ub92Locator57National: String,
  ub92Locator78State: Array(String),
  
  }, { timestamps: true });
  
export interface HL7Ub92DataV2I extends Segment{
  setIdUb92: string
  coinsuranceDays9: string
  conditionCode2430: string[]
  coveredDays7: string
  noncoveredDays8: string
  valueAmountAndCode3941: string[]
  occurrenceCodeAndDate3235: string[]
  occurrenceSpanCodeDates36: string[]
  ub92Locator2State: string[]
  ub92Locator11State: string[]
  ub92Locator31National: string
  documentControlNumber37: string[]
  ub92Locator49National: string[]
  ub92Locator56State: string[]
  ub92Locator57National: string
  ub92Locator78State: string[]
  
  }
  export const HL7Ub92DataV2 = mongoose.model<HL7Ub92DataV2Document> ("HL7Ub92DataV2", HL7Ub92DataV2Schema);

