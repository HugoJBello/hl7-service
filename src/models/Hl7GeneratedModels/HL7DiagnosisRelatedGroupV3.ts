
// Generated typescript code of HL7v 2.3 DRG  (Diagnosis Related Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisRelatedGroupV3Document = mongoose.Document & HL7DiagnosisRelatedGroupV3I

const HL7DiagnosisRelatedGroupV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  diagnosticRelatedGroup: String,
  dRGAssignedDateTime: Date,
  dRGApprovalIndicator: String,
  dRGGrouperReviewCode: String,
  outlierType: String,
  outlierDays: Number,
  outlierCost: String,
  dRGPayor: String,
  outlierReimbursement: String,
  confidentialIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisRelatedGroupV3I extends Segment{
  diagnosticRelatedGroup: string
  dRGAssignedDateTime: Date
  dRGApprovalIndicator: string
  dRGGrouperReviewCode: string
  outlierType: string
  outlierDays: number
  outlierCost: string
  dRGPayor: string
  outlierReimbursement: string
  confidentialIndicator: string
  
  }
  export const HL7DiagnosisRelatedGroupV3 = mongoose.model<HL7DiagnosisRelatedGroupV3Document> ("HL7DiagnosisRelatedGroupV3", HL7DiagnosisRelatedGroupV3Schema);

