
// Generated typescript code of HL7v 2.6 DG1  (Diagnosis)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisV6Document = mongoose.Document & HL7DiagnosisV6I

const HL7DiagnosisV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDG1: String,
  diagnosisCodingMethod: String,
  diagnosisCodeDG1: String,
  diagnosisDescription: String,
  diagnosisDateTime: String,
  diagnosisType: String,
  majorDiagnosticCategory: String,
  diagnosticRelatedGroup: String,
  dRGApprovalIndicator: String,
  dRGGrouperReviewCode: String,
  outlierType: String,
  outlierDays: String,
  outlierCost: String,
  grouperVersionAndType: String,
  diagnosisPriority: String,
  diagnosingClinician: Array(String),
  diagnosisClassification: String,
  confidentialIndicator: String,
  attestationDateTime: String,
  diagnosisIdentifier: String,
  diagnosisActionCode: String,
  parentDiagnosis: String,
  dRGCCLValueCode: String,
  dRGGroupingUsage: String,
  dRGDiagnosisDeterminationStatus: String,
  presentOnAdmissionPOAIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisV6I extends Segment{
  setIDDG1: string
  diagnosisCodingMethod: string
  diagnosisCodeDG1: string
  diagnosisDescription: string
  diagnosisDateTime: string
  diagnosisType: string
  majorDiagnosticCategory: string
  diagnosticRelatedGroup: string
  dRGApprovalIndicator: string
  dRGGrouperReviewCode: string
  outlierType: string
  outlierDays: string
  outlierCost: string
  grouperVersionAndType: string
  diagnosisPriority: string
  diagnosingClinician: string[]
  diagnosisClassification: string
  confidentialIndicator: string
  attestationDateTime: string
  diagnosisIdentifier: string
  diagnosisActionCode: string
  parentDiagnosis: string
  dRGCCLValueCode: string
  dRGGroupingUsage: string
  dRGDiagnosisDeterminationStatus: string
  presentOnAdmissionPOAIndicator: string
  
  }
  export const HL7DiagnosisV6 = mongoose.model<HL7DiagnosisV6Document> ("HL7DiagnosisV6", HL7DiagnosisV6Schema);

