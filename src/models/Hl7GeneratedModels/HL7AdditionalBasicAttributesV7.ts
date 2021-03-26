
// Generated typescript code of HL7v 2.7 OM7  (Additional Basic Attributes)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AdditionalBasicAttributesV7Document = mongoose.Document & HL7AdditionalBasicAttributesV7I

const HL7AdditionalBasicAttributesV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  universalServiceIdentifier: String,
  categoryIdentifier: Array(String),
  categoryDescription: String,
  categorySynonym: Array(String),
  effectiveTestServiceStartDateTime: String,
  effectiveTestServiceEndDateTime: String,
  testServiceDefaultDurationQuantity: Number,
  testServiceDefaultDurationUnits: String,
  testServiceDefaultFrequency: String,
  consentIndicator: String,
  consentIdentifier: String,
  consentEffectiveStartDateTime: String,
  consentEffectiveEndDateTime: String,
  consentIntervalQuantity: Number,
  consentIntervalUnits: String,
  consentWaitingPeriodQuantity: Number,
  consentWaitingPeriodUnits: String,
  effectiveDateTimeOfChange: String,
  enteredBy: String,
  orderableatLocation: Array(String),
  formularyStatus: String,
  specialOrderIndicator: String,
  primaryKeyValueCdm: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AdditionalBasicAttributesV7I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  universalServiceIdentifier: string
  categoryIdentifier: string[]
  categoryDescription: string
  categorySynonym: string[]
  effectiveTestServiceStartDateTime: string
  effectiveTestServiceEndDateTime: string
  testServiceDefaultDurationQuantity: number
  testServiceDefaultDurationUnits: string
  testServiceDefaultFrequency: string
  consentIndicator: string
  consentIdentifier: string
  consentEffectiveStartDateTime: string
  consentEffectiveEndDateTime: string
  consentIntervalQuantity: number
  consentIntervalUnits: string
  consentWaitingPeriodQuantity: number
  consentWaitingPeriodUnits: string
  effectiveDateTimeOfChange: string
  enteredBy: string
  orderableatLocation: string[]
  formularyStatus: string
  specialOrderIndicator: string
  primaryKeyValueCdm: string[]
  
  }
  export const HL7AdditionalBasicAttributesV7 = mongoose.model<HL7AdditionalBasicAttributesV7Document> ("HL7AdditionalBasicAttributesV7", HL7AdditionalBasicAttributesV7Schema);

