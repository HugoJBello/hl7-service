
// Generated typescript code of HL7v 2.7 IIM  (Inventory Item Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InventoryItemMasterV7Document = mongoose.Document & HL7InventoryItemMasterV7I

const HL7InventoryItemMasterV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueIim: String,
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
  
export interface HL7InventoryItemMasterV7I extends Segment{
  primaryKeyValueIim: string
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
  export const HL7InventoryItemMasterV7 = mongoose.model<HL7InventoryItemMasterV7Document> ("HL7InventoryItemMasterV7", HL7InventoryItemMasterV7Schema);

