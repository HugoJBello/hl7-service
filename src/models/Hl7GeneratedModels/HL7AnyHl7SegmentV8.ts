
// Generated typescript code of HL7v 2.8 Hxx  (Any Hl7 Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AnyHl7SegmentV8Document = mongoose.Document & HL7AnyHl7SegmentV8I

const HL7AnyHl7SegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  hxx1: String,
  
  }, { timestamps: true });
  
export interface HL7AnyHl7SegmentV8I extends Segment{
  hxx1: string
  
  }
  export const HL7AnyHl7SegmentV8 = mongoose.model<HL7AnyHl7SegmentV8Document> ("HL7AnyHl7SegmentV8", HL7AnyHl7SegmentV8Schema);

