
// Generated typescript code of HL7v 2.6 INV  (Inventory Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InventoryDetailV6Document = mongoose.Document & HL7InventoryDetailV6I

const HL7InventoryDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  substanceIdentifier: String,
  substanceStatus: Array(String),
  substanceType: String,
  inventoryContainerIdentifier: String,
  containerCarrierIdentifier: String,
  positionOnCarrier: String,
  initialQuantity: Number,
  currentQuantity: Number,
  availableQuantity: Number,
  consumptionQuantity: Number,
  quantityUnits: String,
  expirationDateTime: String,
  firstUsedDateTime: String,
  onBoardStabilityDuration: String,
  testFluidIdentifier: Array(String),
  manufacturerLotNumber: String,
  manufacturerIdentifier: String,
  supplierIdentifier: String,
  onBoardStabilityTime: String,
  targetValue: String,
  
  }, { timestamps: true });
  
export interface HL7InventoryDetailV6I extends Segment{
  substanceIdentifier: string
  substanceStatus: string[]
  substanceType: string
  inventoryContainerIdentifier: string
  containerCarrierIdentifier: string
  positionOnCarrier: string
  initialQuantity: number
  currentQuantity: number
  availableQuantity: number
  consumptionQuantity: number
  quantityUnits: string
  expirationDateTime: string
  firstUsedDateTime: string
  onBoardStabilityDuration: string
  testFluidIdentifier: string[]
  manufacturerLotNumber: string
  manufacturerIdentifier: string
  supplierIdentifier: string
  onBoardStabilityTime: string
  targetValue: string
  
  }
  export const HL7InventoryDetailV6 = mongoose.model<HL7InventoryDetailV6Document> ("HL7InventoryDetailV6", HL7InventoryDetailV6Schema);

