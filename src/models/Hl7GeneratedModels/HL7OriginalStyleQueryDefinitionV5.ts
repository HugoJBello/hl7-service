
// Generated typescript code of HL7v 2.5 QRD  (Original-Style Query Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OriginalStyleQueryDefinitionV5Document = mongoose.Document & HL7OriginalStyleQueryDefinitionV5I

const HL7OriginalStyleQueryDefinitionV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryDateTime: Date,
  queryFormatCode: String,
  queryPriority: String,
  queryID: String,
  deferredResponseType: String,
  deferredResponseDateTime: Date,
  quantityLimitedRequest: String,
  whoSubjectFilter: Array(String),
  whatSubjectFilter: Array(String),
  whatDepartmentDataCode: Array(String),
  whatDataCodeValueQual: Array(String),
  queryResultsLevel: String,
  
  }, { timestamps: true });
  
export interface HL7OriginalStyleQueryDefinitionV5I extends Segment{
  queryDateTime: Date
  queryFormatCode: string
  queryPriority: string
  queryID: string
  deferredResponseType: string
  deferredResponseDateTime: Date
  quantityLimitedRequest: string
  whoSubjectFilter: string[]
  whatSubjectFilter: string[]
  whatDepartmentDataCode: string[]
  whatDataCodeValueQual: string[]
  queryResultsLevel: string
  
  }
  export const HL7OriginalStyleQueryDefinitionV5 = mongoose.model<HL7OriginalStyleQueryDefinitionV5Document> ("HL7OriginalStyleQueryDefinitionV5", HL7OriginalStyleQueryDefinitionV5Schema);

