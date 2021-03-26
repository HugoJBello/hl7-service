
// Generated typescript code of HL7v 2.4 DG1  (Diagnosis)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisV4Document = mongoose.Document & HL7DiagnosisV4I

const HL7DiagnosisV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDG1: String,
  diagnosisCodingMethod: String,
  diagnosisCodeDG1: String,
  diagnosisDescription: String,
  diagnosisDateTime: Date,
  diagnosisType: String,
  majorDiagnosticCategory: String,
  diagnosticRelatedGroup: String,
  dRGApprovalIndicator: String,
  dRGGrouperReviewCode: String,
  outlierType: String,
  outlierDays: Number,
  outlierCost: String,
  grouperVersionAndType: String,
  diagnosisPriority: String,
  diagnosingClinician: Array(String),
  diagnosisClassification: String,
  confidentialIndicator: String,
  attestationDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisV4I extends Segment{
  setIDDG1: string
  diagnosisCodingMethod: string
  diagnosisCodeDG1: string
  diagnosisDescription: string
  diagnosisDateTime: Date
  diagnosisType: string
  majorDiagnosticCategory: string
  diagnosticRelatedGroup: string
  dRGApprovalIndicator: string
  dRGGrouperReviewCode: string
  outlierType: string
  outlierDays: number
  outlierCost: string
  grouperVersionAndType: string
  diagnosisPriority: string
  diagnosingClinician: string[]
  diagnosisClassification: string
  confidentialIndicator: string
  attestationDateTime: Date
  
  }
  export const HL7DiagnosisV4 = mongoose.model<HL7DiagnosisV4Document> ("HL7DiagnosisV4", HL7DiagnosisV4Schema);

