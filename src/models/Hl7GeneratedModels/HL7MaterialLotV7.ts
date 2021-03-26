
// Generated typescript code of HL7v 2.7 ILT  (Material Lot)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialLotV7Document = mongoose.Document & HL7MaterialLotV7I

const HL7MaterialLotV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdIlt: String,
  inventoryLotNumber: String,
  inventoryExpirationDate: String,
  inventoryReceivedDate: String,
  inventoryReceivedQuantity: Number,
  inventoryReceivedQuantityUnit: String,
  inventoryReceivedItemCost: String,
  inventoryOnHandDate: String,
  inventoryOnHandQuantity: Number,
  inventoryOnHandQuantityUnit: String,
  
  }, { timestamps: true });
  
export interface HL7MaterialLotV7I extends Segment{
  setIdIlt: string
  inventoryLotNumber: string
  inventoryExpirationDate: string
  inventoryReceivedDate: string
  inventoryReceivedQuantity: number
  inventoryReceivedQuantityUnit: string
  inventoryReceivedItemCost: string
  inventoryOnHandDate: string
  inventoryOnHandQuantity: number
  inventoryOnHandQuantityUnit: string
  
  }
  export const HL7MaterialLotV7 = mongoose.model<HL7MaterialLotV7Document> ("HL7MaterialLotV7", HL7MaterialLotV7Schema);

