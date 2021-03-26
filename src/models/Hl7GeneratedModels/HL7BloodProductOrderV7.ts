
// Generated typescript code of HL7v 2.7 BPO  (Blood Product Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductOrderV7Document = mongoose.Document & HL7BloodProductOrderV7I

const HL7BloodProductOrderV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdBpo: String,
  bpUniversalServiceIdentifier: String,
  bpProcessingRequirements: Array(String),
  bpQuantity: Number,
  bpAmount: Number,
  bpUnits: String,
  bpIntendedUseDateTime: String,
  bpIntendedDispenseFromLocation: String,
  bpIntendedDispenseFromAddress: String,
  bpRequestedDispenseDateTime: String,
  bpRequestedDispenseToLocation: String,
  bpRequestedDispenseToAddress: String,
  bpIndicationForUse: Array(String),
  bpInformedConsentIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductOrderV7I extends Segment{
  setIdBpo: string
  bpUniversalServiceIdentifier: string
  bpProcessingRequirements: string[]
  bpQuantity: number
  bpAmount: number
  bpUnits: string
  bpIntendedUseDateTime: string
  bpIntendedDispenseFromLocation: string
  bpIntendedDispenseFromAddress: string
  bpRequestedDispenseDateTime: string
  bpRequestedDispenseToLocation: string
  bpRequestedDispenseToAddress: string
  bpIndicationForUse: string[]
  bpInformedConsentIndicator: string
  
  }
  export const HL7BloodProductOrderV7 = mongoose.model<HL7BloodProductOrderV7Document> ("HL7BloodProductOrderV7", HL7BloodProductOrderV7Schema);

