
// Generated typescript code of HL7v 2.8 OVR  (Override Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OverrideSegmentV8Document = mongoose.Document & HL7OverrideSegmentV8I

const HL7OverrideSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  businessRuleOverrideType: String,
  businessRuleOverrideCode: String,
  overrideComments: String,
  overrideEnteredBy: String,
  overrideAuthorizedBy: String,
  
  }, { timestamps: true });
  
export interface HL7OverrideSegmentV8I extends Segment{
  businessRuleOverrideType: string
  businessRuleOverrideCode: string
  overrideComments: string
  overrideEnteredBy: string
  overrideAuthorizedBy: string
  
  }
  export const HL7OverrideSegmentV8 = mongoose.model<HL7OverrideSegmentV8Document> ("HL7OverrideSegmentV8", HL7OverrideSegmentV8Schema);

