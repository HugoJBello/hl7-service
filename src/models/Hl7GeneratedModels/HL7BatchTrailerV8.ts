
// Generated typescript code of HL7v 2.8 BTS  (Batch Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerV8Document = mongoose.Document & HL7BatchTrailerV8I

const HL7BatchTrailerV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerV8I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: number[]
  
  }
  export const HL7BatchTrailerV8 = mongoose.model<HL7BatchTrailerV8Document> ("HL7BatchTrailerV8", HL7BatchTrailerV8Schema);

