
// Generated typescript code of HL7v 2.8 PKG  (Item Packaging)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ItemPackagingV8Document = mongoose.Document & HL7ItemPackagingV8I

const HL7ItemPackagingV8Schema = new mongoose.Schema({
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
  globalTradeItemNumber: String,
  
  }, { timestamps: true });
  
export interface HL7ItemPackagingV8I extends Segment{
  setIdPkg: string
  packagingUnits: string
  defaultOrderUnitOfMeasureIndicator: string
  packageQuantity: number
  price: string
  futureItemPrice: string
  futureItemPriceEffectiveDate: string
  globalTradeItemNumber: string
  
  }
  export const HL7ItemPackagingV8 = mongoose.model<HL7ItemPackagingV8Document> ("HL7ItemPackagingV8", HL7ItemPackagingV8Schema);

