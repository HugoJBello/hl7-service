
// Generated typescript code of HL7v 2.4 DRG  (Diagnosis Related Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisRelatedGroupV4Document = mongoose.Document & HL7DiagnosisRelatedGroupV4I

const HL7DiagnosisRelatedGroupV4Schema = new mongoose.Schema({
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
  
export interface HL7DiagnosisRelatedGroupV4I extends Segment{
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
  export const HL7DiagnosisRelatedGroupV4 = mongoose.model<HL7DiagnosisRelatedGroupV4Document> ("HL7DiagnosisRelatedGroupV4", HL7DiagnosisRelatedGroupV4Schema);

