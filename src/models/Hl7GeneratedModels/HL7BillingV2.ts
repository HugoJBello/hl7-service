
// Generated typescript code of HL7v 2.2 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV2Document = mongoose.Document & HL7BillingV2I

const HL7BillingV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountId: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV2I extends Segment{
  whenToCharge: string
  chargeType: string
  accountId: string
  
  }
  export const HL7BillingV2 = mongoose.model<HL7BillingV2Document> ("HL7BillingV2", HL7BillingV2Schema);

