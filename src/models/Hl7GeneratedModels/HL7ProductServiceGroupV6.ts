
// Generated typescript code of HL7v 2.6 PSG  (Product/Service Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductServiceGroupV6Document = mongoose.Document & HL7ProductServiceGroupV6I

const HL7ProductServiceGroupV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerProductServiceGroupNumber: String,
  payerProductServiceGroupNumber: String,
  productServiceGroupSequenceNumber: String,
  adjudicateAsGroup: String,
  productServiceGroupBilledAmount: String,
  productServiceGroupDescription: String,
  
  }, { timestamps: true });
  
export interface HL7ProductServiceGroupV6I extends Segment{
  providerProductServiceGroupNumber: string
  payerProductServiceGroupNumber: string
  productServiceGroupSequenceNumber: string
  adjudicateAsGroup: string
  productServiceGroupBilledAmount: string
  productServiceGroupDescription: string
  
  }
  export const HL7ProductServiceGroupV6 = mongoose.model<HL7ProductServiceGroupV6Document> ("HL7ProductServiceGroupV6", HL7ProductServiceGroupV6Schema);

