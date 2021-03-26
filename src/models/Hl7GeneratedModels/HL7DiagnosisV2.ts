
// Generated typescript code of HL7v 2.2 DG1  (Diagnosis)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisV2Document = mongoose.Document & HL7DiagnosisV2I

const HL7DiagnosisV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdDiagnosis: String,
  diagnosisCodingMethod: String,
  diagnosisCode: String,
  diagnosisDescription: String,
  diagnosisDateTime: Date,
  diagnosisDrgType: String,
  majorDiagnosticCategory: String,
  diagnosticRelatedGroup: String,
  drgApprovalIndicator: String,
  drgGrouperReviewCode: String,
  outlierType: String,
  outlierDays: Number,
  outlierCost: Number,
  grouperVersionAndType: String,
  diagnosisDrgPriority: Number,
  diagnosingClinician: String,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisV2I extends Segment{
  setIdDiagnosis: string
  diagnosisCodingMethod: string
  diagnosisCode: string
  diagnosisDescription: string
  diagnosisDateTime: Date
  diagnosisDrgType: string
  majorDiagnosticCategory: string
  diagnosticRelatedGroup: string
  drgApprovalIndicator: string
  drgGrouperReviewCode: string
  outlierType: string
  outlierDays: number
  outlierCost: number
  grouperVersionAndType: string
  diagnosisDrgPriority: number
  diagnosingClinician: string
  
  }
  export const HL7DiagnosisV2 = mongoose.model<HL7DiagnosisV2Document> ("HL7DiagnosisV2", HL7DiagnosisV2Schema);

