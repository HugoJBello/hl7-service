
// Generated typescript code of HL7v 2.5 DRG  (Diagnosis Related Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisRelatedGroupV5Document = mongoose.Document & HL7DiagnosisRelatedGroupV5I

const HL7DiagnosisRelatedGroupV5Schema = new mongoose.Schema({
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
  dRGTransferType: String,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisRelatedGroupV5I extends Segment{
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
  dRGTransferType: string
  
  }
  export const HL7DiagnosisRelatedGroupV5 = mongoose.model<HL7DiagnosisRelatedGroupV5Document> ("HL7DiagnosisRelatedGroupV5", HL7DiagnosisRelatedGroupV5Schema);

