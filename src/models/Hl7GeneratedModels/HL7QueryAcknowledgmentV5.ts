
// Generated typescript code of HL7v 2.5 QAK  (Query Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryAcknowledgmentV5Document = mongoose.Document & HL7QueryAcknowledgmentV5I

const HL7QueryAcknowledgmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  queryResponseStatus: String,
  messageQueryName: String,
  hitCount: Number,
  thisPayload: Number,
  hitsRemaining: Number,
  
  }, { timestamps: true });
  
export interface HL7QueryAcknowledgmentV5I extends Segment{
  queryTag: string
  queryResponseStatus: string
  messageQueryName: string
  hitCount: number
  thisPayload: number
  hitsRemaining: number
  
  }
  export const HL7QueryAcknowledgmentV5 = mongoose.model<HL7QueryAcknowledgmentV5Document> ("HL7QueryAcknowledgmentV5", HL7QueryAcknowledgmentV5Schema);

