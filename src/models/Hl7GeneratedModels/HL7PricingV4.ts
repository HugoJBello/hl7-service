
// Generated typescript code of HL7v 2.4 PRC  (Pricing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PricingV4Document = mongoose.Document & HL7PricingV4I

const HL7PricingV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValuePRC: String,
  facilityIDPRC: Array(String),
  department: Array(String),
  validPatientClasses: Array(String),
  price: Array(String),
  formula: Array(String),
  minimumQuantity: Number,
  maximumQuantity: Number,
  minimumPrice: String,
  maximumPrice: String,
  effectiveStartDate: Date,
  effectiveEndDate: Date,
  priceOverrideFlag: String,
  billingCategory: Array(String),
  chargeableFlag: String,
  activeInactiveFlag: String,
  cost: String,
  chargeOnIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PricingV4I extends Segment{
  primaryKeyValuePRC: string
  facilityIDPRC: string[]
  department: string[]
  validPatientClasses: string[]
  price: string[]
  formula: string[]
  minimumQuantity: number
  maximumQuantity: number
  minimumPrice: string
  maximumPrice: string
  effectiveStartDate: Date
  effectiveEndDate: Date
  priceOverrideFlag: string
  billingCategory: string[]
  chargeableFlag: string
  activeInactiveFlag: string
  cost: string
  chargeOnIndicator: string
  
  }
  export const HL7PricingV4 = mongoose.model<HL7PricingV4Document> ("HL7PricingV4", HL7PricingV4Schema);

