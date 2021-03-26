
// Generated typescript code of HL7v 2.8 BHS  (Batch Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchHeaderV8Document = mongoose.Document & HL7BatchHeaderV8I

const HL7BatchHeaderV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchFieldSeparator: String,
  batchEncodingCharacters: String,
  batchSendingApplication: String,
  batchSendingFacility: String,
  batchReceivingApplication: String,
  batchReceivingFacility: String,
  batchCreationDateTime: String,
  batchSecurity: String,
  batchNameIdType: String,
  batchComment: String,
  batchControlId: String,
  referenceBatchControlId: String,
  batchSendingNetworkAddress: String,
  batchReceivingNetworkAddress: String,
  
  }, { timestamps: true });
  
export interface HL7BatchHeaderV8I extends Segment{
  batchFieldSeparator: string
  batchEncodingCharacters: string
  batchSendingApplication: string
  batchSendingFacility: string
  batchReceivingApplication: string
  batchReceivingFacility: string
  batchCreationDateTime: string
  batchSecurity: string
  batchNameIdType: string
  batchComment: string
  batchControlId: string
  referenceBatchControlId: string
  batchSendingNetworkAddress: string
  batchReceivingNetworkAddress: string
  
  }
  export const HL7BatchHeaderV8 = mongoose.model<HL7BatchHeaderV8Document> ("HL7BatchHeaderV8", HL7BatchHeaderV8Schema);

