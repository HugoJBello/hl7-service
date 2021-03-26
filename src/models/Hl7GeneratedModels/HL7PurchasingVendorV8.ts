
// Generated typescript code of HL7v 2.8 VND  (Purchasing Vendor)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PurchasingVendorV8Document = mongoose.Document & HL7PurchasingVendorV8I

const HL7PurchasingVendorV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdVnd: String,
  vendorIdentifier: String,
  vendorName: String,
  vendorCatalogNumber: String,
  primaryVendorIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PurchasingVendorV8I extends Segment{
  setIdVnd: string
  vendorIdentifier: string
  vendorName: string
  vendorCatalogNumber: string
  primaryVendorIndicator: string
  
  }
  export const HL7PurchasingVendorV8 = mongoose.model<HL7PurchasingVendorV8Document> ("HL7PurchasingVendorV8", HL7PurchasingVendorV8Schema);

