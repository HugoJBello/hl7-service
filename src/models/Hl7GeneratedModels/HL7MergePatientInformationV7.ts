
// Generated typescript code of HL7v 2.7 MRG  (Merge Patient Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MergePatientInformationV7Document = mongoose.Document & HL7MergePatientInformationV7I

const HL7MergePatientInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPatientIdentifierList: Array(String),
  priorAlternatePatientId: String,
  priorPatientAccountNumber: String,
  priorPatientId: String,
  priorVisitNumber: String,
  priorAlternateVisitId: String,
  priorPatientName: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MergePatientInformationV7I extends Segment{
  priorPatientIdentifierList: string[]
  priorAlternatePatientId: string
  priorPatientAccountNumber: string
  priorPatientId: string
  priorVisitNumber: string
  priorAlternateVisitId: string
  priorPatientName: string[]
  
  }
  export const HL7MergePatientInformationV7 = mongoose.model<HL7MergePatientInformationV7Document> ("HL7MergePatientInformationV7", HL7MergePatientInformationV7Schema);

