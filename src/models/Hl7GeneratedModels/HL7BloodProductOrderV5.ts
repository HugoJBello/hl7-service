
// Generated typescript code of HL7v 2.5 BPO  (Blood product order)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductOrderV5Document = mongoose.Document & HL7BloodProductOrderV5I

const HL7BloodProductOrderV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBPO: String,
  bPUniversalServiceID: String,
  bPProcessingRequirements: Array(String),
  bPQuantity: Number,
  bPAmount: Number,
  bPUnits: String,
  bPIntendedUseDateTime: Date,
  bPIntendedDispenseFromLocation: String,
  bPIntendedDispenseFromAddress: String,
  bPRequestedDispenseDateTime: Date,
  bPRequestedDispenseToLocation: String,
  bPRequestedDispenseToAddress: String,
  bPIndicationForUse: Array(String),
  bPInformedConsentIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductOrderV5I extends Segment{
  setIDBPO: string
  bPUniversalServiceID: string
  bPProcessingRequirements: string[]
  bPQuantity: number
  bPAmount: number
  bPUnits: string
  bPIntendedUseDateTime: Date
  bPIntendedDispenseFromLocation: string
  bPIntendedDispenseFromAddress: string
  bPRequestedDispenseDateTime: Date
  bPRequestedDispenseToLocation: string
  bPRequestedDispenseToAddress: string
  bPIndicationForUse: string[]
  bPInformedConsentIndicator: string
  
  }
  export const HL7BloodProductOrderV5 = mongoose.model<HL7BloodProductOrderV5Document> ("HL7BloodProductOrderV5", HL7BloodProductOrderV5Schema);

