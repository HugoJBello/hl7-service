
// Generated typescript code of HL7v 2.7 QPD  (Query Parameter Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryParameterDefinitionV7Document = mongoose.Document & HL7QueryParameterDefinitionV7I

const HL7QueryParameterDefinitionV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  messageQueryName: String,
  queryTag: String,
  userParametersInSuccessiveFields: String,
  
  }, { timestamps: true });
  
export interface HL7QueryParameterDefinitionV7I extends Segment{
  messageQueryName: string
  queryTag: string
  userParametersInSuccessiveFields: string
  
  }
  export const HL7QueryParameterDefinitionV7 = mongoose.model<HL7QueryParameterDefinitionV7Document> ("HL7QueryParameterDefinitionV7", HL7QueryParameterDefinitionV7Schema);

