
// Generated typescript code of HL7v 2.6 VND  (Purchasing Vendor)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PurchasingVendorV6Document = mongoose.Document & HL7PurchasingVendorV6I

const HL7PurchasingVendorV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdVND: String,
  vendorIdentifier: String,
  vendorName: String,
  vendorCatalogNumber: String,
  primaryVendorIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PurchasingVendorV6I extends Segment{
  setIdVND: string
  vendorIdentifier: string
  vendorName: string
  vendorCatalogNumber: string
  primaryVendorIndicator: string
  
  }
  export const HL7PurchasingVendorV6 = mongoose.model<HL7PurchasingVendorV6Document> ("HL7PurchasingVendorV6", HL7PurchasingVendorV6Schema);

