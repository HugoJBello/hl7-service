
// Generated typescript code of HL7v 2.4 RQD  (Requisition Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetailV4Document = mongoose.Document & HL7RequisitionDetailV4I

const HL7RequisitionDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requisitionLineNumber: String,
  itemCodeInternal: String,
  itemCodeExternal: String,
  hospitalItemCode: String,
  requisitionQuantity: Number,
  requisitionUnitOfMeasure: String,
  deptCostCenter: String,
  itemNaturalAccountCode: String,
  deliverToID: String,
  dateNeeded: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetailV4I extends Segment{
  requisitionLineNumber: string
  itemCodeInternal: string
  itemCodeExternal: string
  hospitalItemCode: string
  requisitionQuantity: number
  requisitionUnitOfMeasure: string
  deptCostCenter: string
  itemNaturalAccountCode: string
  deliverToID: string
  dateNeeded: string
  
  }
  export const HL7RequisitionDetailV4 = mongoose.model<HL7RequisitionDetailV4Document> ("HL7RequisitionDetailV4", HL7RequisitionDetailV4Schema);

