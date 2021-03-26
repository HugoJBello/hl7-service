
// Generated typescript code of HL7v 2.2 Zxx  (Any Z Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AnyZSegmentV2Document = mongoose.Document & HL7AnyZSegmentV2I

const HL7AnyZSegmentV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  zxx1: String,
  
  }, { timestamps: true });
  
export interface HL7AnyZSegmentV2I extends Segment{
  zxx1: string
  
  }
  export const HL7AnyZSegmentV2 = mongoose.model<HL7AnyZSegmentV2Document> ("HL7AnyZSegmentV2", HL7AnyZSegmentV2Schema);

