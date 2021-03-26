
// Generated typescript code of HL7v 2.6 RQD  (Requisition Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetailV6Document = mongoose.Document & HL7RequisitionDetailV6I

const HL7RequisitionDetailV6Schema = new mongoose.Schema({
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
  deliverToID: String,
  dateNeeded: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetailV6I extends Segment{
  requisitionLineNumber: string
  itemCodeInternal: string
  itemCodeExternal: string
  hospitalItemCode: string
  requisitionQuantity: number
  requisitionUnitOfMeasure: string
  costCenterAccountNumber: string
  itemNaturalAccountCode: string
  deliverToID: string
  dateNeeded: string
  
  }
  export const HL7RequisitionDetailV6 = mongoose.model<HL7RequisitionDetailV6Document> ("HL7RequisitionDetailV6", HL7RequisitionDetailV6Schema);

