
// Generated typescript code of HL7v 2.7 PSS  (Product/service Section)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductserviceSectionV7Document = mongoose.Document & HL7ProductserviceSectionV7I

const HL7ProductserviceSectionV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerProductServiceSectionNumber: String,
  payerProductServiceSectionNumber: String,
  productServiceSectionSequenceNumber: String,
  billedAmount: String,
  sectionDescriptionOrHeading: String,
  
  }, { timestamps: true });
  
export interface HL7ProductserviceSectionV7I extends Segment{
  providerProductServiceSectionNumber: string
  payerProductServiceSectionNumber: string
  productServiceSectionSequenceNumber: string
  billedAmount: string
  sectionDescriptionOrHeading: string
  
  }
  export const HL7ProductserviceSectionV7 = mongoose.model<HL7ProductserviceSectionV7Document> ("HL7ProductserviceSectionV7", HL7ProductserviceSectionV7Schema);

