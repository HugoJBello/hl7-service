
// Generated typescript code of HL7v 2.6 FTS  (File Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerV6Document = mongoose.Document & HL7FileTrailerV6I

const HL7FileTrailerV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerV6I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerV6 = mongoose.model<HL7FileTrailerV6Document> ("HL7FileTrailerV6", HL7FileTrailerV6Schema);

