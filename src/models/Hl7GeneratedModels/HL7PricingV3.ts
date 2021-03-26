
// Generated typescript code of HL7v 2.3 PRC  (Pricing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PricingV3Document = mongoose.Document & HL7PricingV3I

const HL7PricingV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValue: String,
  facilityID: Array(String),
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
  
export interface HL7PricingV3I extends Segment{
  primaryKeyValue: string
  facilityID: string[]
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
  export const HL7PricingV3 = mongoose.model<HL7PricingV3Document> ("HL7PricingV3", HL7PricingV3Schema);

