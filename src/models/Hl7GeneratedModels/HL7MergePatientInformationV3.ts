
// Generated typescript code of HL7v 2.3 MRG  (Merge patient information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MergePatientInformationV3Document = mongoose.Document & HL7MergePatientInformationV3I

const HL7MergePatientInformationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPatientIDInternal: Array(String),
  priorAlternatePatientID: Array(String),
  priorPatientAccountNumber: String,
  priorPatientIDExternal: String,
  priorVisitNumber: String,
  priorAlternateVisitID: String,
  priorPatientName: String,
  
  }, { timestamps: true });
  
export interface HL7MergePatientInformationV3I extends Segment{
  priorPatientIDInternal: string[]
  priorAlternatePatientID: string[]
  priorPatientAccountNumber: string
  priorPatientIDExternal: string
  priorVisitNumber: string
  priorAlternateVisitID: string
  priorPatientName: string
  
  }
  export const HL7MergePatientInformationV3 = mongoose.model<HL7MergePatientInformationV3Document> ("HL7MergePatientInformationV3", HL7MergePatientInformationV3Schema);

