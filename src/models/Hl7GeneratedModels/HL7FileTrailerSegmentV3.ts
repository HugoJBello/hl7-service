
// Generated typescript code of HL7v 2.3 FTS  (File Trailer Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerSegmentV3Document = mongoose.Document & HL7FileTrailerSegmentV3I

const HL7FileTrailerSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerSegmentV3I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerSegmentV3 = mongoose.model<HL7FileTrailerSegmentV3Document> ("HL7FileTrailerSegmentV3", HL7FileTrailerSegmentV3Schema);

