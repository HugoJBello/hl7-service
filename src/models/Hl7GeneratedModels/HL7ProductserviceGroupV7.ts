
// Generated typescript code of HL7v 2.7 PSG  (Product/service Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductserviceGroupV7Document = mongoose.Document & HL7ProductserviceGroupV7I

const HL7ProductserviceGroupV7Schema = new mongoose.Schema({
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
  
export interface HL7ProductserviceGroupV7I extends Segment{
  providerProductServiceGroupNumber: string
  payerProductServiceGroupNumber: string
  productServiceGroupSequenceNumber: string
  adjudicateAsGroup: string
  productServiceGroupBilledAmount: string
  productServiceGroupDescription: string
  
  }
  export const HL7ProductserviceGroupV7 = mongoose.model<HL7ProductserviceGroupV7Document> ("HL7ProductserviceGroupV7", HL7ProductserviceGroupV7Schema);

