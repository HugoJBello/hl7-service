
// Generated typescript code of HL7v 2.7 ERR  (Error)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ErrorV7Document = mongoose.Document & HL7ErrorV7I

const HL7ErrorV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  errorCodeAndLocation: String,
  errorLocation: Array(String),
  hl7ErrorCode: String,
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
  
export interface HL7ErrorV7I extends Segment{
  errorCodeAndLocation: string
  errorLocation: string[]
  hl7ErrorCode: string
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
  export const HL7ErrorV7 = mongoose.model<HL7ErrorV7Document> ("HL7ErrorV7", HL7ErrorV7Schema);

