
// Generated typescript code of HL7v 2.3 URD  (Results/update definition segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ResultsupdateDefinitionSegmentV3Document = mongoose.Document & HL7ResultsupdateDefinitionSegmentV3I

const HL7ResultsupdateDefinitionSegmentV3Schema = new mongoose.Schema({
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
  
export interface HL7ResultsupdateDefinitionSegmentV3I extends Segment{
  rUDateTime: Date
  reportPriority: string
  rUWhoSubjectDefinition: string[]
  rUWhatSubjectDefinition: string[]
  rUWhatDepartmentCode: string[]
  rUDisplayPrintLocations: string[]
  rUResultsLevel: string
  
  }
  export const HL7ResultsupdateDefinitionSegmentV3 = mongoose.model<HL7ResultsupdateDefinitionSegmentV3Document> ("HL7ResultsupdateDefinitionSegmentV3", HL7ResultsupdateDefinitionSegmentV3Schema);

