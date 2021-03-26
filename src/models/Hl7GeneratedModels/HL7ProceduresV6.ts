
// Generated typescript code of HL7v 2.6 PR1  (Procedures)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProceduresV6Document = mongoose.Document & HL7ProceduresV6I

const HL7ProceduresV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPR1: String,
  procedureCodingMethod: String,
  procedureCode: String,
  procedureDescription: String,
  procedureDateTime: String,
  procedureFunctionalType: String,
  procedureMinutes: Number,
  anesthesiologist: String,
  anesthesiaCode: String,
  anesthesiaMinutes: Number,
  surgeon: String,
  procedurePractitioner: String,
  consentCode: String,
  procedurePriority: String,
  associatedDiagnosisCode: String,
  procedureCodeModifier: Array(String),
  procedureDRGType: String,
  tissueTypeCode: Array(String),
  procedureIdentifier: String,
  procedureActionCode: String,
  dRGProcedureDeterminationStatus: String,
  dRGProcedureRelevance: String,
  
  }, { timestamps: true });
  
export interface HL7ProceduresV6I extends Segment{
  setIDPR1: string
  procedureCodingMethod: string
  procedureCode: string
  procedureDescription: string
  procedureDateTime: string
  procedureFunctionalType: string
  procedureMinutes: number
  anesthesiologist: string
  anesthesiaCode: string
  anesthesiaMinutes: number
  surgeon: string
  procedurePractitioner: string
  consentCode: string
  procedurePriority: string
  associatedDiagnosisCode: string
  procedureCodeModifier: string[]
  procedureDRGType: string
  tissueTypeCode: string[]
  procedureIdentifier: string
  procedureActionCode: string
  dRGProcedureDeterminationStatus: string
  dRGProcedureRelevance: string
  
  }
  export const HL7ProceduresV6 = mongoose.model<HL7ProceduresV6Document> ("HL7ProceduresV6", HL7ProceduresV6Schema);

