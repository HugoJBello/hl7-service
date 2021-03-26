
// Generated typescript code of HL7v 2.7 DB1  (Disability)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisabilityV7Document = mongoose.Document & HL7DisabilityV7I

const HL7DisabilityV7Schema = new mongoose.Schema({
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
  
export interface HL7DisabilityV7I extends Segment{
  setIdDb1: string
  disabledPersonCode: string
  disabledPersonIdentifier: string[]
  disabilityIndicator: string
  disabilityStartDate: string
  disabilityEndDate: string
  disabilityReturnToWorkDate: string
  disabilityUnableToWorkDate: string
  
  }
  export const HL7DisabilityV7 = mongoose.model<HL7DisabilityV7Document> ("HL7DisabilityV7", HL7DisabilityV7Schema);

