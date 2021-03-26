
// Generated typescript code of HL7v 2.6 MRG  (Merge Patient Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MergePatientInformationV6Document = mongoose.Document & HL7MergePatientInformationV6I

const HL7MergePatientInformationV6Schema = new mongoose.Schema({
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
  
export interface HL7MergePatientInformationV6I extends Segment{
  priorPatientIdentifierList: string[]
  priorAlternatePatientID: string[]
  priorPatientAccountNumber: string
  priorPatientID: string
  priorVisitNumber: string
  priorAlternateVisitID: string
  priorPatientName: string[]
  
  }
  export const HL7MergePatientInformationV6 = mongoose.model<HL7MergePatientInformationV6Document> ("HL7MergePatientInformationV6", HL7MergePatientInformationV6Schema);

