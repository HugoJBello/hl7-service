
// Generated typescript code of HL7v 2.6 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV6Document = mongoose.Document & HL7BillingV6I

const HL7BillingV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountID: String,
  chargeTypeReason: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV6I extends Segment{
  whenToCharge: string
  chargeType: string
  accountID: string
  chargeTypeReason: string
  
  }
  export const HL7BillingV6 = mongoose.model<HL7BillingV6Document> ("HL7BillingV6", HL7BillingV6Schema);

