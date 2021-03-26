
// Generated typescript code of HL7v 2.8 PRC  (Pricing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PricingV8Document = mongoose.Document & HL7PricingV8I

const HL7PricingV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValuePrc: String,
  facilityIdPrc: Array(String),
  department: Array(String),
  validPatientClasses: Array(String),
  price: Array(String),
  formula: Array(String),
  minimumQuantity: Number,
  maximumQuantity: Number,
  minimumPrice: String,
  maximumPrice: String,
  effectiveStartDate: String,
  effectiveEndDate: String,
  priceOverrideFlag: String,
  billingCategory: Array(String),
  chargeableFlag: String,
  activeInactiveFlag: String,
  cost: String,
  chargeOnIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PricingV8I extends Segment{
  primaryKeyValuePrc: string
  facilityIdPrc: string[]
  department: string[]
  validPatientClasses: string[]
  price: string[]
  formula: string[]
  minimumQuantity: number
  maximumQuantity: number
  minimumPrice: string
  maximumPrice: string
  effectiveStartDate: string
  effectiveEndDate: string
  priceOverrideFlag: string
  billingCategory: string[]
  chargeableFlag: string
  activeInactiveFlag: string
  cost: string
  chargeOnIndicator: string
  
  }
  export const HL7PricingV8 = mongoose.model<HL7PricingV8Document> ("HL7PricingV8", HL7PricingV8Schema);

