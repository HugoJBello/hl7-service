
// Generated typescript code of HL7v 2.4 BHS  (Batch Header Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchHeaderSegmentV4Document = mongoose.Document & HL7BatchHeaderSegmentV4I

const HL7BatchHeaderSegmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchFieldSeparator: String,
  batchEncodingCharacters: String,
  batchSendingApplication: String,
  batchSendingFacility: String,
  batchReceivingApplication: String,
  batchReceivingFacility: String,
  batchCreationDateTime: Date,
  batchSecurity: String,
  batchNameIDType: String,
  batchComment: String,
  batchControlID: String,
  referenceBatchControlID: String,
  
  }, { timestamps: true });
  
export interface HL7BatchHeaderSegmentV4I extends Segment{
  batchFieldSeparator: string
  batchEncodingCharacters: string
  batchSendingApplication: string
  batchSendingFacility: string
  batchReceivingApplication: string
  batchReceivingFacility: string
  batchCreationDateTime: Date
  batchSecurity: string
  batchNameIDType: string
  batchComment: string
  batchControlID: string
  referenceBatchControlID: string
  
  }
  export const HL7BatchHeaderSegmentV4 = mongoose.model<HL7BatchHeaderSegmentV4Document> ("HL7BatchHeaderSegmentV4", HL7BatchHeaderSegmentV4Schema);

