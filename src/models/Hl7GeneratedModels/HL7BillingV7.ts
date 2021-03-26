
// Generated typescript code of HL7v 2.7 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV7Document = mongoose.Document & HL7BillingV7I

const HL7BillingV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountId: String,
  chargeTypeReason: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV7I extends Segment{
  whenToCharge: string
  chargeType: string
  accountId: string
  chargeTypeReason: string
  
  }
  export const HL7BillingV7 = mongoose.model<HL7BillingV7Document> ("HL7BillingV7", HL7BillingV7Schema);

