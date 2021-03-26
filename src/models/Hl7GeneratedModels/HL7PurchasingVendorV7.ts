
// Generated typescript code of HL7v 2.7 VND  (Purchasing Vendor)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PurchasingVendorV7Document = mongoose.Document & HL7PurchasingVendorV7I

const HL7PurchasingVendorV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdVnd: String,
  vendorIdentifier: String,
  vendorName: String,
  vendorCatalogNumber: String,
  primaryVendorIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PurchasingVendorV7I extends Segment{
  setIdVnd: string
  vendorIdentifier: string
  vendorName: string
  vendorCatalogNumber: string
  primaryVendorIndicator: string
  
  }
  export const HL7PurchasingVendorV7 = mongoose.model<HL7PurchasingVendorV7Document> ("HL7PurchasingVendorV7", HL7PurchasingVendorV7Schema);

