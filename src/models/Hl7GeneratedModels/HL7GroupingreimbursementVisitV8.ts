
// Generated typescript code of HL7v 2.8 GP1  (Grouping/reimbursement - Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingreimbursementVisitV8Document = mongoose.Document & HL7GroupingreimbursementVisitV8I

const HL7GroupingreimbursementVisitV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  typeOfBillCode: String,
  revenueCode: Array(String),
  overallClaimDispositionCode: String,
  oceEditsPerVisitCode: Array(String),
  outlierCost: String,
  
  }, { timestamps: true });
  
export interface HL7GroupingreimbursementVisitV8I extends Segment{
  typeOfBillCode: string
  revenueCode: string[]
  overallClaimDispositionCode: string
  oceEditsPerVisitCode: string[]
  outlierCost: string
  
  }
  export const HL7GroupingreimbursementVisitV8 = mongoose.model<HL7GroupingreimbursementVisitV8Document> ("HL7GroupingreimbursementVisitV8", HL7GroupingreimbursementVisitV8Schema);

