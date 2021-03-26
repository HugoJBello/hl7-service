
// Generated typescript code of HL7v 2.8 ADJ  (Adjustment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AdjustmentV8Document = mongoose.Document & HL7AdjustmentV8I

const HL7AdjustmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerAdjustmentNumber: String,
  payerAdjustmentNumber: String,
  adjustmentSequenceNumber: String,
  adjustmentCategory: String,
  adjustmentAmount: String,
  adjustmentQuantity: String,
  adjustmentReasonPa: String,
  adjustmentDescription: String,
  originalValue: Number,
  substituteValue: Number,
  adjustmentAction: String,
  providerAdjustmentNumberCrossReference: String,
  providerProductServiceLineItemNumberCrossReference: String,
  adjustmentDate: String,
  responsibleOrganization: String,
  
  }, { timestamps: true });
  
export interface HL7AdjustmentV8I extends Segment{
  providerAdjustmentNumber: string
  payerAdjustmentNumber: string
  adjustmentSequenceNumber: string
  adjustmentCategory: string
  adjustmentAmount: string
  adjustmentQuantity: string
  adjustmentReasonPa: string
  adjustmentDescription: string
  originalValue: number
  substituteValue: number
  adjustmentAction: string
  providerAdjustmentNumberCrossReference: string
  providerProductServiceLineItemNumberCrossReference: string
  adjustmentDate: string
  responsibleOrganization: string
  
  }
  export const HL7AdjustmentV8 = mongoose.model<HL7AdjustmentV8Document> ("HL7AdjustmentV8", HL7AdjustmentV8Schema);

