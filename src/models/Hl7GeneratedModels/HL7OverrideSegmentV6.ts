
// Generated typescript code of HL7v 2.6 OVR  (Override Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OverrideSegmentV6Document = mongoose.Document & HL7OverrideSegmentV6I

const HL7OverrideSegmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  businessRuleOverrideType: String,
  businessRuleOverrideCode: String,
  overrideComments: String,
  overrideEnteredBy: String,
  overrideAuthorizedBy: String,
  
  }, { timestamps: true });
  
export interface HL7OverrideSegmentV6I extends Segment{
  businessRuleOverrideType: string
  businessRuleOverrideCode: string
  overrideComments: string
  overrideEnteredBy: string
  overrideAuthorizedBy: string
  
  }
  export const HL7OverrideSegmentV6 = mongoose.model<HL7OverrideSegmentV6Document> ("HL7OverrideSegmentV6", HL7OverrideSegmentV6Schema);

