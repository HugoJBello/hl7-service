
// Generated typescript code of HL7v 2.4 QAK  (Query Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryAcknowledgmentV4Document = mongoose.Document & HL7QueryAcknowledgmentV4I

const HL7QueryAcknowledgmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  queryResponseStatus: String,
  messageQueryName: String,
  hitCountTotal: Number,
  thisPayload: Number,
  hitsRemaining: Number,
  
  }, { timestamps: true });
  
export interface HL7QueryAcknowledgmentV4I extends Segment{
  queryTag: string
  queryResponseStatus: string
  messageQueryName: string
  hitCountTotal: number
  thisPayload: number
  hitsRemaining: number
  
  }
  export const HL7QueryAcknowledgmentV4 = mongoose.model<HL7QueryAcknowledgmentV4Document> ("HL7QueryAcknowledgmentV4", HL7QueryAcknowledgmentV4Schema);

