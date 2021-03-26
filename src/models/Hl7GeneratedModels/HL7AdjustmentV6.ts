
// Generated typescript code of HL7v 2.6 ADJ  (Adjustment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AdjustmentV6Document = mongoose.Document & HL7AdjustmentV6I

const HL7AdjustmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerAdjustmentNumber: String,
  payerAdjustmentNumber: String,
  adjustmentSequenceNumber: String,
  adjustmentCategory: String,
  adjustmentAmount: Array(String),
  adjustmentQuantity: String,
  adjustmentReasonPA: String,
  adjustmentDescription: String,
  originalValue: Number,
  substituteValue: Number,
  adjustmentAction: String,
  providerAdjustmentNumberCrossReference: String,
  providerProductServiceLineItemNumberCrossReference: String,
  adjustmentDate: String,
  responsibleOrganization: String,
  
  }, { timestamps: true });
  
export interface HL7AdjustmentV6I extends Segment{
  providerAdjustmentNumber: string
  payerAdjustmentNumber: string
  adjustmentSequenceNumber: string
  adjustmentCategory: string
  adjustmentAmount: string[]
  adjustmentQuantity: string
  adjustmentReasonPA: string
  adjustmentDescription: string
  originalValue: number
  substituteValue: number
  adjustmentAction: string
  providerAdjustmentNumberCrossReference: string
  providerProductServiceLineItemNumberCrossReference: string
  adjustmentDate: string
  responsibleOrganization: string
  
  }
  export const HL7AdjustmentV6 = mongoose.model<HL7AdjustmentV6Document> ("HL7AdjustmentV6", HL7AdjustmentV6Schema);

