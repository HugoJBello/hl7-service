
// Generated typescript code of HL7v 2.4 FTS  (File Trailer Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerSegmentV4Document = mongoose.Document & HL7FileTrailerSegmentV4I

const HL7FileTrailerSegmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerSegmentV4I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerSegmentV4 = mongoose.model<HL7FileTrailerSegmentV4Document> ("HL7FileTrailerSegmentV4", HL7FileTrailerSegmentV4Schema);

