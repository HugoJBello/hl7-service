
// Generated typescript code of HL7v 2.8 ILT  (Material Lot)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialLotV8Document = mongoose.Document & HL7MaterialLotV8I

const HL7MaterialLotV8Schema = new mongoose.Schema({
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
  
export interface HL7MaterialLotV8I extends Segment{
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
  export const HL7MaterialLotV8 = mongoose.model<HL7MaterialLotV8Document> ("HL7MaterialLotV8", HL7MaterialLotV8Schema);

