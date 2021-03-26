
// Generated typescript code of HL7v 2.2 RQ1  (Requisition Detail 1)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetail1V2Document = mongoose.Document & HL7RequisitionDetail1V2I

const HL7RequisitionDetail1V2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  anticipatedPrice: String,
  manufacturerId: String,
  manufacturersCatalog: String,
  vendorId: String,
  vendorCatalog: String,
  taxable: String,
  substituteAllowed: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetail1V2I extends Segment{
  anticipatedPrice: string
  manufacturerId: string
  manufacturersCatalog: string
  vendorId: string
  vendorCatalog: string
  taxable: string
  substituteAllowed: string
  
  }
  export const HL7RequisitionDetail1V2 = mongoose.model<HL7RequisitionDetail1V2Document> ("HL7RequisitionDetail1V2", HL7RequisitionDetail1V2Schema);

