
// Generated typescript code of HL7v 2.2 URD  (Results/update Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResultsupdateDefinitionV2Document = mongoose.Document & HL7ResultsupdateDefinitionV2I

const HL7ResultsupdateDefinitionV2Schema = new mongoose.Schema({
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
  
export interface HL7ResultsupdateDefinitionV2I extends Segment{
  rUDateTime: Date
  reportPriority: string
  rUWhoSubjectDefinition: string[]
  rUWhatSubjectDefinition: string[]
  rUWhatDepartmentCode: string[]
  rUDisplayPrintLocations: string[]
  rUResultsLevel: string
  
  }
  export const HL7ResultsupdateDefinitionV2 = mongoose.model<HL7ResultsupdateDefinitionV2Document> ("HL7ResultsupdateDefinitionV2", HL7ResultsupdateDefinitionV2Schema);

