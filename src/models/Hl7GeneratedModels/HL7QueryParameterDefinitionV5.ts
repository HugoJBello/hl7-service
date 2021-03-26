
// Generated typescript code of HL7v 2.5 QPD  (Query Parameter Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryParameterDefinitionV5Document = mongoose.Document & HL7QueryParameterDefinitionV5I

const HL7QueryParameterDefinitionV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  messageQueryName: String,
  queryTag: String,
  userParametersInSuccessiveFields: String,
  
  }, { timestamps: true });
  
export interface HL7QueryParameterDefinitionV5I extends Segment{
  messageQueryName: string
  queryTag: string
  userParametersInSuccessiveFields: string
  
  }
  export const HL7QueryParameterDefinitionV5 = mongoose.model<HL7QueryParameterDefinitionV5Document> ("HL7QueryParameterDefinitionV5", HL7QueryParameterDefinitionV5Schema);

