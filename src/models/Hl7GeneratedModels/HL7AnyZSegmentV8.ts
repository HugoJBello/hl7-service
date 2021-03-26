
// Generated typescript code of HL7v 2.8 Zxx  (Any Z Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AnyZSegmentV8Document = mongoose.Document & HL7AnyZSegmentV8I

const HL7AnyZSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  zxx1: String,
  
  }, { timestamps: true });
  
export interface HL7AnyZSegmentV8I extends Segment{
  zxx1: string
  
  }
  export const HL7AnyZSegmentV8 = mongoose.model<HL7AnyZSegmentV8Document> ("HL7AnyZSegmentV8", HL7AnyZSegmentV8Schema);

