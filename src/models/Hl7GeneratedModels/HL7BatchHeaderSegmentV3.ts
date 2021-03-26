
// Generated typescript code of HL7v 2.3 BHS  (Batch Header Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchHeaderSegmentV3Document = mongoose.Document & HL7BatchHeaderSegmentV3I

const HL7BatchHeaderSegmentV3Schema = new mongoose.Schema({
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
  
export interface HL7BatchHeaderSegmentV3I extends Segment{
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
  export const HL7BatchHeaderSegmentV3 = mongoose.model<HL7BatchHeaderSegmentV3Document> ("HL7BatchHeaderSegmentV3", HL7BatchHeaderSegmentV3Schema);

