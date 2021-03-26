
// Generated typescript code of HL7v 2.3 ORC  (Common order segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CommonOrderSegmentV3Document = mongoose.Document & HL7CommonOrderSegmentV3I

const HL7CommonOrderSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  orderControl: String,
  placerOrderNumber: String,
  fillerOrderNumber: String,
  placerGroupNumber: String,
  orderStatus: String,
  responseFlag: String,
  quantityTiming: String,
  parentOrder: String,
  dateTimeOfTransaction: Date,
  enteredBy: String,
  verifiedBy: String,
  orderingProvider: String,
  enterersLocation: String,
  callBackPhoneNumber: Array(String),
  orderEffectiveDateTime: Date,
  orderControlCodeReason: String,
  enteringOrganization: String,
  enteringDevice: String,
  actionBy: String,
  
  }, { timestamps: true });
  
export interface HL7CommonOrderSegmentV3I extends Segment{
  orderControl: string
  placerOrderNumber: string
  fillerOrderNumber: string
  placerGroupNumber: string
  orderStatus: string
  responseFlag: string
  quantityTiming: string
  parentOrder: string
  dateTimeOfTransaction: Date
  enteredBy: string
  verifiedBy: string
  orderingProvider: string
  enterersLocation: string
  callBackPhoneNumber: string[]
  orderEffectiveDateTime: Date
  orderControlCodeReason: string
  enteringOrganization: string
  enteringDevice: string
  actionBy: string
  
  }
  export const HL7CommonOrderSegmentV3 = mongoose.model<HL7CommonOrderSegmentV3Document> ("HL7CommonOrderSegmentV3", HL7CommonOrderSegmentV3Schema);

