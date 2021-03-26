
// Generated typescript code of HL7v 2.4 DB1  (Disability)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisabilityV4Document = mongoose.Document & HL7DisabilityV4I

const HL7DisabilityV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDB1: String,
  disabledPersonCode: String,
  disabledPersonIdentifier: Array(String),
  disabilityIndicator: String,
  disabilityStartDate: String,
  disabilityEndDate: String,
  disabilityReturnToWorkDate: String,
  disabilityUnableToWorkDate: String,
  
  }, { timestamps: true });
  
export interface HL7DisabilityV4I extends Segment{
  setIDDB1: string
  disabledPersonCode: string
  disabledPersonIdentifier: string[]
  disabilityIndicator: string
  disabilityStartDate: string
  disabilityEndDate: string
  disabilityReturnToWorkDate: string
  disabilityUnableToWorkDate: string
  
  }
  export const HL7DisabilityV4 = mongoose.model<HL7DisabilityV4Document> ("HL7DisabilityV4", HL7DisabilityV4Schema);

