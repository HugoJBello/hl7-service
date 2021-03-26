
// Generated typescript code of HL7v 2.7 PKG  (Item Packaging)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ItemPackagingV7Document = mongoose.Document & HL7ItemPackagingV7I

const HL7ItemPackagingV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPkg: String,
  packagingUnits: String,
  defaultOrderUnitOfMeasureIndicator: String,
  packageQuantity: Number,
  price: String,
  futureItemPrice: String,
  futureItemPriceEffectiveDate: String,
  
  }, { timestamps: true });
  
export interface HL7ItemPackagingV7I extends Segment{
  setIdPkg: string
  packagingUnits: string
  defaultOrderUnitOfMeasureIndicator: string
  packageQuantity: number
  price: string
  futureItemPrice: string
  futureItemPriceEffectiveDate: string
  
  }
  export const HL7ItemPackagingV7 = mongoose.model<HL7ItemPackagingV7Document> ("HL7ItemPackagingV7", HL7ItemPackagingV7Schema);

