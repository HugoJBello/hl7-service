
// Generated typescript code of HL7v 2.8 BPO  (Blood Product Order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductOrderV8Document = mongoose.Document & HL7BloodProductOrderV8I

const HL7BloodProductOrderV8Schema = new mongoose.Schema({
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
  
export interface HL7BloodProductOrderV8I extends Segment{
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
  export const HL7BloodProductOrderV8 = mongoose.model<HL7BloodProductOrderV8Document> ("HL7BloodProductOrderV8", HL7BloodProductOrderV8Schema);

