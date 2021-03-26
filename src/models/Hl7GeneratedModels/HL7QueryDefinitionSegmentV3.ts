
// Generated typescript code of HL7v 2.3 QRD  (Query definition segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryDefinitionSegmentV3Document = mongoose.Document & HL7QueryDefinitionSegmentV3I

const HL7QueryDefinitionSegmentV3Schema = new mongoose.Schema({
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
  whatDataCodeValueQualifier: Array(String),
  queryResultsLevel: String,
  
  }, { timestamps: true });
  
export interface HL7QueryDefinitionSegmentV3I extends Segment{
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
  whatDataCodeValueQualifier: string[]
  queryResultsLevel: string
  
  }
  export const HL7QueryDefinitionSegmentV3 = mongoose.model<HL7QueryDefinitionSegmentV3Document> ("HL7QueryDefinitionSegmentV3", HL7QueryDefinitionSegmentV3Schema);

