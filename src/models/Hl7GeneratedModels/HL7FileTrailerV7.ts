
// Generated typescript code of HL7v 2.7 FTS  (File Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerV7Document = mongoose.Document & HL7FileTrailerV7I

const HL7FileTrailerV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerV7I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerV7 = mongoose.model<HL7FileTrailerV7Document> ("HL7FileTrailerV7", HL7FileTrailerV7Schema);

