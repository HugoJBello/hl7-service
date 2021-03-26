
// Generated typescript code of HL7v 2.6 QRD  (Original-Style Query Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7OriginalStyleQueryDefinitionV6Document = mongoose.Document & HL7OriginalStyleQueryDefinitionV6I

const HL7OriginalStyleQueryDefinitionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryDateTime: String,
  queryFormatCode: String,
  queryPriority: String,
  queryID: String,
  deferredResponseType: String,
  deferredResponseDateTime: String,
  quantityLimitedRequest: String,
  whoSubjectFilter: Array(String),
  whatSubjectFilter: Array(String),
  whatDepartmentDataCode: Array(String),
  whatDataCodeValueQual: Array(String),
  queryResultsLevel: String,
  
  }, { timestamps: true });
  
export interface HL7OriginalStyleQueryDefinitionV6I extends Segment{
  queryDateTime: string
  queryFormatCode: string
  queryPriority: string
  queryID: string
  deferredResponseType: string
  deferredResponseDateTime: string
  quantityLimitedRequest: string
  whoSubjectFilter: string[]
  whatSubjectFilter: string[]
  whatDepartmentDataCode: string[]
  whatDataCodeValueQual: string[]
  queryResultsLevel: string
  
  }
  export const HL7OriginalStyleQueryDefinitionV6 = mongoose.model<HL7OriginalStyleQueryDefinitionV6Document> ("HL7OriginalStyleQueryDefinitionV6", HL7OriginalStyleQueryDefinitionV6Schema);

