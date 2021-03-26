
// Generated typescript code of HL7v 2.4 RQ1  (Requisition Detail-1)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetail1V4Document = mongoose.Document & HL7RequisitionDetail1V4I

const HL7RequisitionDetail1V4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  anticipatedPrice: String,
  manufacturerIdentifier: String,
  manufacturersCatalog: String,
  vendorID: String,
  vendorCatalog: String,
  taxable: String,
  substituteAllowed: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetail1V4I extends Segment{
  anticipatedPrice: string
  manufacturerIdentifier: string
  manufacturersCatalog: string
  vendorID: string
  vendorCatalog: string
  taxable: string
  substituteAllowed: string
  
  }
  export const HL7RequisitionDetail1V4 = mongoose.model<HL7RequisitionDetail1V4Document> ("HL7RequisitionDetail1V4", HL7RequisitionDetail1V4Schema);

