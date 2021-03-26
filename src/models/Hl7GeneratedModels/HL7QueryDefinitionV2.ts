
// Generated typescript code of HL7v 2.2 QRD  (Query Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryDefinitionV2Document = mongoose.Document & HL7QueryDefinitionV2I

const HL7QueryDefinitionV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryDateTime: Date,
  queryFormatCode: String,
  queryPriority: String,
  queryId: String,
  deferredResponseType: String,
  deferredResponseDateTime: Date,
  quantityLimitedRequest: String,
  whoSubjectFilter: Array(String),
  whatSubjectFilter: Array(String),
  whatDepartmentDataCode: Array(String),
  whatDataCodeValueQualifier: Array(String),
  queryResultsLevel: String,
  
  }, { timestamps: true });
  
export interface HL7QueryDefinitionV2I extends Segment{
  queryDateTime: Date
  queryFormatCode: string
  queryPriority: string
  queryId: string
  deferredResponseType: string
  deferredResponseDateTime: Date
  quantityLimitedRequest: string
  whoSubjectFilter: string[]
  whatSubjectFilter: string[]
  whatDepartmentDataCode: string[]
  whatDataCodeValueQualifier: string[]
  queryResultsLevel: string
  
  }
  export const HL7QueryDefinitionV2 = mongoose.model<HL7QueryDefinitionV2Document> ("HL7QueryDefinitionV2", HL7QueryDefinitionV2Schema);

