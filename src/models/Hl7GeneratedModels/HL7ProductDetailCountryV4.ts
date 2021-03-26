
// Generated typescript code of HL7v 2.4 PDC  (Product Detail Country)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductDetailCountryV4Document = mongoose.Document & HL7ProductDetailCountryV4I

const HL7ProductDetailCountryV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  manufacturerDistributor: Array(String),
  country: String,
  brandName: String,
  deviceFamilyName: String,
  genericName: String,
  modelIdentifier: Array(String),
  catalogueIdentifier: String,
  otherIdentifier: Array(String),
  productCode: String,
  marketingBasis: String,
  marketingApprovalID: String,
  labeledShelfLife: String,
  expectedShelfLife: String,
  dateFirstMarketed: Date,
  dateLastMarketed: Date,
  
  }, { timestamps: true });
  
export interface HL7ProductDetailCountryV4I extends Segment{
  manufacturerDistributor: string[]
  country: string
  brandName: string
  deviceFamilyName: string
  genericName: string
  modelIdentifier: string[]
  catalogueIdentifier: string
  otherIdentifier: string[]
  productCode: string
  marketingBasis: string
  marketingApprovalID: string
  labeledShelfLife: string
  expectedShelfLife: string
  dateFirstMarketed: Date
  dateLastMarketed: Date
  
  }
  export const HL7ProductDetailCountryV4 = mongoose.model<HL7ProductDetailCountryV4Document> ("HL7ProductDetailCountryV4", HL7ProductDetailCountryV4Schema);

