
// Generated typescript code of HL7v 2.6 IIM  (Inventory Item Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InventoryItemMasterV6Document = mongoose.Document & HL7InventoryItemMasterV6I

const HL7InventoryItemMasterV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueIIM: String,
  serviceItemCode: String,
  inventoryLotNumber: String,
  inventoryExpirationDate: String,
  inventoryManufacturerName: String,
  inventoryLocation: String,
  inventoryReceivedDate: String,
  inventoryReceivedQuantity: Number,
  inventoryReceivedQuantityUnit: String,
  inventoryReceivedItemCost: String,
  inventoryOnHandDate: String,
  inventoryOnHandQuantity: Number,
  inventoryOnHandQuantityUnit: String,
  procedureCode: String,
  procedureCodeModifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7InventoryItemMasterV6I extends Segment{
  primaryKeyValueIIM: string
  serviceItemCode: string
  inventoryLotNumber: string
  inventoryExpirationDate: string
  inventoryManufacturerName: string
  inventoryLocation: string
  inventoryReceivedDate: string
  inventoryReceivedQuantity: number
  inventoryReceivedQuantityUnit: string
  inventoryReceivedItemCost: string
  inventoryOnHandDate: string
  inventoryOnHandQuantity: number
  inventoryOnHandQuantityUnit: string
  procedureCode: string
  procedureCodeModifier: string[]
  
  }
  export const HL7InventoryItemMasterV6 = mongoose.model<HL7InventoryItemMasterV6Document> ("HL7InventoryItemMasterV6", HL7InventoryItemMasterV6Schema);

