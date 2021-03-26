
// Generated typescript code of HL7v 2.8 FTS  (File Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerV8Document = mongoose.Document & HL7FileTrailerV8I

const HL7FileTrailerV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerV8I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerV8 = mongoose.model<HL7FileTrailerV8Document> ("HL7FileTrailerV8", HL7FileTrailerV8Schema);

