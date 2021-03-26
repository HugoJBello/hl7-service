
// Generated typescript code of HL7v 2.2 PR1  (Procedures)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProceduresV2Document = mongoose.Document & HL7ProceduresV2I

const HL7ProceduresV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdProcedure: String,
  procedureCodingMethod: Array(String),
  procedureCode: Array(String),
  procedureDescription: Array(String),
  procedureDateTime: Date,
  procedureType: String,
  procedureMinutes: Number,
  anesthesiologist: String,
  anesthesiaCode: String,
  anesthesiaMinutes: Number,
  surgeon: String,
  procedurePractitioner: Array(String),
  consentCode: String,
  procedurePriority: Number,
  
  }, { timestamps: true });
  
export interface HL7ProceduresV2I extends Segment{
  setIdProcedure: string
  procedureCodingMethod: string[]
  procedureCode: string[]
  procedureDescription: string[]
  procedureDateTime: Date
  procedureType: string
  procedureMinutes: number
  anesthesiologist: string
  anesthesiaCode: string
  anesthesiaMinutes: number
  surgeon: string
  procedurePractitioner: string[]
  consentCode: string
  procedurePriority: number
  
  }
  export const HL7ProceduresV2 = mongoose.model<HL7ProceduresV2Document> ("HL7ProceduresV2", HL7ProceduresV2Schema);

