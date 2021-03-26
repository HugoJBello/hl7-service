
// Generated typescript code of HL7v 2.6 IVT  (Material Location)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialLocationV6Document = mongoose.Document & HL7MaterialLocationV6I

const HL7MaterialLocationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdIVT: String,
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
  latexFreeSubstituteItemIdentifier: String,
  recommendedReorderTheory: String,
  recommendedSafetyStockDays: Number,
  recommendedMaximumDaysInventory: Number,
  recommendedOrderPoint: Number,
  recommendedOrderAmount: Number,
  operatingRoomParLevelIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7MaterialLocationV6I extends Segment{
  setIdIVT: string
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
  latexFreeSubstituteItemIdentifier: string
  recommendedReorderTheory: string
  recommendedSafetyStockDays: number
  recommendedMaximumDaysInventory: number
  recommendedOrderPoint: number
  recommendedOrderAmount: number
  operatingRoomParLevelIndicator: string
  
  }
  export const HL7MaterialLocationV6 = mongoose.model<HL7MaterialLocationV6Document> ("HL7MaterialLocationV6", HL7MaterialLocationV6Schema);

