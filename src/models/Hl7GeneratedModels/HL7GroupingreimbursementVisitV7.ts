
// Generated typescript code of HL7v 2.7 GP1  (Grouping/reimbursement - Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingreimbursementVisitV7Document = mongoose.Document & HL7GroupingreimbursementVisitV7I

const HL7GroupingreimbursementVisitV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  typeOfBillCode: String,
  revenueCode: Array(String),
  overallClaimDispositionCode: String,
  oceEditsPerVisitCode: Array(String),
  outlierCost: String,
  
  }, { timestamps: true });
  
export interface HL7GroupingreimbursementVisitV7I extends Segment{
  typeOfBillCode: string
  revenueCode: string[]
  overallClaimDispositionCode: string
  oceEditsPerVisitCode: string[]
  outlierCost: string
  
  }
  export const HL7GroupingreimbursementVisitV7 = mongoose.model<HL7GroupingreimbursementVisitV7Document> ("HL7GroupingreimbursementVisitV7", HL7GroupingreimbursementVisitV7Schema);

