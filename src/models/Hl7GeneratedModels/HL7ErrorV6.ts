
// Generated typescript code of HL7v 2.6 ERR  (Error)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ErrorV6Document = mongoose.Document & HL7ErrorV6I

const HL7ErrorV6Schema = new mongoose.Schema({
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
  
export interface HL7ErrorV6I extends Segment{
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
  export const HL7ErrorV6 = mongoose.model<HL7ErrorV6Document> ("HL7ErrorV6", HL7ErrorV6Schema);

