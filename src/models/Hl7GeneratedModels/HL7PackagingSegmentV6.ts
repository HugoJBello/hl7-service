
// Generated typescript code of HL7v 2.6 PKG  (Packaging Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PackagingSegmentV6Document = mongoose.Document & HL7PackagingSegmentV6I

const HL7PackagingSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPKG: String,
  packagingUnits: String,
  defaultOrderUnitOfMeasureIndicator: String,
  packageQuantity: Number,
  price: String,
  futureItemPrice: String,
  futureItemPriceEffectiveDate: String,
  
  }, { timestamps: true });
  
export interface HL7PackagingSegmentV6I extends Segment{
  setIdPKG: string
  packagingUnits: string
  defaultOrderUnitOfMeasureIndicator: string
  packageQuantity: number
  price: string
  futureItemPrice: string
  futureItemPriceEffectiveDate: string
  
  }
  export const HL7PackagingSegmentV6 = mongoose.model<HL7PackagingSegmentV6Document> ("HL7PackagingSegmentV6", HL7PackagingSegmentV6Schema);

