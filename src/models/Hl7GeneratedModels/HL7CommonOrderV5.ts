
// Generated typescript code of HL7v 2.5 ORC  (Common Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CommonOrderV5Document = mongoose.Document & HL7CommonOrderV5I

const HL7CommonOrderV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  orderControl: String,
  placerOrderNumber: String,
  fillerOrderNumber: String,
  placerGroupNumber: String,
  orderStatus: String,
  responseFlag: String,
  quantityTiming: Array(String),
  parentOrder: String,
  dateTimeOfTransaction: Date,
  enteredBy: Array(String),
  verifiedBy: Array(String),
  orderingProvider: Array(String),
  enterersLocation: String,
  callBackPhoneNumber: Array(String),
  orderEffectiveDateTime: Date,
  orderControlCodeReason: String,
  enteringOrganization: String,
  enteringDevice: String,
  actionBy: Array(String),
  advancedBeneficiaryNoticeCode: String,
  orderingFacilityName: Array(String),
  orderingFacilityAddress: Array(String),
  orderingFacilityPhoneNumber: Array(String),
  orderingProviderAddress: Array(String),
  orderStatusModifier: String,
  advancedBeneficiaryNoticeOverrideReason: String,
  fillersExpectedAvailabilityDateTime: Date,
  confidentialityCode: String,
  orderType: String,
  entererAuthorizationMode: String,
  
  }, { timestamps: true });
  
export interface HL7CommonOrderV5I extends Segment{
  orderControl: string
  placerOrderNumber: string
  fillerOrderNumber: string
  placerGroupNumber: string
  orderStatus: string
  responseFlag: string
  quantityTiming: string[]
  parentOrder: string
  dateTimeOfTransaction: Date
  enteredBy: string[]
  verifiedBy: string[]
  orderingProvider: string[]
  enterersLocation: string
  callBackPhoneNumber: string[]
  orderEffectiveDateTime: Date
  orderControlCodeReason: string
  enteringOrganization: string
  enteringDevice: string
  actionBy: string[]
  advancedBeneficiaryNoticeCode: string
  orderingFacilityName: string[]
  orderingFacilityAddress: string[]
  orderingFacilityPhoneNumber: string[]
  orderingProviderAddress: string[]
  orderStatusModifier: string
  advancedBeneficiaryNoticeOverrideReason: string
  fillersExpectedAvailabilityDateTime: Date
  confidentialityCode: string
  orderType: string
  entererAuthorizationMode: string
  
  }
  export const HL7CommonOrderV5 = mongoose.model<HL7CommonOrderV5Document> ("HL7CommonOrderV5", HL7CommonOrderV5Schema);

