
// Generated typescript code of HL7v 2.6 DB1  (Disability)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisabilityV6Document = mongoose.Document & HL7DisabilityV6I

const HL7DisabilityV6Schema = new mongoose.Schema({
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
  
export interface HL7DisabilityV6I extends Segment{
  setIDDB1: string
  disabledPersonCode: string
  disabledPersonIdentifier: string[]
  disabledIndicator: string
  disabilityStartDate: string
  disabilityEndDate: string
  disabilityReturnToWorkDate: string
  disabilityUnableToWorkDate: string
  
  }
  export const HL7DisabilityV6 = mongoose.model<HL7DisabilityV6Document> ("HL7DisabilityV6", HL7DisabilityV6Schema);

