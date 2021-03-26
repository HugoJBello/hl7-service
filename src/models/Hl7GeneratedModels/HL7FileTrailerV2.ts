
// Generated typescript code of HL7v 2.2 FTS  (File Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FileTrailerV2Document = mongoose.Document & HL7FileTrailerV2I

const HL7FileTrailerV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  fileBatchCount: Number,
  fileTrailerComment: String,
  
  }, { timestamps: true });
  
export interface HL7FileTrailerV2I extends Segment{
  fileBatchCount: number
  fileTrailerComment: string
  
  }
  export const HL7FileTrailerV2 = mongoose.model<HL7FileTrailerV2Document> ("HL7FileTrailerV2", HL7FileTrailerV2Schema);

