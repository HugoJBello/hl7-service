
// Generated typescript code of HL7v 2.3 DB1  (Disability Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisabilitySegmentV3Document = mongoose.Document & HL7DisabilitySegmentV3I

const HL7DisabilitySegmentV3Schema = new mongoose.Schema({
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
  
export interface HL7DisabilitySegmentV3I extends Segment{
  setIDDB1: string
  disabledPersonCode: string
  disabledPersonIdentifier: string[]
  disabledIndicator: string
  disabilityStartDate: string
  disabilityEndDate: string
  disabilityReturnToWorkDate: string
  disabilityUnableToWorkDate: string
  
  }
  export const HL7DisabilitySegmentV3 = mongoose.model<HL7DisabilitySegmentV3Document> ("HL7DisabilitySegmentV3", HL7DisabilitySegmentV3Schema);

