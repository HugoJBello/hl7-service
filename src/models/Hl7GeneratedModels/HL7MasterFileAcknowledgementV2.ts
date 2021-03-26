
// Generated typescript code of HL7v 2.2 MFA  (Master File Acknowledgement)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgementV2Document = mongoose.Document & HL7MasterFileAcknowledgementV2I

const HL7MasterFileAcknowledgementV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordlevelEventCode: String,
  mfnControlId: String,
  eventCompletionDateTime: Date,
  errorReturnCodeAndOrText: String,
  primaryKeyValue: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileAcknowledgementV2I extends Segment{
  recordlevelEventCode: string
  mfnControlId: string
  eventCompletionDateTime: Date
  errorReturnCodeAndOrText: string
  primaryKeyValue: string[]
  
  }
  export const HL7MasterFileAcknowledgementV2 = mongoose.model<HL7MasterFileAcknowledgementV2Document> ("HL7MasterFileAcknowledgementV2", HL7MasterFileAcknowledgementV2Schema);

