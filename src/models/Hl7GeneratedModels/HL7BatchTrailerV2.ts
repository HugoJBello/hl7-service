
// Generated typescript code of HL7v 2.2 BTS  (Batch Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerV2Document = mongoose.Document & HL7BatchTrailerV2I

const HL7BatchTrailerV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(String),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerV2I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: string[]
  
  }
  export const HL7BatchTrailerV2 = mongoose.model<HL7BatchTrailerV2Document> ("HL7BatchTrailerV2", HL7BatchTrailerV2Schema);

