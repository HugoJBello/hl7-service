
// Generated typescript code of HL7v 2.6 DRG  (Diagnosis Related Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisRelatedGroupV6Document = mongoose.Document & HL7DiagnosisRelatedGroupV6I

const HL7DiagnosisRelatedGroupV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  diagnosticRelatedGroup: String,
  dRGAssignedDateTime: String,
  dRGApprovalIndicator: String,
  dRGGrouperReviewCode: String,
  outlierType: String,
  outlierDays: Number,
  outlierCost: String,
  dRGPayor: String,
  outlierReimbursement: String,
  confidentialIndicator: String,
  dRGTransferType: String,
  nameOfCoder: String,
  grouperStatus: String,
  pCCLValueCode: String,
  effectiveWeight: Number,
  monetaryAmount: String,
  statusPatient: String,
  grouperSoftwareName: String,
  grouperSoftwareVersion: String,
  statusFinancialCalculation: String,
  relativeDiscountSurcharge: String,
  basicCharge: String,
  totalCharge: String,
  discountSurcharge: String,
  calculatedDays: Number,
  statusGender: String,
  statusAge: String,
  statusLengthOfStay: String,
  statusSameDayFlag: String,
  statusSeparationMode: String,
  statusWeightAtBirth: String,
  statusRespirationMinutes: String,
  statusAdmission: String,
  
  }, { timestamps: true });
  
export interface HL7DiagnosisRelatedGroupV6I extends Segment{
  diagnosticRelatedGroup: string
  dRGAssignedDateTime: string
  dRGApprovalIndicator: string
  dRGGrouperReviewCode: string
  outlierType: string
  outlierDays: number
  outlierCost: string
  dRGPayor: string
  outlierReimbursement: string
  confidentialIndicator: string
  dRGTransferType: string
  nameOfCoder: string
  grouperStatus: string
  pCCLValueCode: string
  effectiveWeight: number
  monetaryAmount: string
  statusPatient: string
  grouperSoftwareName: string
  grouperSoftwareVersion: string
  statusFinancialCalculation: string
  relativeDiscountSurcharge: string
  basicCharge: string
  totalCharge: string
  discountSurcharge: string
  calculatedDays: number
  statusGender: string
  statusAge: string
  statusLengthOfStay: string
  statusSameDayFlag: string
  statusSeparationMode: string
  statusWeightAtBirth: string
  statusRespirationMinutes: string
  statusAdmission: string
  
  }
  export const HL7DiagnosisRelatedGroupV6 = mongoose.model<HL7DiagnosisRelatedGroupV6Document> ("HL7DiagnosisRelatedGroupV6", HL7DiagnosisRelatedGroupV6Schema);

