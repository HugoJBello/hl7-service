
// Generated typescript code of HL7v 2.4 PR1  (Procedures)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProceduresV4Document = mongoose.Document & HL7ProceduresV4I

const HL7ProceduresV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPR1: String,
  procedureCodingMethod: String,
  procedureCode: String,
  procedureDescription: String,
  procedureDateTime: Date,
  procedureFunctionalType: String,
  procedureMinutes: Number,
  anesthesiologist: Array(String),
  anesthesiaCode: String,
  anesthesiaMinutes: Number,
  surgeon: Array(String),
  procedurePractitioner: Array(String),
  consentCode: String,
  procedurePriority: String,
  associatedDiagnosisCode: String,
  procedureCodeModifier: Array(String),
  procedureDRGType: String,
  tissueTypeCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ProceduresV4I extends Segment{
  setIDPR1: string
  procedureCodingMethod: string
  procedureCode: string
  procedureDescription: string
  procedureDateTime: Date
  procedureFunctionalType: string
  procedureMinutes: number
  anesthesiologist: string[]
  anesthesiaCode: string
  anesthesiaMinutes: number
  surgeon: string[]
  procedurePractitioner: string[]
  consentCode: string
  procedurePriority: string
  associatedDiagnosisCode: string
  procedureCodeModifier: string[]
  procedureDRGType: string
  tissueTypeCode: string[]
  
  }
  export const HL7ProceduresV4 = mongoose.model<HL7ProceduresV4Document> ("HL7ProceduresV4", HL7ProceduresV4Schema);

