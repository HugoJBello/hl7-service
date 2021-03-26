
// Generated typescript code of HL7v 2.5 GP1  (Grouping/Reimbursement - Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingReimbursementVisitV5Document = mongoose.Document & HL7GroupingReimbursementVisitV5I

const HL7GroupingReimbursementVisitV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  typeOfBillCode: String,
  revenueCode: Array(String),
  overallClaimDispositionCode: String,
  oCEEditsPerVisitCode: Array(String),
  outlierCost: String,
  
  }, { timestamps: true });
  
export interface HL7GroupingReimbursementVisitV5I extends Segment{
  typeOfBillCode: string
  revenueCode: string[]
  overallClaimDispositionCode: string
  oCEEditsPerVisitCode: string[]
  outlierCost: string
  
  }
  export const HL7GroupingReimbursementVisitV5 = mongoose.model<HL7GroupingReimbursementVisitV5Document> ("HL7GroupingReimbursementVisitV5", HL7GroupingReimbursementVisitV5Schema);

