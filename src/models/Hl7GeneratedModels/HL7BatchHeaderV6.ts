
// Generated typescript code of HL7v 2.6 BHS  (Batch Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchHeaderV6Document = mongoose.Document & HL7BatchHeaderV6I

const HL7BatchHeaderV6Schema = new mongoose.Schema({
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
  batchNameIDType: String,
  batchComment: String,
  batchControlID: String,
  referenceBatchControlID: String,
  batchSendingNetworkAddress: String,
  batchReceivingNetworkAddress: String,
  
  }, { timestamps: true });
  
export interface HL7BatchHeaderV6I extends Segment{
  batchFieldSeparator: string
  batchEncodingCharacters: string
  batchSendingApplication: string
  batchSendingFacility: string
  batchReceivingApplication: string
  batchReceivingFacility: string
  batchCreationDateTime: string
  batchSecurity: string
  batchNameIDType: string
  batchComment: string
  batchControlID: string
  referenceBatchControlID: string
  batchSendingNetworkAddress: string
  batchReceivingNetworkAddress: string
  
  }
  export const HL7BatchHeaderV6 = mongoose.model<HL7BatchHeaderV6Document> ("HL7BatchHeaderV6", HL7BatchHeaderV6Schema);

