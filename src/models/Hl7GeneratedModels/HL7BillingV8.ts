
// Generated typescript code of HL7v 2.8 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV8Document = mongoose.Document & HL7BillingV8I

const HL7BillingV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountId: String,
  chargeTypeReason: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV8I extends Segment{
  whenToCharge: string
  chargeType: string
  accountId: string
  chargeTypeReason: string
  
  }
  export const HL7BillingV8 = mongoose.model<HL7BillingV8Document> ("HL7BillingV8", HL7BillingV8Schema);

