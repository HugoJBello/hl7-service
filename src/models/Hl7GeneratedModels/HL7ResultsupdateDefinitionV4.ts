
// Generated typescript code of HL7v 2.4 URD  (Results/update Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResultsupdateDefinitionV4Document = mongoose.Document & HL7ResultsupdateDefinitionV4I

const HL7ResultsupdateDefinitionV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rUDateTime: Date,
  reportPriority: String,
  rUWhoSubjectDefinition: Array(String),
  rUWhatSubjectDefinition: Array(String),
  rUWhatDepartmentCode: Array(String),
  rUDisplayPrintLocations: Array(String),
  rUResultsLevel: String,
  
  }, { timestamps: true });
  
export interface HL7ResultsupdateDefinitionV4I extends Segment{
  rUDateTime: Date
  reportPriority: string
  rUWhoSubjectDefinition: string[]
  rUWhatSubjectDefinition: string[]
  rUWhatDepartmentCode: string[]
  rUDisplayPrintLocations: string[]
  rUResultsLevel: string
  
  }
  export const HL7ResultsupdateDefinitionV4 = mongoose.model<HL7ResultsupdateDefinitionV4Document> ("HL7ResultsupdateDefinitionV4", HL7ResultsupdateDefinitionV4Schema);

