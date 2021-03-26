
// Generated typescript code of HL7v 2.6 ILT  (Material Lot Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MaterialLotSegmentV6Document = mongoose.Document & HL7MaterialLotSegmentV6I

const HL7MaterialLotSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdILT: String,
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
  
export interface HL7MaterialLotSegmentV6I extends Segment{
  setIdILT: string
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
  export const HL7MaterialLotSegmentV6 = mongoose.model<HL7MaterialLotSegmentV6Document> ("HL7MaterialLotSegmentV6", HL7MaterialLotSegmentV6Schema);

