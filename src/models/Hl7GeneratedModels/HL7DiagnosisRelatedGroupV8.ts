
// Generated typescript code of HL7v 2.8 DRG  (Diagnosis Related Group)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DiagnosisRelatedGroupV8Document = mongoose.Document & HL7DiagnosisRelatedGroupV8I

const HL7DiagnosisRelatedGroupV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  diagnosticRelatedGroup: String,
  drgAssignedDateTime: String,
  drgApprovalIndicator: String,
  drgGrouperReviewCode: String,
  outlierType: String,
  outlierDays: Number,
  outlierCost: String,
  drgPayor: String,
  outlierReimbursement: String,
  confidentialIndicator: String,
  drgTransferType: String,
  nameOfCoder: String,
  grouperStatus: String,
  pcclValueCode: String,
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
  
export interface HL7DiagnosisRelatedGroupV8I extends Segment{
  diagnosticRelatedGroup: string
  drgAssignedDateTime: string
  drgApprovalIndicator: string
  drgGrouperReviewCode: string
  outlierType: string
  outlierDays: number
  outlierCost: string
  drgPayor: string
  outlierReimbursement: string
  confidentialIndicator: string
  drgTransferType: string
  nameOfCoder: string
  grouperStatus: string
  pcclValueCode: string
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
  export const HL7DiagnosisRelatedGroupV8 = mongoose.model<HL7DiagnosisRelatedGroupV8Document> ("HL7DiagnosisRelatedGroupV8", HL7DiagnosisRelatedGroupV8Schema);

