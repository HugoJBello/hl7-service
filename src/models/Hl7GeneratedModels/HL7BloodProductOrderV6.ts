
// Generated typescript code of HL7v 2.6 BPO  (Blood product order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductOrderV6Document = mongoose.Document & HL7BloodProductOrderV6I

const HL7BloodProductOrderV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBPO: String,
  bPUniversalServiceIdentifier: String,
  bPProcessingRequirements: Array(String),
  bPQuantity: Number,
  bPAmount: Number,
  bPUnits: String,
  bPIntendedUseDateTime: String,
  bPIntendedDispenseFromLocation: String,
  bPIntendedDispenseFromAddress: String,
  bPRequestedDispenseDateTime: String,
  bPRequestedDispenseToLocation: String,
  bPRequestedDispenseToAddress: String,
  bPIndicationForUse: Array(String),
  bPInformedConsentIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductOrderV6I extends Segment{
  setIDBPO: string
  bPUniversalServiceIdentifier: string
  bPProcessingRequirements: string[]
  bPQuantity: number
  bPAmount: number
  bPUnits: string
  bPIntendedUseDateTime: string
  bPIntendedDispenseFromLocation: string
  bPIntendedDispenseFromAddress: string
  bPRequestedDispenseDateTime: string
  bPRequestedDispenseToLocation: string
  bPRequestedDispenseToAddress: string
  bPIndicationForUse: string[]
  bPInformedConsentIndicator: string
  
  }
  export const HL7BloodProductOrderV6 = mongoose.model<HL7BloodProductOrderV6Document> ("HL7BloodProductOrderV6", HL7BloodProductOrderV6Schema);

