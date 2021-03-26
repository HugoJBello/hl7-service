
// Generated typescript code of HL7v 2.5 DB1  (Disability)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisabilityV5Document = mongoose.Document & HL7DisabilityV5I

const HL7DisabilityV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDB1: String,
  disabledPersonCode: String,
  disabledPersonIdentifier: Array(String),
  disabledIndicator: String,
  disabilityStartDate: String,
  disabilityEndDate: String,
  disabilityReturnToWorkDate: String,
  disabilityUnableToWorkDate: String,
  
  }, { timestamps: true });
  
export interface HL7DisabilityV5I extends Segment{
  setIDDB1: string
  disabledPersonCode: string
  disabledPersonIdentifier: string[]
  disabledIndicator: string
  disabilityStartDate: string
  disabilityEndDate: string
  disabilityReturnToWorkDate: string
  disabilityUnableToWorkDate: string
  
  }
  export const HL7DisabilityV5 = mongoose.model<HL7DisabilityV5Document> ("HL7DisabilityV5", HL7DisabilityV5Schema);

