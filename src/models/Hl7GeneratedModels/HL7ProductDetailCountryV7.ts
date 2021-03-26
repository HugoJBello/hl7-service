
// Generated typescript code of HL7v 2.7 PDC  (Product Detail Country)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductDetailCountryV7Document = mongoose.Document & HL7ProductDetailCountryV7I

const HL7ProductDetailCountryV7Schema = new mongoose.Schema({
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
  marketingApprovalId: String,
  labeledShelfLife: String,
  expectedShelfLife: String,
  dateFirstMarketed: String,
  dateLastMarketed: String,
  
  }, { timestamps: true });
  
export interface HL7ProductDetailCountryV7I extends Segment{
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
  marketingApprovalId: string
  labeledShelfLife: string
  expectedShelfLife: string
  dateFirstMarketed: string
  dateLastMarketed: string
  
  }
  export const HL7ProductDetailCountryV7 = mongoose.model<HL7ProductDetailCountryV7Document> ("HL7ProductDetailCountryV7", HL7ProductDetailCountryV7Schema);

