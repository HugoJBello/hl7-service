
// Generated typescript code of HL7v 2.3 RQD  (Requisition detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetailV3Document = mongoose.Document & HL7RequisitionDetailV3I

const HL7RequisitionDetailV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requisitionLineNumber: String,
  itemCodeInternal: String,
  itemCodeExternal: String,
  hospitalItemCode: String,
  requisitionQuantity: Number,
  requisitionUnitOfMeasure: String,
  departmentCostCenter: String,
  itemNaturalAccountCode: String,
  deliverToID: String,
  dateNeeded: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetailV3I extends Segment{
  requisitionLineNumber: string
  itemCodeInternal: string
  itemCodeExternal: string
  hospitalItemCode: string
  requisitionQuantity: number
  requisitionUnitOfMeasure: string
  departmentCostCenter: string
  itemNaturalAccountCode: string
  deliverToID: string
  dateNeeded: string
  
  }
  export const HL7RequisitionDetailV3 = mongoose.model<HL7RequisitionDetailV3Document> ("HL7RequisitionDetailV3", HL7RequisitionDetailV3Schema);

