
// Generated typescript code of HL7v 2.8 CDO  (Cumulative Dosage)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7CumulativeDosageV8Document = mongoose.Document & HL7CumulativeDosageV8I

const HL7CumulativeDosageV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCDO: String,
  actionCode: String,
  cumulativeDosageLimit: String,
  cumulativeDosageLimitTimeInterval: String,
  
  }, { timestamps: true });
  
export interface HL7CumulativeDosageV8I extends Segment{
  setIDCDO: string
  actionCode: string
  cumulativeDosageLimit: string
  cumulativeDosageLimitTimeInterval: string
  
  }
  export const HL7CumulativeDosageV8 = mongoose.model<HL7CumulativeDosageV8Document> ("HL7CumulativeDosageV8", HL7CumulativeDosageV8Schema);

