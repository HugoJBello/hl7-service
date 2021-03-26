
// Generated typescript code of HL7v 2.4 OM7  (Additional Basic Attributes)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AdditionalBasicAttributesV4Document = mongoose.Document & HL7AdditionalBasicAttributesV4I

const HL7AdditionalBasicAttributesV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  universalServiceIdentifier: String,
  categoryIdentifier: Array(String),
  categoryDescription: String,
  categorySynonym: Array(String),
  effectiveTestServiceStartDateTime: Date,
  effectiveTestServiceEndDateTime: Date,
  testServiceDefaultDurationQuantity: Number,
  testServiceDefaultDurationUnits: String,
  testServiceDefaultFrequency: String,
  consentIndicator: String,
  consentIdentifier: String,
  consentEffectiveStartDateTime: Date,
  consentEffectiveEndDateTime: Date,
  consentIntervalQuantity: Number,
  consentIntervalUnits: String,
  consentWaitingPeriodQuantity: Number,
  consentWaitingPeriodUnits: String,
  effectiveDateTimeOfChange: Date,
  enteredBy: String,
  orderableatLocation: Array(String),
  formularyStatus: String,
  specialOrderIndicator: String,
  primaryKeyValueCDM: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AdditionalBasicAttributesV4I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  universalServiceIdentifier: string
  categoryIdentifier: string[]
  categoryDescription: string
  categorySynonym: string[]
  effectiveTestServiceStartDateTime: Date
  effectiveTestServiceEndDateTime: Date
  testServiceDefaultDurationQuantity: number
  testServiceDefaultDurationUnits: string
  testServiceDefaultFrequency: string
  consentIndicator: string
  consentIdentifier: string
  consentEffectiveStartDateTime: Date
  consentEffectiveEndDateTime: Date
  consentIntervalQuantity: number
  consentIntervalUnits: string
  consentWaitingPeriodQuantity: number
  consentWaitingPeriodUnits: string
  effectiveDateTimeOfChange: Date
  enteredBy: string
  orderableatLocation: string[]
  formularyStatus: string
  specialOrderIndicator: string
  primaryKeyValueCDM: string[]
  
  }
  export const HL7AdditionalBasicAttributesV4 = mongoose.model<HL7AdditionalBasicAttributesV4Document> ("HL7AdditionalBasicAttributesV4", HL7AdditionalBasicAttributesV4Schema);

