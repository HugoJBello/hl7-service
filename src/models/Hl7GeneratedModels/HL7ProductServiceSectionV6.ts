
// Generated typescript code of HL7v 2.6 PSS  (Product/Service Section)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductServiceSectionV6Document = mongoose.Document & HL7ProductServiceSectionV6I

const HL7ProductServiceSectionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerProductServiceSectionNumber: String,
  payerProductServiceSectionNumber: String,
  productServiceSectionSequenceNumber: String,
  billedAmount: String,
  sectionDescriptionOrHeading: String,
  
  }, { timestamps: true });
  
export interface HL7ProductServiceSectionV6I extends Segment{
  providerProductServiceSectionNumber: string
  payerProductServiceSectionNumber: string
  productServiceSectionSequenceNumber: string
  billedAmount: string
  sectionDescriptionOrHeading: string
  
  }
  export const HL7ProductServiceSectionV6 = mongoose.model<HL7ProductServiceSectionV6Document> ("HL7ProductServiceSectionV6", HL7ProductServiceSectionV6Schema);

