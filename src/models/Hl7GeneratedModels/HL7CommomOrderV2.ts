
// Generated typescript code of HL7v 2.2 ORC  (Commom Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CommomOrderV2Document = mongoose.Document & HL7CommomOrderV2I

const HL7CommomOrderV2Schema = new mongoose.Schema({
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
  
export interface HL7CommomOrderV2I extends Segment{
  orderControl: string
  placerOrderNumber: string
  fillerOrderNumber: string
  placerGroupNumber: string
  orderStatus: string
  responseFlag: string
  quantityTiming: string[]
  parent: string
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
  export const HL7CommomOrderV2 = mongoose.model<HL7CommomOrderV2Document> ("HL7CommomOrderV2", HL7CommomOrderV2Schema);

