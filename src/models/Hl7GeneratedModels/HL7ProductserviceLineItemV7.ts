
// Generated typescript code of HL7v 2.7 PSL  (Product/service Line Item)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductserviceLineItemV7Document = mongoose.Document & HL7ProductserviceLineItemV7I

const HL7ProductserviceLineItemV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  providerProductServiceLineItemNumber: String,
  payerProductServiceLineItemNumber: String,
  productServiceLineItemSequenceNumber: String,
  providerTrackingId: String,
  payerTrackingId: String,
  productServiceLineItemStatus: String,
  productServiceCode: String,
  productServiceCodeModifier: String,
  productServiceCodeDescription: String,
  productServiceEffectiveDate: String,
  productServiceExpirationDate: String,
  productServiceQuantity: String,
  productServiceUnitCost: String,
  numberOfItemsPerUnit: Number,
  productServiceGrossAmount: String,
  productServiceBilledAmount: String,
  productServiceClarificationCodeType: String,
  productServiceClarificationCodeValue: String,
  healthDocumentReferenceIdentifier: String,
  processingConsiderationCode: String,
  restrictedDisclosureIndicator: String,
  relatedProductServiceCodeIndicator: String,
  productServiceAmountForPhysician: String,
  productServiceCostFactor: Number,
  costCenter: String,
  billingPeriod: String,
  daysWithoutBilling: Number,
  sessionno: Number,
  executingPhysicianId: String,
  responsiblePhysicianId: String,
  roleExecutingPhysician: String,
  medicalRoleExecutingPhysician: String,
  sideOfBody: String,
  numberOfTpsPp: Number,
  tpvaluePp: String,
  internalScalingFactorPp: Number,
  externalScalingFactorPp: Number,
  amountPp: String,
  numberOfTpsTechnicalPart: Number,
  tpvalueTechnicalPart: String,
  internalScalingFactorTechnicalPart: Number,
  externalScalingFactorTechnicalPart: Number,
  amountTechnicalPart: String,
  totalAmountProfessionalPartTechnicalPart: String,
  vatrate: Number,
  mainservice: String,
  validation: String,
  comment: String,
  
  }, { timestamps: true });
  
export interface HL7ProductserviceLineItemV7I extends Segment{
  providerProductServiceLineItemNumber: string
  payerProductServiceLineItemNumber: string
  productServiceLineItemSequenceNumber: string
  providerTrackingId: string
  payerTrackingId: string
  productServiceLineItemStatus: string
  productServiceCode: string
  productServiceCodeModifier: string
  productServiceCodeDescription: string
  productServiceEffectiveDate: string
  productServiceExpirationDate: string
  productServiceQuantity: string
  productServiceUnitCost: string
  numberOfItemsPerUnit: number
  productServiceGrossAmount: string
  productServiceBilledAmount: string
  productServiceClarificationCodeType: string
  productServiceClarificationCodeValue: string
  healthDocumentReferenceIdentifier: string
  processingConsiderationCode: string
  restrictedDisclosureIndicator: string
  relatedProductServiceCodeIndicator: string
  productServiceAmountForPhysician: string
  productServiceCostFactor: number
  costCenter: string
  billingPeriod: string
  daysWithoutBilling: number
  sessionno: number
  executingPhysicianId: string
  responsiblePhysicianId: string
  roleExecutingPhysician: string
  medicalRoleExecutingPhysician: string
  sideOfBody: string
  numberOfTpsPp: number
  tpvaluePp: string
  internalScalingFactorPp: number
  externalScalingFactorPp: number
  amountPp: string
  numberOfTpsTechnicalPart: number
  tpvalueTechnicalPart: string
  internalScalingFactorTechnicalPart: number
  externalScalingFactorTechnicalPart: number
  amountTechnicalPart: string
  totalAmountProfessionalPartTechnicalPart: string
  vatrate: number
  mainservice: string
  validation: string
  comment: string
  
  }
  export const HL7ProductserviceLineItemV7 = mongoose.model<HL7ProductserviceLineItemV7Document> ("HL7ProductserviceLineItemV7", HL7ProductserviceLineItemV7Schema);

