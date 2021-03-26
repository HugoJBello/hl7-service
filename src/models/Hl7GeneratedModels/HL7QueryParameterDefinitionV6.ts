
// Generated typescript code of HL7v 2.6 QPD  (Query Parameter Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryParameterDefinitionV6Document = mongoose.Document & HL7QueryParameterDefinitionV6I

const HL7QueryParameterDefinitionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  messageQueryName: String,
  queryTag: String,
  userParametersInSuccessiveFields: String,
  
  }, { timestamps: true });
  
export interface HL7QueryParameterDefinitionV6I extends Segment{
  messageQueryName: string
  queryTag: string
  userParametersInSuccessiveFields: string
  
  }
  export const HL7QueryParameterDefinitionV6 = mongoose.model<HL7QueryParameterDefinitionV6Document> ("HL7QueryParameterDefinitionV6", HL7QueryParameterDefinitionV6Schema);

