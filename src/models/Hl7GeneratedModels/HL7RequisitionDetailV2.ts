
// Generated typescript code of HL7v 2.2 RQD  (Requisition Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetailV2Document = mongoose.Document & HL7RequisitionDetailV2I

const HL7RequisitionDetailV2Schema = new mongoose.Schema({
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
  delivertoId: String,
  dateNeeded: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetailV2I extends Segment{
  requisitionLineNumber: string
  itemCodeInternal: string
  itemCodeExternal: string
  hospitalItemCode: string
  requisitionQuantity: number
  requisitionUnitOfMeasure: string
  departmentCostCenter: string
  itemNaturalAccountCode: string
  delivertoId: string
  dateNeeded: string
  
  }
  export const HL7RequisitionDetailV2 = mongoose.model<HL7RequisitionDetailV2Document> ("HL7RequisitionDetailV2", HL7RequisitionDetailV2Schema);

