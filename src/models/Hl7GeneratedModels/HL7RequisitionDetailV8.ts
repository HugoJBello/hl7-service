
// Generated typescript code of HL7v 2.8 RQD  (Requisition Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetailV8Document = mongoose.Document & HL7RequisitionDetailV8I

const HL7RequisitionDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requisitionLineNumber: String,
  itemCodeInternal: String,
  itemCodeExternal: String,
  hospitalItemCode: String,
  requisitionQuantity: Number,
  requisitionUnitOfMeasure: String,
  costCenterAccountNumber: String,
  itemNaturalAccountCode: String,
  deliverToId: String,
  dateNeeded: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetailV8I extends Segment{
  requisitionLineNumber: string
  itemCodeInternal: string
  itemCodeExternal: string
  hospitalItemCode: string
  requisitionQuantity: number
  requisitionUnitOfMeasure: string
  costCenterAccountNumber: string
  itemNaturalAccountCode: string
  deliverToId: string
  dateNeeded: string
  
  }
  export const HL7RequisitionDetailV8 = mongoose.model<HL7RequisitionDetailV8Document> ("HL7RequisitionDetailV8", HL7RequisitionDetailV8Schema);

