
// Generated typescript code of HL7v 2.3 RQ1  (Requisition detail-1 segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequisitionDetail1SegmentV3Document = mongoose.Document & HL7RequisitionDetail1SegmentV3I

const HL7RequisitionDetail1SegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  anticipatedPrice: String,
  manufacturedID: String,
  manufacturersCatalog: String,
  vendorID: String,
  vendorCatalog: String,
  taxable: String,
  substituteAllowed: String,
  
  }, { timestamps: true });
  
export interface HL7RequisitionDetail1SegmentV3I extends Segment{
  anticipatedPrice: string
  manufacturedID: string
  manufacturersCatalog: string
  vendorID: string
  vendorCatalog: string
  taxable: string
  substituteAllowed: string
  
  }
  export const HL7RequisitionDetail1SegmentV3 = mongoose.model<HL7RequisitionDetail1SegmentV3Document> ("HL7RequisitionDetail1SegmentV3", HL7RequisitionDetail1SegmentV3Schema);

