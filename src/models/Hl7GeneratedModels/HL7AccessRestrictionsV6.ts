
// Generated typescript code of HL7v 2.6 ARV  (Access Restrictions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccessRestrictionsV6Document = mongoose.Document & HL7AccessRestrictionsV6I

const HL7AccessRestrictionsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setID: String,
  accessRestrictionActionCode: String,
  accessRestrictionValue: String,
  accessRestrictionReason: Array(String),
  specialAccessRestrictionInstructions: Array(String),
  accessRestrictionDateRange: String,
  
  }, { timestamps: true });
  
export interface HL7AccessRestrictionsV6I extends Segment{
  setID: string
  accessRestrictionActionCode: string
  accessRestrictionValue: string
  accessRestrictionReason: string[]
  specialAccessRestrictionInstructions: string[]
  accessRestrictionDateRange: string
  
  }
  export const HL7AccessRestrictionsV6 = mongoose.model<HL7AccessRestrictionsV6Document> ("HL7AccessRestrictionsV6", HL7AccessRestrictionsV6Schema);

