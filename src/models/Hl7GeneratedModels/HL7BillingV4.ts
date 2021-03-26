
// Generated typescript code of HL7v 2.4 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV4Document = mongoose.Document & HL7BillingV4I

const HL7BillingV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountID: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV4I extends Segment{
  whenToCharge: string
  chargeType: string
  accountID: string
  
  }
  export const HL7BillingV4 = mongoose.model<HL7BillingV4Document> ("HL7BillingV4", HL7BillingV4Schema);

