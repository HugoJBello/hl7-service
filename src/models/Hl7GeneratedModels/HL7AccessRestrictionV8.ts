
// Generated typescript code of HL7v 2.8 ARV  (Access Restriction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccessRestrictionV8Document = mongoose.Document & HL7AccessRestrictionV8I

const HL7AccessRestrictionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setId: String,
  accessRestrictionActionCode: String,
  accessRestrictionValue: String,
  accessRestrictionReason: Array(String),
  specialAccessRestrictionInstructions: Array(String),
  accessRestrictionDateRange: String,
  
  }, { timestamps: true });
  
export interface HL7AccessRestrictionV8I extends Segment{
  setId: string
  accessRestrictionActionCode: string
  accessRestrictionValue: string
  accessRestrictionReason: string[]
  specialAccessRestrictionInstructions: string[]
  accessRestrictionDateRange: string
  
  }
  export const HL7AccessRestrictionV8 = mongoose.model<HL7AccessRestrictionV8Document> ("HL7AccessRestrictionV8", HL7AccessRestrictionV8Schema);

