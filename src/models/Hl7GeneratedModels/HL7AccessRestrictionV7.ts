
// Generated typescript code of HL7v 2.7 ARV  (Access Restriction)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccessRestrictionV7Document = mongoose.Document & HL7AccessRestrictionV7I

const HL7AccessRestrictionV7Schema = new mongoose.Schema({
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
  
export interface HL7AccessRestrictionV7I extends Segment{
  setId: string
  accessRestrictionActionCode: string
  accessRestrictionValue: string
  accessRestrictionReason: string[]
  specialAccessRestrictionInstructions: string[]
  accessRestrictionDateRange: string
  
  }
  export const HL7AccessRestrictionV7 = mongoose.model<HL7AccessRestrictionV7Document> ("HL7AccessRestrictionV7", HL7AccessRestrictionV7Schema);

