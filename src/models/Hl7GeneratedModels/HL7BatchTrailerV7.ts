
// Generated typescript code of HL7v 2.7 BTS  (Batch Trailer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchTrailerV7Document = mongoose.Document & HL7BatchTrailerV7I

const HL7BatchTrailerV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchMessageCount: String,
  batchComment: String,
  batchTotals: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7BatchTrailerV7I extends Segment{
  batchMessageCount: string
  batchComment: string
  batchTotals: number[]
  
  }
  export const HL7BatchTrailerV7 = mongoose.model<HL7BatchTrailerV7Document> ("HL7BatchTrailerV7", HL7BatchTrailerV7Schema);

