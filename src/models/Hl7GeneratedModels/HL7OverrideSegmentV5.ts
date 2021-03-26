
// Generated typescript code of HL7v 2.5 OVR  (Override Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OverrideSegmentV5Document = mongoose.Document & HL7OverrideSegmentV5I

const HL7OverrideSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  businessRuleOverrideType: String,
  businessRuleOverrideCode: String,
  overrideComments: String,
  overrideEnteredBy: String,
  overrideAuthorizedBy: String,
  
  }, { timestamps: true });
  
export interface HL7OverrideSegmentV5I extends Segment{
  businessRuleOverrideType: string
  businessRuleOverrideCode: string
  overrideComments: string
  overrideEnteredBy: string
  overrideAuthorizedBy: string
  
  }
  export const HL7OverrideSegmentV5 = mongoose.model<HL7OverrideSegmentV5Document> ("HL7OverrideSegmentV5", HL7OverrideSegmentV5Schema);

