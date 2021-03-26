
// Generated typescript code of HL7v 2.3 DG1  (Diagnosis)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisV3Document = mongoose.Document & HL7DiagnosisV3I

const HL7DiagnosisV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDiagnosis: String,
  diagnosisCodingMethod: String,
  diagnosisCode: String,
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
  diagnosisPriority: Number,
  diagnosingClinician: Array(String),
  diagnosisClassification: String,
  confidentialIndicator: String,
  attestationDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisV3I extends Segment{
  setIDDiagnosis: string
  diagnosisCodingMethod: string
  diagnosisCode: string
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
  diagnosisPriority: number
  diagnosingClinician: string[]
  diagnosisClassification: string
  confidentialIndicator: string
  attestationDateTime: Date
  
  }
  export const HL7DiagnosisV3 = mongoose.model<HL7DiagnosisV3Document> ("HL7DiagnosisV3", HL7DiagnosisV3Schema);

