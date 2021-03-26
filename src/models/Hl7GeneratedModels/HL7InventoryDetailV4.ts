
// Generated typescript code of HL7v 2.4 INV  (Inventory Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InventoryDetailV4Document = mongoose.Document & HL7InventoryDetailV4I

const HL7InventoryDetailV4Schema = new mongoose.Schema({
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
  expirationDateTime: Date,
  firstUsedDateTime: Date,
  onBoardStabilityDuration: String,
  testFluidIdentifier: Array(String),
  manufacturerLotNumber: String,
  manufacturerIdentifier: String,
  supplierIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7InventoryDetailV4I extends Segment{
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
  expirationDateTime: Date
  firstUsedDateTime: Date
  onBoardStabilityDuration: string
  testFluidIdentifier: string[]
  manufacturerLotNumber: string
  manufacturerIdentifier: string
  supplierIdentifier: string
  
  }
  export const HL7InventoryDetailV4 = mongoose.model<HL7InventoryDetailV4Document> ("HL7InventoryDetailV4", HL7InventoryDetailV4Schema);

