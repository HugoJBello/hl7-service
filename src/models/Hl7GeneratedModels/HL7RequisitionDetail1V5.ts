
// Generated typescript code of HL7v 2.5 RQ1  (Requisition Detail-1)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetail1V5Document = mongoose.Document & HL7RequisitionDetail1V5I

const HL7RequisitionDetail1V5Schema = new mongoose.Schema({
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
  
export interface HL7RequisitionDetail1V5I extends Segment{
  anticipatedPrice: string
  manufacturerIdentifier: string
  manufacturersCatalog: string
  vendorID: string
  vendorCatalog: string
  taxable: string
  substituteAllowed: string
  
  }
  export const HL7RequisitionDetail1V5 = mongoose.model<HL7RequisitionDetail1V5Document> ("HL7RequisitionDetail1V5", HL7RequisitionDetail1V5Schema);

