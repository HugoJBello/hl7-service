
// Generated typescript code of HL7v 2.6 BTS  (Batch Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerV6Document = mongoose.Document & HL7BatchTrailerV6I

const HL7BatchTrailerV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerV6I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: number[]
  
  }
  export const HL7BatchTrailerV6 = mongoose.model<HL7BatchTrailerV6Document> ("HL7BatchTrailerV6", HL7BatchTrailerV6Schema);

