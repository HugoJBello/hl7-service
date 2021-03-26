
// Generated typescript code of HL7v 2.5 FTS  (File Trailer Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerSegmentV5Document = mongoose.Document & HL7FileTrailerSegmentV5I

const HL7FileTrailerSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerSegmentV5I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerSegmentV5 = mongoose.model<HL7FileTrailerSegmentV5Document> ("HL7FileTrailerSegmentV5", HL7FileTrailerSegmentV5Schema);

