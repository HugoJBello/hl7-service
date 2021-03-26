
// Generated typescript code of HL7v 2.5 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV5Document = mongoose.Document & HL7BillingV5I

const HL7BillingV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountID: String,
  chargeTypeReason: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV5I extends Segment{
  whenToCharge: string
  chargeType: string
  accountID: string
  chargeTypeReason: string
  
  }
  export const HL7BillingV5 = mongoose.model<HL7BillingV5Document> ("HL7BillingV5", HL7BillingV5Schema);

