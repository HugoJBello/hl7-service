
// Generated typescript code of HL7v 2.6 QAK  (Query Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryAcknowledgmentV6Document = mongoose.Document & HL7QueryAcknowledgmentV6I

const HL7QueryAcknowledgmentV6Schema = new mongoose.Schema({
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
  
export interface HL7QueryAcknowledgmentV6I extends Segment{
  queryTag: string
  queryResponseStatus: string
  messageQueryName: string
  hitCount: number
  thisPayload: number
  hitsRemaining: number
  
  }
  export const HL7QueryAcknowledgmentV6 = mongoose.model<HL7QueryAcknowledgmentV6Document> ("HL7QueryAcknowledgmentV6", HL7QueryAcknowledgmentV6Schema);

