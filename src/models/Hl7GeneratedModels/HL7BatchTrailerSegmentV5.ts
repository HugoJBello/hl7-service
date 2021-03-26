
// Generated typescript code of HL7v 2.5 BTS  (Batch Trailer Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerSegmentV5Document = mongoose.Document & HL7BatchTrailerSegmentV5I

const HL7BatchTrailerSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerSegmentV5I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: number[]
  
  }
  export const HL7BatchTrailerSegmentV5 = mongoose.model<HL7BatchTrailerSegmentV5Document> ("HL7BatchTrailerSegmentV5", HL7BatchTrailerSegmentV5Schema);

