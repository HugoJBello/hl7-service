
// Generated typescript code of HL7v 2.5 IIM  (Inventory Item Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InventoryItemMasterV5Document = mongoose.Document & HL7InventoryItemMasterV5I

const HL7InventoryItemMasterV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueIIM: String,
  serviceItemCode: String,
  inventoryLotNumber: String,
  inventoryExpirationDate: Date,
  inventoryManufacturerName: String,
  inventoryLocation: String,
  inventoryReceivedDate: Date,
  inventoryReceivedQuantity: Number,
  inventoryReceivedQuantityUnit: String,
  inventoryReceivedItemCost: String,
  inventoryOnHandDate: Date,
  inventoryOnHandQuantity: Number,
  inventoryOnHandQuantityUnit: String,
  procedureCode: String,
  procedureCodeModifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InventoryItemMasterV5I extends Segment{
  primaryKeyValueIIM: string
  serviceItemCode: string
  inventoryLotNumber: string
  inventoryExpirationDate: Date
  inventoryManufacturerName: string
  inventoryLocation: string
  inventoryReceivedDate: Date
  inventoryReceivedQuantity: number
  inventoryReceivedQuantityUnit: string
  inventoryReceivedItemCost: string
  inventoryOnHandDate: Date
  inventoryOnHandQuantity: number
  inventoryOnHandQuantityUnit: string
  procedureCode: string
  procedureCodeModifier: string[]
  
  }
  export const HL7InventoryItemMasterV5 = mongoose.model<HL7InventoryItemMasterV5Document> ("HL7InventoryItemMasterV5", HL7InventoryItemMasterV5Schema);

