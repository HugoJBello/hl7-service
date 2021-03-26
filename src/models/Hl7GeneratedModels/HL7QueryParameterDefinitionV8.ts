
// Generated typescript code of HL7v 2.8 QPD  (Query Parameter Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryParameterDefinitionV8Document = mongoose.Document & HL7QueryParameterDefinitionV8I

const HL7QueryParameterDefinitionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  messageQueryName: String,
  queryTag: String,
  userParametersInSuccessiveFields: String,
  
  }, { timestamps: true });
  
export interface HL7QueryParameterDefinitionV8I extends Segment{
  messageQueryName: string
  queryTag: string
  userParametersInSuccessiveFields: string
  
  }
  export const HL7QueryParameterDefinitionV8 = mongoose.model<HL7QueryParameterDefinitionV8Document> ("HL7QueryParameterDefinitionV8", HL7QueryParameterDefinitionV8Schema);

