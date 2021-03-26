
// Generated typescript code of HL7v 2.7 PR1  (Procedures)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProceduresV7Document = mongoose.Document & HL7ProceduresV7I

const HL7ProceduresV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPr1: String,
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
  procedurePriority: Number,
  associatedDiagnosisCode: String,
  procedureCodeModifier: Array(String),
  procedureDrgType: String,
  tissueTypeCode: Array(String),
  procedureIdentifier: String,
  procedureActionCode: String,
  drgProcedureDeterminationStatus: String,
  drgProcedureRelevance: String,
  treatingOrganizationalUnit: Array(String),
  respiratoryWithinSurgery: String,
  parentProcedureId: String,
  
  }, { timestamps: true });
  
export interface HL7ProceduresV7I extends Segment{
  setIdPr1: string
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
  procedurePriority: number
  associatedDiagnosisCode: string
  procedureCodeModifier: string[]
  procedureDrgType: string
  tissueTypeCode: string[]
  procedureIdentifier: string
  procedureActionCode: string
  drgProcedureDeterminationStatus: string
  drgProcedureRelevance: string
  treatingOrganizationalUnit: string[]
  respiratoryWithinSurgery: string
  parentProcedureId: string
  
  }
  export const HL7ProceduresV7 = mongoose.model<HL7ProceduresV7Document> ("HL7ProceduresV7", HL7ProceduresV7Schema);

