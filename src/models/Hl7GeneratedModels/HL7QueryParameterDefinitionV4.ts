
// Generated typescript code of HL7v 2.4 QPD  (Query Parameter Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryParameterDefinitionV4Document = mongoose.Document & HL7QueryParameterDefinitionV4I

const HL7QueryParameterDefinitionV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  messageQueryName: String,
  queryTag: String,
  userParameters: String,
  
  }, { timestamps: true });
  
export interface HL7QueryParameterDefinitionV4I extends Segment{
  messageQueryName: string
  queryTag: string
  userParameters: string
  
  }
  export const HL7QueryParameterDefinitionV4 = mongoose.model<HL7QueryParameterDefinitionV4Document> ("HL7QueryParameterDefinitionV4", HL7QueryParameterDefinitionV4Schema);

