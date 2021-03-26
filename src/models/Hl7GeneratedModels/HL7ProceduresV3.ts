
// Generated typescript code of HL7v 2.3 PR1  (Procedures)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProceduresV3Document = mongoose.Document & HL7ProceduresV3I

const HL7ProceduresV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDProcedure: String,
  procedureCodingMethod: String,
  procedureCode: String,
  procedureDescription: String,
  procedureDateTime: Date,
  procedureType: String,
  procedureMinutes: Number,
  anesthesiologist: Array(String),
  anesthesiaCode: String,
  anesthesiaMinutes: Number,
  surgeon: Array(String),
  procedurePractitioner: Array(String),
  consentCode: String,
  procedurePriority: Number,
  associatedDiagnosisCode: String,
  
  }, { timestamps: true });
  
export interface HL7ProceduresV3I extends Segment{
  setIDProcedure: string
  procedureCodingMethod: string
  procedureCode: string
  procedureDescription: string
  procedureDateTime: Date
  procedureType: string
  procedureMinutes: number
  anesthesiologist: string[]
  anesthesiaCode: string
  anesthesiaMinutes: number
  surgeon: string[]
  procedurePractitioner: string[]
  consentCode: string
  procedurePriority: number
  associatedDiagnosisCode: string
  
  }
  export const HL7ProceduresV3 = mongoose.model<HL7ProceduresV3Document> ("HL7ProceduresV3", HL7ProceduresV3Schema);

