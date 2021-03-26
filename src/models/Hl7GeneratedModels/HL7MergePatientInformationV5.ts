
// Generated typescript code of HL7v 2.5 MRG  (Merge Patient Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MergePatientInformationV5Document = mongoose.Document & HL7MergePatientInformationV5I

const HL7MergePatientInformationV5Schema = new mongoose.Schema({
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
  
export interface HL7MergePatientInformationV5I extends Segment{
  priorPatientIdentifierList: string[]
  priorAlternatePatientID: string[]
  priorPatientAccountNumber: string
  priorPatientID: string
  priorVisitNumber: string
  priorAlternateVisitID: string
  priorPatientName: string[]
  
  }
  export const HL7MergePatientInformationV5 = mongoose.model<HL7MergePatientInformationV5Document> ("HL7MergePatientInformationV5", HL7MergePatientInformationV5Schema);

