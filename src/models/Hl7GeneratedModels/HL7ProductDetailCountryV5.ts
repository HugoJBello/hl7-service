
// Generated typescript code of HL7v 2.5 PDC  (Product Detail Country)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductDetailCountryV5Document = mongoose.Document & HL7ProductDetailCountryV5I

const HL7ProductDetailCountryV5Schema = new mongoose.Schema({
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
  
export interface HL7ProductDetailCountryV5I extends Segment{
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
  export const HL7ProductDetailCountryV5 = mongoose.model<HL7ProductDetailCountryV5Document> ("HL7ProductDetailCountryV5", HL7ProductDetailCountryV5Schema);

