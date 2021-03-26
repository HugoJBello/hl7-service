
// Generated typescript code of HL7v 2.3 BTS  (Batch Trailer Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerSegmentV3Document = mongoose.Document & HL7BatchTrailerSegmentV3I

const HL7BatchTrailerSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerSegmentV3I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: number[]
  
  }
  export const HL7BatchTrailerSegmentV3 = mongoose.model<HL7BatchTrailerSegmentV3Document> ("HL7BatchTrailerSegmentV3", HL7BatchTrailerSegmentV3Schema);

