
// Generated typescript code of HL7v 2.4 GP1  (Grouping/Reimbursement - Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingReimbursementVisitV4Document = mongoose.Document & HL7GroupingReimbursementVisitV4I

const HL7GroupingReimbursementVisitV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  typeOfBillCode: String,
  revenueCode: Array(String),
  overallClaimDispositionCode: String,
  oCEEditsPerVisitCode: Array(String),
  outlierCost: String,
  
  }, { timestamps: true });
  
export interface HL7GroupingReimbursementVisitV4I extends Segment{
  typeOfBillCode: string
  revenueCode: string[]
  overallClaimDispositionCode: string
  oCEEditsPerVisitCode: string[]
  outlierCost: string
  
  }
  export const HL7GroupingReimbursementVisitV4 = mongoose.model<HL7GroupingReimbursementVisitV4Document> ("HL7GroupingReimbursementVisitV4", HL7GroupingReimbursementVisitV4Schema);

