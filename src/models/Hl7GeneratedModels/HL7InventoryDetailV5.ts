
// Generated typescript code of HL7v 2.5 INV  (Inventory Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InventoryDetailV5Document = mongoose.Document & HL7InventoryDetailV5I

const HL7InventoryDetailV5Schema = new mongoose.Schema({
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
  testFluidIdentifiers: Array(String),
  manufacturerLotNumber: String,
  manufacturerIdentifier: String,
  supplierIdentifier: String,
  onBoardStabilityTime: String,
  targetValue: String,
  
  }, { timestamps: true });
  
export interface HL7InventoryDetailV5I extends Segment{
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
  testFluidIdentifiers: string[]
  manufacturerLotNumber: string
  manufacturerIdentifier: string
  supplierIdentifier: string
  onBoardStabilityTime: string
  targetValue: string
  
  }
  export const HL7InventoryDetailV5 = mongoose.model<HL7InventoryDetailV5Document> ("HL7InventoryDetailV5", HL7InventoryDetailV5Schema);

