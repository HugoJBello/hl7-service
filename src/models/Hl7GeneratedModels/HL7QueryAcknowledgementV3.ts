
// Generated typescript code of HL7v 2.3 QAK  (Query Acknowledgement)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryAcknowledgementV3Document = mongoose.Document & HL7QueryAcknowledgementV3I

const HL7QueryAcknowledgementV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  queryResponseStatus: String,
  
  }, { timestamps: true });
  
export interface HL7QueryAcknowledgementV3I extends Segment{
  queryTag: string
  queryResponseStatus: string
  
  }
  export const HL7QueryAcknowledgementV3 = mongoose.model<HL7QueryAcknowledgementV3Document> ("HL7QueryAcknowledgementV3", HL7QueryAcknowledgementV3Schema);

