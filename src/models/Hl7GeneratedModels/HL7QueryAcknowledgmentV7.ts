
// Generated typescript code of HL7v 2.7 QAK  (Query Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryAcknowledgmentV7Document = mongoose.Document & HL7QueryAcknowledgmentV7I

const HL7QueryAcknowledgmentV7Schema = new mongoose.Schema({
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
  
export interface HL7QueryAcknowledgmentV7I extends Segment{
  queryTag: string
  queryResponseStatus: string
  messageQueryName: string
  hitCountTotal: number
  thisPayload: number
  hitsRemaining: number
  
  }
  export const HL7QueryAcknowledgmentV7 = mongoose.model<HL7QueryAcknowledgmentV7Document> ("HL7QueryAcknowledgmentV7", HL7QueryAcknowledgmentV7Schema);

