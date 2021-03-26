
// Generated typescript code of HL7v 2.8 IVT  (Material Location)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialLocationV8Document = mongoose.Document & HL7MaterialLocationV8I

const HL7MaterialLocationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdIvt: String,
  inventoryLocationIdentifier: String,
  inventoryLocationName: String,
  sourceLocationIdentifier: String,
  sourceLocationName: String,
  itemStatus: String,
  binLocationIdentifier: Array(String),
  orderPackaging: String,
  issuePackaging: String,
  defaultInventoryAssetAccount: String,
  patientChargeableIndicator: String,
  transactionCode: String,
  transactionAmountUnit: String,
  itemImportanceCode: String,
  stockedItemIndicator: String,
  consignmentItemIndicator: String,
  reusableItemIndicator: String,
  reusableCost: String,
  substituteItemIdentifier: Array(String),
  latexfreeSubstituteItemIdentifier: String,
  recommendedReorderTheory: String,
  recommendedSafetyStockDays: Number,
  recommendedMaximumDaysInventory: Number,
  recommendedOrderPoint: Number,
  recommendedOrderAmount: Number,
  operatingRoomParLevelIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7MaterialLocationV8I extends Segment{
  setIdIvt: string
  inventoryLocationIdentifier: string
  inventoryLocationName: string
  sourceLocationIdentifier: string
  sourceLocationName: string
  itemStatus: string
  binLocationIdentifier: string[]
  orderPackaging: string
  issuePackaging: string
  defaultInventoryAssetAccount: string
  patientChargeableIndicator: string
  transactionCode: string
  transactionAmountUnit: string
  itemImportanceCode: string
  stockedItemIndicator: string
  consignmentItemIndicator: string
  reusableItemIndicator: string
  reusableCost: string
  substituteItemIdentifier: string[]
  latexfreeSubstituteItemIdentifier: string
  recommendedReorderTheory: string
  recommendedSafetyStockDays: number
  recommendedMaximumDaysInventory: number
  recommendedOrderPoint: number
  recommendedOrderAmount: number
  operatingRoomParLevelIndicator: string
  
  }
  export const HL7MaterialLocationV8 = mongoose.model<HL7MaterialLocationV8Document> ("HL7MaterialLocationV8", HL7MaterialLocationV8Schema);

