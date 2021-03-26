
// Generated typescript code of HL7v 2.6 ORC  (Common Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CommonOrderV6Document = mongoose.Document & HL7CommonOrderV6I

const HL7CommonOrderV6Schema = new mongoose.Schema({
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
  parent: String,
  dateTimeOfTransaction: String,
  enteredBy: Array(String),
  verifiedBy: Array(String),
  orderingProvider: Array(String),
  enterersLocation: String,
  callBackPhoneNumber: Array(String),
  orderEffectiveDateTime: String,
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
  fillersExpectedAvailabilityDateTime: String,
  confidentialityCode: String,
  orderType: String,
  entererAuthorizationMode: String,
  parentUniversalServiceIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7CommonOrderV6I extends Segment{
  orderControl: string
  placerOrderNumber: string
  fillerOrderNumber: string
  placerGroupNumber: string
  orderStatus: string
  responseFlag: string
  quantityTiming: string[]
  parent: string
  dateTimeOfTransaction: string
  enteredBy: string[]
  verifiedBy: string[]
  orderingProvider: string[]
  enterersLocation: string
  callBackPhoneNumber: string[]
  orderEffectiveDateTime: string
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
  fillersExpectedAvailabilityDateTime: string
  confidentialityCode: string
  orderType: string
  entererAuthorizationMode: string
  parentUniversalServiceIdentifier: string
  
  }
  export const HL7CommonOrderV6 = mongoose.model<HL7CommonOrderV6Document> ("HL7CommonOrderV6", HL7CommonOrderV6Schema);

