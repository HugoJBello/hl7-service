
// Generated typescript code of HL7v 2.4 ERR  (Error)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ErrorV4Document = mongoose.Document & HL7ErrorV4I

const HL7ErrorV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  errorCodeAndLocation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ErrorV4I extends Segment{
  errorCodeAndLocation: string[]
  
  }
  export const HL7ErrorV4 = mongoose.model<HL7ErrorV4Document> ("HL7ErrorV4", HL7ErrorV4Schema);

