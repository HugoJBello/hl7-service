
// Generated typescript code of HL7v 2.5 ERR  (Error)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ErrorV5Document = mongoose.Document & HL7ErrorV5I

const HL7ErrorV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  errorCodeAndLocation: Array(String),
  errorLocation: Array(String),
  hL7ErrorCode: String,
  severity: String,
  applicationErrorCode: String,
  applicationErrorParameter: Array(String),
  diagnosticInformation: String,
  userMessage: String,
  informPersonIndicator: Array(String),
  overrideType: String,
  overrideReasonCode: Array(String),
  helpDeskContactPoint: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ErrorV5I extends Segment{
  errorCodeAndLocation: string[]
  errorLocation: string[]
  hL7ErrorCode: string
  severity: string
  applicationErrorCode: string
  applicationErrorParameter: string[]
  diagnosticInformation: string
  userMessage: string
  informPersonIndicator: string[]
  overrideType: string
  overrideReasonCode: string[]
  helpDeskContactPoint: string[]
  
  }
  export const HL7ErrorV5 = mongoose.model<HL7ErrorV5Document> ("HL7ErrorV5", HL7ErrorV5Schema);

