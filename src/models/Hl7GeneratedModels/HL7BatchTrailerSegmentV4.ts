
// Generated typescript code of HL7v 2.4 BTS  (Batch Trailer Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerSegmentV4Document = mongoose.Document & HL7BatchTrailerSegmentV4I

const HL7BatchTrailerSegmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerSegmentV4I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: number[]
  
  }
  export const HL7BatchTrailerSegmentV4 = mongoose.model<HL7BatchTrailerSegmentV4Document> ("HL7BatchTrailerSegmentV4", HL7BatchTrailerSegmentV4Schema);

