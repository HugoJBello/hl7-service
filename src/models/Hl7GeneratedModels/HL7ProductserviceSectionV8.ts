
// Generated typescript code of HL7v 2.8 PSS  (Product/service Section)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductserviceSectionV8Document = mongoose.Document & HL7ProductserviceSectionV8I

const HL7ProductserviceSectionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerProductServiceSectionNumber: String,
  payerProductServiceSectionNumber: String,
  productServiceSectionSequenceNumber: String,
  billedAmount: String,
  sectionDescriptionOrHeading: String,
  
  }, { timestamps: true });
  
export interface HL7ProductserviceSectionV8I extends Segment{
  providerProductServiceSectionNumber: string
  payerProductServiceSectionNumber: string
  productServiceSectionSequenceNumber: string
  billedAmount: string
  sectionDescriptionOrHeading: string
  
  }
  export const HL7ProductserviceSectionV8 = mongoose.model<HL7ProductserviceSectionV8Document> ("HL7ProductserviceSectionV8", HL7ProductserviceSectionV8Schema);

