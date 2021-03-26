
// Generated typescript code of HL7v 2.8 DB1  (Disability)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisabilityV8Document = mongoose.Document & HL7DisabilityV8I

const HL7DisabilityV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdDb1: String,
  disabledPersonCode: String,
  disabledPersonIdentifier: Array(String),
  disabilityIndicator: String,
  disabilityStartDate: String,
  disabilityEndDate: String,
  disabilityReturnToWorkDate: String,
  disabilityUnableToWorkDate: String,
  
  }, { timestamps: true });
  
export interface HL7DisabilityV8I extends Segment{
  setIdDb1: string
  disabledPersonCode: string
  disabledPersonIdentifier: string[]
  disabilityIndicator: string
  disabilityStartDate: string
  disabilityEndDate: string
  disabilityReturnToWorkDate: string
  disabilityUnableToWorkDate: string
  
  }
  export const HL7DisabilityV8 = mongoose.model<HL7DisabilityV8Document> ("HL7DisabilityV8", HL7DisabilityV8Schema);

