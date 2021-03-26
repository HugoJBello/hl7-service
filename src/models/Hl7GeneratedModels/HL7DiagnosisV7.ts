
// Generated typescript code of HL7v 2.7 DG1  (Diagnosis)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisV7Document = mongoose.Document & HL7DiagnosisV7I

const HL7DiagnosisV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdDg1: String,
  diagnosisCodingMethod: String,
  diagnosisCodeDg1: String,
  diagnosisDescription: String,
  diagnosisDateTime: String,
  diagnosisType: String,
  majorDiagnosticCategory: String,
  diagnosticRelatedGroup: String,
  drgApprovalIndicator: String,
  drgGrouperReviewCode: String,
  outlierType: String,
  outlierDays: Number,
  outlierCost: String,
  grouperVersionAndType: String,
  diagnosisPriority: Number,
  diagnosingClinician: Array(String),
  diagnosisClassification: String,
  confidentialIndicator: String,
  attestationDateTime: String,
  diagnosisIdentifier: String,
  diagnosisActionCode: String,
  parentDiagnosis: String,
  drgCclValueCode: String,
  drgGroupingUsage: String,
  drgDiagnosisDeterminationStatus: String,
  presentOnAdmissionPoaIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisV7I extends Segment{
  setIdDg1: string
  diagnosisCodingMethod: string
  diagnosisCodeDg1: string
  diagnosisDescription: string
  diagnosisDateTime: string
  diagnosisType: string
  majorDiagnosticCategory: string
  diagnosticRelatedGroup: string
  drgApprovalIndicator: string
  drgGrouperReviewCode: string
  outlierType: string
  outlierDays: number
  outlierCost: string
  grouperVersionAndType: string
  diagnosisPriority: number
  diagnosingClinician: string[]
  diagnosisClassification: string
  confidentialIndicator: string
  attestationDateTime: string
  diagnosisIdentifier: string
  diagnosisActionCode: string
  parentDiagnosis: string
  drgCclValueCode: string
  drgGroupingUsage: string
  drgDiagnosisDeterminationStatus: string
  presentOnAdmissionPoaIndicator: string
  
  }
  export const HL7DiagnosisV7 = mongoose.model<HL7DiagnosisV7Document> ("HL7DiagnosisV7", HL7DiagnosisV7Schema);

