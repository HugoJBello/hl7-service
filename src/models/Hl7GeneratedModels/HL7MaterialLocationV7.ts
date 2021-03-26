
// Generated typescript code of HL7v 2.7 IVT  (Material Location)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialLocationV7Document = mongoose.Document & HL7MaterialLocationV7I

const HL7MaterialLocationV7Schema = new mongoose.Schema({
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
  
export interface HL7MaterialLocationV7I extends Segment{
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
  export const HL7MaterialLocationV7 = mongoose.model<HL7MaterialLocationV7Document> ("HL7MaterialLocationV7", HL7MaterialLocationV7Schema);

