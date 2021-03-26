
// Generated typescript code of HL7v 2.4 MRG  (Merge patient information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MergePatientInformationV4Document = mongoose.Document & HL7MergePatientInformationV4I

const HL7MergePatientInformationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPatientIdentifierList: Array(String),
  priorAlternatePatientID: Array(String),
  priorPatientAccountNumber: String,
  priorPatientID: String,
  priorVisitNumber: String,
  priorAlternateVisitID: String,
  priorPatientName: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MergePatientInformationV4I extends Segment{
  priorPatientIdentifierList: string[]
  priorAlternatePatientID: string[]
  priorPatientAccountNumber: string
  priorPatientID: string
  priorVisitNumber: string
  priorAlternateVisitID: string
  priorPatientName: string[]
  
  }
  export const HL7MergePatientInformationV4 = mongoose.model<HL7MergePatientInformationV4Document> ("HL7MergePatientInformationV4", HL7MergePatientInformationV4Schema);

