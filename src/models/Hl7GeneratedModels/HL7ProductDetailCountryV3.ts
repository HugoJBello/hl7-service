
// Generated typescript code of HL7v 2.3 PDC  (Product Detail Country)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductDetailCountryV3Document = mongoose.Document & HL7ProductDetailCountryV3I

const HL7ProductDetailCountryV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  manufacturerDistributor: String,
  country: String,
  brandName: String,
  deviceFamilyName: String,
  genericName: String,
  modelIdentifier: Array(String),
  catalogueIdentifier: String,
  otherIdentifier: Array(String),
  productCode: String,
  marketingBasis: String,
  marketingApprovalIdentifier: String,
  labeledShelfLife: String,
  expectedShelfLife: String,
  dateFirstMarked: Date,
  dateLastMarked: Date,
  
  }, { timestamps: true });
  
export interface HL7ProductDetailCountryV3I extends Segment{
  manufacturerDistributor: string
  country: string
  brandName: string
  deviceFamilyName: string
  genericName: string
  modelIdentifier: string[]
  catalogueIdentifier: string
  otherIdentifier: string[]
  productCode: string
  marketingBasis: string
  marketingApprovalIdentifier: string
  labeledShelfLife: string
  expectedShelfLife: string
  dateFirstMarked: Date
  dateLastMarked: Date
  
  }
  export const HL7ProductDetailCountryV3 = mongoose.model<HL7ProductDetailCountryV3Document> ("HL7ProductDetailCountryV3", HL7ProductDetailCountryV3Schema);

