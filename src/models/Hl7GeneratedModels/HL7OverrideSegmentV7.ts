
// Generated typescript code of HL7v 2.7 OVR  (Override Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OverrideSegmentV7Document = mongoose.Document & HL7OverrideSegmentV7I

const HL7OverrideSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  businessRuleOverrideType: String,
  businessRuleOverrideCode: String,
  overrideComments: String,
  overrideEnteredBy: String,
  overrideAuthorizedBy: String,
  
  }, { timestamps: true });
  
export interface HL7OverrideSegmentV7I extends Segment{
  businessRuleOverrideType: string
  businessRuleOverrideCode: string
  overrideComments: string
  overrideEnteredBy: string
  overrideAuthorizedBy: string
  
  }
  export const HL7OverrideSegmentV7 = mongoose.model<HL7OverrideSegmentV7Document> ("HL7OverrideSegmentV7", HL7OverrideSegmentV7Schema);

