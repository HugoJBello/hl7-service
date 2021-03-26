
// Generated typescript code of HL7v 2.2 ERR  (Error)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ErrorV2Document = mongoose.Document & HL7ErrorV2I

const HL7ErrorV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  errorCodeAndLocation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ErrorV2I extends Segment{
  errorCodeAndLocation: string[]
  
  }
  export const HL7ErrorV2 = mongoose.model<HL7ErrorV2Document> ("HL7ErrorV2", HL7ErrorV2Schema);

