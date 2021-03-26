
// Generated typescript code of HL7v 2.5 RCP  (Response Control Parameter)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResponseControlParameterV5Document = mongoose.Document & HL7ResponseControlParameterV5I

const HL7ResponseControlParameterV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryPriority: String,
  quantityLimitedRequest: String,
  responseModality: String,
  executionAndDeliveryTime: Date,
  modifyIndicator: String,
  sortbyField: Array(String),
  segmentGroupInclusion: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ResponseControlParameterV5I extends Segment{
  queryPriority: string
  quantityLimitedRequest: string
  responseModality: string
  executionAndDeliveryTime: Date
  modifyIndicator: string
  sortbyField: string[]
  segmentGroupInclusion: string[]
  
  }
  export const HL7ResponseControlParameterV5 = mongoose.model<HL7ResponseControlParameterV5Document> ("HL7ResponseControlParameterV5", HL7ResponseControlParameterV5Schema);

