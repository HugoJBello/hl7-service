
// Generated typescript code of HL7v 2.7 RQ1  (Requisition Detail-1)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetail1V7Document = mongoose.Document & HL7RequisitionDetail1V7I

const HL7RequisitionDetail1V7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  anticipatedPrice: String,
  manufacturerIdentifier: String,
  manufacturersCatalog: String,
  vendorId: String,
  vendorCatalog: String,
  taxable: String,
  substituteAllowed: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetail1V7I extends Segment{
  anticipatedPrice: string
  manufacturerIdentifier: string
  manufacturersCatalog: string
  vendorId: string
  vendorCatalog: string
  taxable: string
  substituteAllowed: string
  
  }
  export const HL7RequisitionDetail1V7 = mongoose.model<HL7RequisitionDetail1V7Document> ("HL7RequisitionDetail1V7", HL7RequisitionDetail1V7Schema);

