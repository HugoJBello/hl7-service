
// Generated typescript code of HL7v 2.8 QAK  (Query Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryAcknowledgmentV8Document = mongoose.Document & HL7QueryAcknowledgmentV8I

const HL7QueryAcknowledgmentV8Schema = new mongoose.Schema({
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
  
export interface HL7QueryAcknowledgmentV8I extends Segment{
  queryTag: string
  queryResponseStatus: string
  messageQueryName: string
  hitCountTotal: number
  thisPayload: number
  hitsRemaining: number
  
  }
  export const HL7QueryAcknowledgmentV8 = mongoose.model<HL7QueryAcknowledgmentV8Document> ("HL7QueryAcknowledgmentV8", HL7QueryAcknowledgmentV8Schema);

