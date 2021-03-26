
// Generated typescript code of HL7v 2.6 GP1  (Grouping/Reimbursement - Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GroupingReimbursementVisitV6Document = mongoose.Document & HL7GroupingReimbursementVisitV6I

const HL7GroupingReimbursementVisitV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  typeOfBillCode: String,
  revenueCode: Array(String),
  overallClaimDispositionCode: String,
  oCEEditsPerVisitCode: Array(String),
  outlierCost: String,
  
  }, { timestamps: true });
  
export interface HL7GroupingReimbursementVisitV6I extends Segment{
  typeOfBillCode: string
  revenueCode: string[]
  overallClaimDispositionCode: string
  oCEEditsPerVisitCode: string[]
  outlierCost: string
  
  }
  export const HL7GroupingReimbursementVisitV6 = mongoose.model<HL7GroupingReimbursementVisitV6Document> ("HL7GroupingReimbursementVisitV6", HL7GroupingReimbursementVisitV6Schema);

