
// Generated typescript code of HL7v 2.8 PSG  (Product/service Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductserviceGroupV8Document = mongoose.Document & HL7ProductserviceGroupV8I

const HL7ProductserviceGroupV8Schema = new mongoose.Schema({
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
  
export interface HL7ProductserviceGroupV8I extends Segment{
  providerProductServiceGroupNumber: string
  payerProductServiceGroupNumber: string
  productServiceGroupSequenceNumber: string
  adjudicateAsGroup: string
  productServiceGroupBilledAmount: string
  productServiceGroupDescription: string
  
  }
  export const HL7ProductserviceGroupV8 = mongoose.model<HL7ProductserviceGroupV8Document> ("HL7ProductserviceGroupV8", HL7ProductserviceGroupV8Schema);

