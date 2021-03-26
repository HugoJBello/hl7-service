
// Generated typescript code of HL7v 2.3 BLG  (Billing)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BillingV3Document = mongoose.Document & HL7BillingV3I

const HL7BillingV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  whenToCharge: String,
  chargeType: String,
  accountID: String,
  
  }, { timestamps: true });
  
export interface HL7BillingV3I extends Segment{
  whenToCharge: string
  chargeType: string
  accountID: string
  
  }
  export const HL7BillingV3 = mongoose.model<HL7BillingV3Document> ("HL7BillingV3", HL7BillingV3Schema);

