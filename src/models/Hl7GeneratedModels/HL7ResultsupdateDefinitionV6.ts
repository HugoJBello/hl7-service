
// Generated typescript code of HL7v 2.6 URD  (Results/update Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResultsupdateDefinitionV6Document = mongoose.Document & HL7ResultsupdateDefinitionV6I

const HL7ResultsupdateDefinitionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  rUDateTime: String,
  reportPriority: String,
  rUWhoSubjectDefinition: Array(String),
  rUWhatSubjectDefinition: Array(String),
  rUWhatDepartmentCode: Array(String),
  rUDisplayPrintLocations: Array(String),
  rUResultsLevel: String,
  
  }, { timestamps: true });
  
export interface HL7ResultsupdateDefinitionV6I extends Segment{
  rUDateTime: string
  reportPriority: string
  rUWhoSubjectDefinition: string[]
  rUWhatSubjectDefinition: string[]
  rUWhatDepartmentCode: string[]
  rUDisplayPrintLocations: string[]
  rUResultsLevel: string
  
  }
  export const HL7ResultsupdateDefinitionV6 = mongoose.model<HL7ResultsupdateDefinitionV6Document> ("HL7ResultsupdateDefinitionV6", HL7ResultsupdateDefinitionV6Schema);

