
// Generated typescript code of HL7v 2.8 RCP  (Response Control Parameter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResponseControlParameterV8Document = mongoose.Document & HL7ResponseControlParameterV8I

const HL7ResponseControlParameterV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryPriority: String,
  quantityLimitedRequest: String,
  responseModality: String,
  executionAndDeliveryTime: String,
  modifyIndicator: String,
  sortbyField: Array(String),
  segmentGroupInclusion: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ResponseControlParameterV8I extends Segment{
  queryPriority: string
  quantityLimitedRequest: string
  responseModality: string
  executionAndDeliveryTime: string
  modifyIndicator: string
  sortbyField: string[]
  segmentGroupInclusion: string[]
  
  }
  export const HL7ResponseControlParameterV8 = mongoose.model<HL7ResponseControlParameterV8Document> ("HL7ResponseControlParameterV8", HL7ResponseControlParameterV8Schema);

